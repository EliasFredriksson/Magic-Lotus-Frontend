import { BrowserStorageTypes } from "./BrowserStorageTypes";

export interface IBrowserStorageService {
  setItem: (type: BrowserStorageTypes, key: string, data: any) => void;
  getItem: <T>(type: BrowserStorageTypes, key: string) => T;
}