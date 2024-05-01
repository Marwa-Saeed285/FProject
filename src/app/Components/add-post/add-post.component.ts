import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IPost } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  Newpost:IPost={} as IPost

constructor(private postserv:PostService,private route:Router)
{

}
Add()
{
  let randomNumber: number=Math.floor(Math.random() * 101); ;
this.Newpost.id=randomNumber.toString()
  this.postserv.add(this.Newpost).subscribe(
    {
      next:data=>{
        // snackBar.open('Message archived')
        // this.isAddedd=true
        this.route.navigate(['/posts'])
        console.log(data)},
      
      error:err=>console.log(err)
    },
  )
}
}
