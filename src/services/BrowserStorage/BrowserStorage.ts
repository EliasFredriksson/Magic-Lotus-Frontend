import { injectable } from "inversify";
import { BrowserStorageTypes } from "./BrowserStorageTypes";
import { IBrowserStorage } from "./IBrowserStorage";

const mapBrowserStorageTypeToStorageMethod = {
  [BrowserStorageTypes.LocalStorage]: localStorage,
  [BrowserStorageTypes.SessionStorage]: sessionStorage,
};

@injectable()
export default class BrowserStorageService implements IBrowserStorage {
  setItem = (type: BrowserStorageTypes, key: string, data: any) => {
    const storage = this.getStorage(type);
    const stringifiedData: string = JSON.stringify(data);
    storage.setItem(key, stringifiedData);
  };

  getItem = <T>(type: BrowserStorageTypes, key: string) => {
    const storage = this.getStorage(type);
    const storedData: string = storage.getItem(key);
    return JSON.parse(storedData) as T;
  };

  private getStorage = (type: BrowserStorageTypes): Storage => {
    return mapBrowserStorageTypeToStorageMethod[
      BrowserStorageTypes[type] ?? BrowserStorageTypes.LocalStorage
    ];
  };
}
