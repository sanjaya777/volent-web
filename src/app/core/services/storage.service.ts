import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage : Storage
  constructor() { 
    this.storage = localStorage;
  }

  public get(key: string): any {
    const item = this.storage.getItem(key);

    if (item && item !== 'undefined' && item != null) {
        return item;
    }

    return;
  }

  public store(key: string, value: any) {
      this.storage.setItem(key, JSON.stringify(value));
  }

  public remove(key: string) {
      this.storage.removeItem(key);
  }
}
