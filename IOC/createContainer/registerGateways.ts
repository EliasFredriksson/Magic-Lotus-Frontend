import { Container } from "inversify";
import TYPES from "../TYPES";
import type { IStorageGateway } from "../../src/gateways/StorageGateway/IStorageGateway";
import type { IDocumentGateway } from "../../src/gateways/DocumentGateway/IDocumentGateway";
import type { ILanguageGateway } from "../../src/gateways/LanguageGateway/ILanguageGateway";
import StorageGateway from "../../src/gateways/StorageGateway/StorageGateway";
import DocumentGateway from "../../src/gateways/DocumentGateway/DocumentGateway";
import LanguageGateway from "../../src/gateways/LanguageGateway/LanguageGateway";

export const registerGateways = (container: Container): Container => {
  container
    .bind<IStorageGateway>(TYPES.GATEWAYS.IStorageGateway)
    .to(StorageGateway);

  container
    .bind<IDocumentGateway>(TYPES.GATEWAYS.IDocumentGateway)
    .to(DocumentGateway);

  container
    .bind<ILanguageGateway>(TYPES.GATEWAYS.ILanguageGateway)
    .to(LanguageGateway)
    .inSingletonScope();

  return container;
};
