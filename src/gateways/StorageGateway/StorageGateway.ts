import { injectable } from "inversify";
import { StorageTypes } from "./StorageTypes";
import { IStorageGateway } from "./IStorageGateway";

const mapBrowserStorageTypeToStorageMethod: Record<StorageTypes, Storage> = {
  [StorageTypes.LocalStorage]: localStorage,
  [StorageTypes.SessionStorage]: sessionStorage,
} as const;

@injectable()
export default class StorageGateway implements IStorageGateway {
  public setItem = <T>(type: StorageTypes, key: string, data: T): void => {
    const storage = this.getStorage(type);
    const stringifiedData: string = JSON.stringify(data);
    storage.setItem(key, stringifiedData);
  };

  public getItem = <T>(type: StorageTypes, key: string): T => {
    const storage = this.getStorage(type);
    const storedData: string = storage.getItem(key);
    return JSON.parse(storedData) as T;
  };

  private getStorage = (type: StorageTypes): Storage => {
    const key = StorageTypes[type] ? type : StorageTypes.LocalStorage;
    return mapBrowserStorageTypeToStorageMethod[key];
  };
}
