import { inject, injectable } from "inversify";
import TYPES from "../../../IOC/TYPES";
import type { ILanguageGateway } from "../../gateways/LanguageGateway/ILanguageGateway";
import { computed, makeObservable } from "mobx";

interface LocalesVm {
  message: string;
}

@injectable()
export default class LandingPresenter {
  @inject(TYPES.GATEWAYS.ILanguageGateway)
  private langGateway: ILanguageGateway;

  constructor() {
    makeObservable(this, {
      localesVm: computed,
    });
  }

  get localesVm(): LocalesVm {
    return {
      // message: this.langGateway.get("views:landing.message"),
      message: "test",
    };
  }
}
