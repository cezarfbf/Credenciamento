import { UserApi } from 'src/fw/users/user-api';
import { Router } from '@angular/router';
import { Observable, of} from 'rxjs';
import { Injectable } from '@angular/core';
import { delay } from 'rxjs/internal/operators';

@Injectable()
export class UserService implements UserApi {

  isAuthenticated = false;

  constructor(private router: Router) { }

  signIn(username: string, password: string, rememberMe: boolean): Observable<any> {
    console.log('UserService.signIn: ' + username + ' ' + password + ' ' + rememberMe);
    this.isAuthenticated = true;
    return of({}).pipe(delay(2000));
    // return Observable.of({}).delay(2000).flatMap(x=>Observable.throw('Invalid User Name and/or Password'));
  }

  signOut(): Observable<any> {
      this.isAuthenticated = false;
      this.router.navigate(['/signin']);
      return of({});
  }

}