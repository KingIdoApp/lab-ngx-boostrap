import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { IUserService } from './user.service.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  constructor() {

    console.log(typeof this);

   }

  getUser(): Observable<User> {
    return of({
      id: 1,
      firstName: "สมศรี",
      lastName: "เจ็บจัง",
      avartar: "any"
    })
  }
}
