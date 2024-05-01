import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsideBarComponent } from './Components/aside-bar/aside-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { ProductListComponent } from './Components/Order/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDToEGPipe } from './Pipes/usdto-eg.pipe';
import { OrderMasterComponent } from './Components/Order/order-master/order-master.component';
import { LoginComponent } from './Components/login/login.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { PostsComponent } from './Components/posts/posts.component';
import { AddPostComponent } from './Components/add-post/add-post.component';
import { RegisterComponent } from './Components/register/register.component';
import { MyValidatorDirective } from './Validations/my-validator.directive';
import { UserComComponent } from './user-com/user-com.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    AsideBarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductListComponent,
    LightBoxDirective,
    USDToEGPipe,
    OrderMasterComponent,
    LoginComponent,
    MainLayoutComponent,
    ProductDetailsComponent,
    PostsComponent,
    AddPostComponent,
    RegisterComponent,
    MyValidatorDirective,
    UserComComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    // MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
