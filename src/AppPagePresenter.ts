import { injectable } from "inversify";
import { makeObservable, observable } from "mobx";

@injectable()
export default class AppPagePresenter {
  firstName: string = null;
  lastName: string = null;

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
    });
  }

  initializeApplication = () => {
    console.log("INITIALIZING APP...");

    setTimeout(() => {
      this.firstName = "Elias";
      this.lastName = "Fredriksson";
    }, 2000);
  };
}
