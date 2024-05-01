import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AuthGuard } from './Guards/auth.guard';
import { PostsComponent } from './Components/posts/posts.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:
    [
      {path:'',redirectTo:'/home',pathMatch:'full'},
      {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
      {path:'productlist',component:ProductListComponent},
      {path:'orderlist',component:OrderMasterComponent},
      {path:'posts',component:PostsComponent},
      {path:'addpost',component:AddPostComponent},
      { path: 'user',
       loadChildren:()=>import('src/app/Components/user-module/user-module.module').then(m=>m.UserModuleModule) },
      {path:'productdetails/:id',component:ProductDetailsComponent},
    ]
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
