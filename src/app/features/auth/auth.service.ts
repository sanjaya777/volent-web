import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of, pipe } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { ApiEndpoints } from 'src/app/core/enums/api-endpoints.enum';
import {ConfigurationService} from 'src/app/core/services/configuration.service';
import {StorageService} from 'src/app/core/services/storage.service';
import {BaseService} from 'src/app/core/services/base.service';
import { UserAuth } from 'src/app/core/models/user-auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    protected _http: HttpClient,
    private configurationService : ConfigurationService,
    private storageService : StorageService,
    private baseService : BaseService) { 

  }

  getToken():string{
    // For now it checks whether isauthenticate value is set for true
    let accessToken:string = this.storageService.get("access_token");
    return accessToken;
  }


  authenticateUser(user:UserAuth):Observable<boolean>{
    return this.baseService.post(user,ApiEndpoints.UserLogin);
  }
}
