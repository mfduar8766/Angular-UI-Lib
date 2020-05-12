import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  public static setLocalStorage(key: string, value: any) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  public static getLocalStorage(key: string) {
    return localStorage.getItem(key);
  }

  public static clearLocalStorage() {
    return localStorage.clear();
  }

  public static removeItem(key: string) {
    return localStorage.removeItem(key);
  }
}
