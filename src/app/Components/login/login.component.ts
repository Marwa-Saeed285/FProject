import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="Marwa";
  password:string="1234"
  isLogged:boolean=false
constructor(private servauth:UserAuthService){}
  ngOnInit(): void {
    this.isLogged=this.servauth.IsLogged
  }
login()
{
  this.servauth.login(this.username,this.password);
  this.isLogged=this.servauth.IsLogged

}
logout()
{
  this.servauth.logout();
  this.isLogged=this.servauth.IsLogged

}
}
