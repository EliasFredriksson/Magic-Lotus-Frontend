import { inject, injectable } from "inversify";
import TYPES from "../../../IOC/TYPES";
import type { IDocumentUtils } from "../../services/DocumentUtils/IDocumentUtils";

@injectable()
export default class LandingPresenter {
  @inject(TYPES.SERVICES.IDocumentUtils)
  private documentUtils: IDocumentUtils;

  init = () => {
    this.documentUtils.setTitle("Landing");
  };
}
