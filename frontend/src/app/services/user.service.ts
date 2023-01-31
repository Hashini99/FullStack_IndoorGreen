import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { user } from '../shared/models/user';
import { userlogin_in } from '../shared/interfaces/userlogin_in';
import { userreg_i } from '../shared/interfaces/userreg_i';
import { login_url, register_url } from '../shared/constants/urls';

const USER_KEY = 'user';
@Injectable({
  providedIn: 'root'
})
export class userService {
  private userSubject =
  new BehaviorSubject<user>(this.getUserFromLocalStorage());
  public userObservable:Observable<user>;

  constructor(private http:HttpClient, private toastrService:ToastrService) {
    this.userObservable = this.userSubject.asObservable();
  }
  public get currentUser():user{
    return this.userSubject.value;
  }


  login(userLogin:userlogin_in):Observable<user>{
    return this.http.post<user>(login_url,userLogin).pipe(
      tap({
        next: (user) =>{
          this.userSubject.next(user);
          this.setUserToLocalStorage(user);
          this.toastrService.success(
            `Hello  ${user.name}!`,
            'Login Successful'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed');
        }
      })
    ) ;

}

register(userRegiser:userreg_i): Observable<user>{
  return this.http.post<user>(register_url, userRegiser).pipe(
    tap({
      next: (user) => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
        this.toastrService.success(
          `Hello ${user.name}`,
          'Register Successful'
        )
      },
      error: (errorResponse) => {
        this.toastrService.error(errorResponse.error,
          'Register Failed')
      }
    })
  )
}



logout(){
  this.userSubject.next(new user());
  localStorage.removeItem(USER_KEY);
  window.location.reload();
}

private setUserToLocalStorage(user:user){
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

private getUserFromLocalStorage():user{
  const userJson = localStorage.getItem(USER_KEY);
  if(userJson) return JSON.parse(userJson) as user;
  return new user();
}
}
