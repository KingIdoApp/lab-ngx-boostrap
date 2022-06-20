import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { IUserService } from './user.service.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService {

  private readonly user: User = {
    id: 1,
    firstName: "สมศรี",
    lastName: "เจ็บจัง",
    avartar: "any"
  }

  constructor() {
  }

  getUser(): Observable<User> {
    return of(this.user);
  }
}
