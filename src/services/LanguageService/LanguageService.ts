import { inject, injectable } from "inversify";
import { ILanguageService } from "./ILanguageService";
import i18next, { TFunction } from "i18next";
import { action, computed, makeObservable, observable } from "mobx";
import { LocaleTypes } from "./LocaleTypes";

import views from "./views";
import shared from "./shared";

@injectable()
export default class LanguageService implements ILanguageService {
  translator: TFunction = null;
  currentLanguage: LocaleTypes = null;

  constructor() {
    makeObservable(this, {
      currentLanguage: observable,
      translator: observable,
      isLoading: computed,
      setCurrentLanguage: action,
      setTranslator: action,
    });
  }

  get isLoading(): boolean {
    return this.currentLanguage === null;
  }

  init = async (): Promise<void> => {
    if (this.translator) {
      return;
    }
    if (!this.currentLanguage) {
      this.setCurrentLanguage(LocaleTypes.enGB);
    }
    await i18next.init(
      {
        lng: this.currentLanguage,
        fallbackLng: LocaleTypes.enGB,
        load: "currentOnly",
        ns: ["shared", "views"],
        resources: {
          [LocaleTypes.enGB]: {
            views: views[LocaleTypes.enGB],
            shared: shared[LocaleTypes.enGB],
          },
        },
      },
      (_, instance) => {
        this.setTranslator(instance);
      }
    );
  };

  get = (localeKey: string): string => {
    return this.translator(localeKey);
  };

  getInterpolation = (
    localeKey: string,
    interpolations: Record<string, string | number>
  ): string => {
    return this.translator(localeKey, { ...interpolations });
  };

  setCurrentLanguage = async (locale: LocaleTypes) => {
    this.currentLanguage = locale;
  };

  setTranslator = async (translator: TFunction) => {
    this.translator = translator;
  };
}
