import { inject, injectable } from "inversify";
import { computed, makeObservable } from "mobx";
import TYPES from "../IOC/TYPES";
import type { ILanguageGateway } from "./gateways/LanguageGateway/ILanguageGateway";
import type { IDocumentGateway } from "./gateways/DocumentGateway/IDocumentGateway";
import { LocaleTypes } from "./gateways/LanguageGateway/LocaleTypes";

@injectable()
export default class AppPresenter {
  @inject(TYPES.GATEWAYS.ILanguageGateway)
  private langService: ILanguageGateway;

  @inject(TYPES.GATEWAYS.IDocumentGateway)
  private documentService: IDocumentGateway;

  constructor() {
    makeObservable(this, {
      isLoading: computed,
    });
  }

  get isLoading(): boolean {
    return this.langService.isLoading;
  }

  public initializeApplication = async (): Promise<void> => {
    await this.langService.init(LocaleTypes.enGB);
    this.documentService.setTitle(this.langService.get("shared:magicLotus"));
  };
}
