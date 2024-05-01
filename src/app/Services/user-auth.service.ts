import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
isAuth:BehaviorSubject<boolean>;
  constructor() 
  {
    this.isAuth=new BehaviorSubject<boolean>(false);
   }
  login(username:string,password:string)
  {
    let token:string="Marwa";
    localStorage.setItem("token",token);
    this.isAuth.next(true);
  }
  logout(){
   localStorage.removeItem("token")
   this.isAuth.next(false)
  }
  get IsLogged():boolean
  {
    return (localStorage.getItem("token"))?true:false;
  }
   SubjectValue():Observable<boolean>
  {
    return this.isAuth.asObservable()
  }
}
