import { injectable } from "inversify";
import { makeObservable, observable, action } from "mobx";

@injectable()
export default class AppPagePresenter {
  firstName: string = null;
  lastName: string = null;

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      updateNames: action,
    });
  }

  initializeApplication = async () => {
    console.log("INITIALIZING APP...");

    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 2000);
    });

    this.updateNames();
    console.log("DONE!");
  };

  updateNames = (): void => {
    this.firstName = "Elias";
    this.lastName = "Fredriksson";
  };
}
