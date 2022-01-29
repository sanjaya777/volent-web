import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndpoints } from 'src/app/core/enums/api-endpoints.enum';
import { BaseService } from 'src/app/core/services/base.service';
import { InterestsDto } from 'src/app/core/models/interests-dto';
import { UserDto } from 'src/app/core/models/user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  
  constructor(private baseService : BaseService) { }

  getAllInterestAreas() : Observable<InterestsDto[]>
  {
    return this.baseService.findAll(ApiEndpoints.AllInterests);
  }

  registerUser(userInfo:UserDto)
  {
    return this.baseService.post(userInfo,ApiEndpoints.RegisterUser);
  }

}
