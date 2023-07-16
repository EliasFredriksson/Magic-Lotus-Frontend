import { inject, injectable } from "inversify";
import { computed, makeObservable } from "mobx";
import TYPES from "../IOC/TYPES";
import type { ILanguageService } from "./services/LanguageService/ILanguageService";
import { LocaleTypes } from "./services/LanguageService/LocaleTypes";
import type { IDocumentService } from "./services/DocumentService/IDocumentService";

@injectable()
export default class AppPresenter {
  @inject(TYPES.SERVICES.ILanguageService)
  private langService: ILanguageService;

  @inject(TYPES.SERVICES.IDocumentService)
  private documentService: IDocumentService;

  constructor() {
    makeObservable(this, {
      isLoading: computed,
    });
  }

  get isLoading(): boolean {
    return this.langService.isLoading;
  }

  initializeApplication = async (): Promise<void> => {
    await this.langService.init(LocaleTypes.enGB);
    const title = this.langService.get("shared:magicLotus");
    this.documentService.setTitle(title);
  };
}
