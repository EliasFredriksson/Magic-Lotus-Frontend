import { StorageTypes } from "./StorageTypes";

export interface IStorageGateway {
  setItem: <T>(type: StorageTypes, key: string, data: T) => void;
  getItem: <T>(type: StorageTypes, key: string) => T;
}
