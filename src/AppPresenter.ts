import { inject, injectable } from "inversify";
import TYPES from "../IOC/TYPES";
import { BrowserStorageTypes } from "./services/BrowserStorage/BrowserStorageTypes";
import type IBrowserStorage from "./services/BrowserStorage/IBrowserStorage";

@injectable()
export default class AppPresenter {
  @inject(TYPES.SERVICES.IBrowserStorage)
  private browserStorage: IBrowserStorage;

  initializeApplication = (): void => {
    console.log("INITIALIZED APPLICATION");

    this.browserStorage.setItem(
      BrowserStorageTypes.SessionStorage,
      "TEST_KEY",
      "the best value"
    );
  };
}
