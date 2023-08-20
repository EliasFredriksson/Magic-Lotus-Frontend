import { inject, injectable } from "inversify";
import TYPES from "../../../IOC/TYPES";
import { computed, makeObservable } from "mobx";
import type { ILanguageGateway } from "../../gateways/LanguageGateway/ILanguageGateway";

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
      message: this.langGateway.get("views:landing.message"),
    };
  }
}
