import { injectable } from "inversify";
import { ILanguageGateway } from "./ILanguageGateway";
import i18next, { TFunction } from "i18next";
import { action, computed, makeObservable, observable } from "mobx";
import { LocaleTypes } from "./LocaleTypes";
import views from "./views";
import shared from "./shared";

@injectable()
export default class LanguageGateway implements ILanguageGateway {
  public translator: TFunction = null;
  public currentLanguage: LocaleTypes = null;

  constructor() {
    makeObservable(this, {
      translator: observable,
      currentLanguage: observable,
      setTranslator: action,
      setCurrentLanguage: action,
      isLoading: computed,
    });
  }

  get isLoading(): boolean {
    return this.translator === null || this.currentLanguage === null;
  }

  public init = async (locale: LocaleTypes): Promise<void> => {
    const translator = await i18next.init({
      lng: locale,
      fallbackLng: locale,
      load: "currentOnly",
      ns: ["shared", "views"],
      resources: {
        [locale]: {
          views: views[locale],
          shared: shared[locale],
        },
      },
    });
    this.setTranslator(translator);
    this.setCurrentLanguage(locale);
  };

  public get = (localeKey: string): string => {
    return this.translator(localeKey);
  };

  public getInterpolation = (
    localeKey: string,
    interpolations: Record<string, string | number>
  ): string => {
    return this.translator(localeKey, { ...interpolations });
  };

  public changeLanguage = async (locale: LocaleTypes): Promise<void> => {
    const translator = await i18next.changeLanguage(locale);
    this.setTranslator(translator);
    this.setCurrentLanguage(locale);
  };

  public setTranslator = (translator: TFunction): void => {
    this.translator = translator;
  };

  public setCurrentLanguage = (locale: LocaleTypes): void => {
    this.currentLanguage = locale;
  };
}
