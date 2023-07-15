import { injectable } from "inversify";
import { IDocumentUtils } from "./IDocumentUtils";

@injectable()
export default class DocumentUtilsService implements IDocumentUtils {
  setTitle = (title: string) => {
    document.title = title;
  };
}
