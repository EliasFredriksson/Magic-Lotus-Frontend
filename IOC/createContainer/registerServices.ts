import { Container } from "inversify";
import TYPES from "../TYPES";
import { IBrowserStorage } from "../../src/services/BrowserStorage/IBrowserStorage";
import BrowserStorageService from "../../src/services/BrowserStorage/BrowserStorage";
import { IDocumentUtils } from "../../src/services/DocumentUtils/IDocumentUtils";
import DocumentUtilsService from "../../src/services/DocumentUtils/DocumentUtils";

export const registerServices = (container: Container): Container => {
  container
    .bind<IBrowserStorage>(TYPES.SERVICES.IBrowserStorage)
    .to(BrowserStorageService);

  container
    .bind<IDocumentUtils>(TYPES.SERVICES.IDocumentUtils)
    .to(DocumentUtilsService);

  return container;
};
