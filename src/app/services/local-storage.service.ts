import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
