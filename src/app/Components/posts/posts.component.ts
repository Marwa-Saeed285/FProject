import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IPost } from 'src/app/Models/IPost';
import { PostService } from 'src/app/Services/Post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts!:IPost[]
  Newpost!:IPost
  isAddedd:boolean=false
  pageSize = 10; // Default page size

  dataSource = new MatTableDataSource<any>(this.posts);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
 
constructor(private postserv:PostService,private paginat: MatPaginator)
{

}
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
}
ngOnInit(): void {
 this.postserv.allPosts().subscribe(
  {
    next:data=>
      {
        this.posts=data
      }
  }
 )
}
onPageChange(event: PageEvent) {
  this.pageSize = event.pageSize;
  this.paginator.pageSize = this.pageSize;
}
// Add()
// {
//   let randomNumber: number=Math.floor(Math.random() * 101); ;
//   this.Newpost = {
//     id: `${randomNumber.toString()}`,
//     title: "NONO",
//     views: 200
//   };
//   this.postserv.add(this.Newpost).subscribe(
//     {
//       next:data=>{
//         // snackBar.open('Message archived')
//         this.isAddedd=true
//         console.log(data)},
//       error:err=>console.log(err)
//     },
//   )
// }
Update(id:string)
{

}
Delete(id:string)
{
  
}
}
