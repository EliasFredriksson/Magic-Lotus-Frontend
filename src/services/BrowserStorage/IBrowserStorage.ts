import { BrowserStorageTypes } from "./BrowserStorageTypes";

export default interface IBrowserStorage {
  setItem: (type: BrowserStorageTypes, key: string, data: any) => void;
  getItem: <T>(type: BrowserStorageTypes, key: string) => T;
}
