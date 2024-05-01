import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isAuth:boolean=false
  constructor(private auth:UserAuthService){}
  ngOnInit(): void {
    this.auth.SubjectValue().subscribe(
      {
        next:data=>{
          this.isAuth=data
        }
      }
    )
  }

}
