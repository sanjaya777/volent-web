import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap,mapTo } from 'rxjs/operators';

import {Configuration} from '../models/configuration.model';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private configuration!:Configuration;

  constructor(private httpClient: HttpClient) { }

  load(): Observable<void> {
    return this.httpClient.get('./assets/config.json')
      .pipe(
        tap((configuration: any) => this.configuration = configuration),
        mapTo(undefined),
      );
  }

  getValue(key: string, defaultValue?: any): string {
    return this.configuration[key] || defaultValue;
  }
}
