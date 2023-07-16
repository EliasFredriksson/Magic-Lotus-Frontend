import { LocaleTypes } from "./LocaleTypes";

export interface ILanguageService {
  init: (locale: LocaleTypes) => Promise<void>;
  get: (localeKey: string) => string;
  getInterpolation: (
    localeKey: string,
    interpolations: Record<string, string | number>
  ) => string;
  setCurrentLanguage: (language: string) => Promise<void>;
  isLoading: boolean;
}
