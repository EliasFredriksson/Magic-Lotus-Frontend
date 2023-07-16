import { inject, injectable } from "inversify";
import TYPES from "../../../IOC/TYPES";
import type { ILanguageService } from "../../services/LanguageService/ILanguageService";

@injectable()
export default class LandingPresenter {
  @inject(TYPES.SERVICES.ILanguageService)
  private langService: ILanguageService;

  getLocaleKey = () => {
    const text = this.langService.get("shared:magicLotus");

    console.log("TEXT:\t", text);
  };
}
