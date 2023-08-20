import { injectable } from "inversify";
import type { IDocumentGateway } from "./IDocumentGateway";

@injectable()
export default class DocumentGateway implements IDocumentGateway {
  setTitle = (title: string): void => {
    document.title = title;
  };
}
