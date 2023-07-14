import { Container } from "inversify";
import IBrowserStorage from "../../src/services/BrowserStorage/IBrowserStorage";
import TYPES from "../TYPES";
import BrowserStorageService from "../../src/services/BrowserStorage/BrowserStorage";

export const registerServices = (container: Container): Container => {
  container
    .bind<IBrowserStorage>(TYPES.SERVICES.IBrowserStorage)
    .to(BrowserStorageService);

  return container;
};
