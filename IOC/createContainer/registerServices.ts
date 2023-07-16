import { Container } from "inversify";
import TYPES from "../TYPES";
import { IBrowserStorageService } from "../../src/services/BrowserStorageService/IBrowserStorageService";
import BrowserStorageService from "../../src/services/BrowserStorageService/BrowserStorageService";
import { IDocumentService } from "../../src/services/DocumentService/IDocumentService";
import DocumentService from "../../src/services/DocumentService/DocumentService";
import { ILanguageService } from "../../src/services/LanguageService/ILanguageService";
import LanguageService from "../../src/services/LanguageService/LanguageService";

export const registerServices = (container: Container): Container => {
  container
    .bind<IBrowserStorageService>(TYPES.SERVICES.IBrowserStorageService)
    .to(BrowserStorageService);

  container
    .bind<IDocumentService>(TYPES.SERVICES.IDocumentService)
    .to(DocumentService);

  container
    .bind<ILanguageService>(TYPES.SERVICES.ILanguageService)
    .to(LanguageService)
    .inSingletonScope();

  return container;
};
