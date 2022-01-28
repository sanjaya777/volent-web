import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ConfigurationService } from 'src/app/core/services/configuration.service'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    protected _http: HttpClient,
    private configurationService : ConfigurationService,
    ) { 
  }

  post<T>(t: T|any, endpoint: string): Observable<T> {
    let apiUrl = environment.ApiUrl;//this.configurationService.getValue("ApiUrl");
    return this._http.post<T>(apiUrl + endpoint, t);
  }

  update<T>(t: T|any, endpoint: string): Observable<T> {
    let apiUrl = environment.ApiUrl;//this.configurationService.getValue("ApiUrl");
    return this._http.put<T>(apiUrl + endpoint, t, {});
  }

  findById<T>(id: number, endpoint: string): Observable<T|any> {
    let apiUrl = environment.ApiUrl;//this.configurationService.getValue("ApiUrl");
    return this._http.get<T>(apiUrl + endpoint + "/" + id);
  }

  findAll<T>(endpoint: string): Observable<T|any> {
    let apiUrl = environment.ApiUrl;//this.configurationService.getValue("ApiUrl");
    return this._http.get<T>(apiUrl + endpoint);
  }

  delete<T>(endpoint: string): Observable<T> {
    let apiUrl = environment.ApiUrl;//this.configurationService.getValue("ApiUrl");
    return this._http.delete<T>(apiUrl + endpoint);
	}
}
