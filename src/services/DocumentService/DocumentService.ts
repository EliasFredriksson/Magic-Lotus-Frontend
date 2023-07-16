import { injectable } from "inversify";
import { IDocumentService } from "./IDocumentService";

@injectable()
export default class DocumentService implements IDocumentService {
  setTitle = (title: string) => {
    document.title = title;
  };
}
