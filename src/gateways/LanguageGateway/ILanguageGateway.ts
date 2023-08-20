import { LocaleTypes } from "./LocaleTypes";

export interface ILanguageGateway {
  init: (locale: LocaleTypes) => Promise<void>;
  get: (localeKey: string) => string;
  getInterpolation: (
    localeKey: string,
    interpolations: Record<string, string | number>
  ) => string;
  changeLanguage: (locale: LocaleTypes) => Promise<void>;
  isLoading: boolean;
}
