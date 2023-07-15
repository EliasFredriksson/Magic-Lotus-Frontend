import { inject, injectable } from "inversify";
import TYPES from "../IOC/TYPES";
import type { IBrowserStorage } from "./services/BrowserStorage/IBrowserStorage";
import AppPagePresenter from "./AppPagePresenter";
import { computed, makeObservable } from "mobx";

@injectable()
export default class AppPresenter {
  @inject(AppPagePresenter)
  private pagePresenter: AppPagePresenter;

  @inject(TYPES.SERVICES.IBrowserStorage)
  private browserStorage: IBrowserStorage;

  constructor() {
    makeObservable(this, {
      viewModel: computed,
    });
  }

  get viewModel() {
    const isLoading: boolean =
      !this.pagePresenter.firstName || !this.pagePresenter.lastName;
    const name = `${this.pagePresenter.firstName} ${this.pagePresenter.lastName}`;

    return {
      name,
      isLoading,
    };
  }

  initializeApplication = (): void => {
    // this.browserStorage.setItem(
    //   BrowserStorageTypes.SessionStorage,
    //   "TEST_KEY",
    //   "the best value"
    // );

    this.pagePresenter.initializeApplication();
  };
}
