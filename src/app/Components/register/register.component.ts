import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IUser } from 'src/app/Models/IUser';
import { ChangeDetectorRef } from '@angular/core';
import { MyValidatorDirective } from 'src/app/Validations/my-validator.directive';
import { PostService } from 'src/app/Services/Post.service';
import { IPost } from 'src/app/Models/IPost';
import { I18nPluralPipe } from '@angular/common';
import { Observable, catchError, map, of } from 'rxjs';
import { CrossFildValidatoePassword } from 'src/app/Validations/CrossFormValidation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
RegsterFormGroup
user!:IUser;
post!:IPost 
  constructor( private FB:FormBuilder,private cdr: ChangeDetectorRef,
    private postServ:PostService
  )
  {
    this.RegsterFormGroup=FB.group(
      {
        name:['',[Validators.required,this.createAsyncValidators()]],
        address:FB.group({
            city:[''],
            postalcode:[''],
            street:['']
        }),
        exampleRadios:[''],
        exampleRadiosOther:[''],
        email:['',[Validators.required]],
        phone:[''],
        password:['']
      }
  ,{Validators:[CrossFildValidatoePassword()]})
  //  this.RegsterFormGroup=new FormGroup(
  //   {
  //     name:new FormControl('',[Validators.required,Validators.pattern('[A-Za-z]{3}')]),
  //     address:new FormGroup(
  //       {
  //         city:new FormControl(''),
  //         postalcode:new FormControl(''),
  //         street:new FormControl('')

  //       },
  //     ),
  //     phone:new FormControl(''),
  //     email:new FormControl(''),
  //     password:new FormControl('')
     
  //   }
   //)

  }
  // changeValidation() {
  //   // Your logic to change form control value goes here
  
  //   // Manually trigger change detection
  //   this.cdr.detectChanges();
  // }
  ngOnInit(): void {
    this.RegsterFormGroup.patchValue(
      {
        name:'Marwa'
      }
    );
    // this.RegsterFormGroup.setValue(
    //   {
    //     name:'Maroo',
    //     phone:'01280398713',
    //     password:'11234',
    //     exampleRadios:"Marwa",
    //     email:'marwa@gmai,.com',
    //     address:
    //     {
    //       city:'Minya',
    //       postalcode:'ygdu799',
    //       street:'masraf'
    //     },

    //   }
    // )
  }
  get name()
  {
    return this.RegsterFormGroup.get('name')
  }
  get email()
  {
    return this.RegsterFormGroup.get('email')
  }
  get exampleRadios()
  {
    return this.RegsterFormGroup.get('exampleRadios')
  }
  get exampleRadiosOther()
  {
    return this.RegsterFormGroup.get('exampleRadiosOther')
  }

  changeValidation()
  {
    if(this.exampleRadios?.value=="option3")
      {
        this.exampleRadiosOther?.addValidators([Validators.required])
      }
      else
      {
        this.exampleRadiosOther?.clearValidators()
        this.exampleRadiosOther?.updateValueAndValidity()
      }
  }

  // validate():ValidatorFn
  // {
  // return(control: AbstractControl<any, any>): ValidationErrors | null=> {
  //   let retFunc={'emaillErorr':{'value':control.value}}
  //   let value:string=control.value
  //   //  if(value.includes('@'))
  //   //    return null
  //   return value.includes('@')?null : retFunc
  // }
  // }
  onSubmit()
  {
    if(this.RegsterFormGroup.valid)
      {
        console.log(this.RegsterFormGroup.value)
      }
  }
  createAsyncValidators():ValidatorFn
  {
    return (control: AbstractControl): Observable<any> => {
      {
        const item = control.value;
        const retFunc = { 'PostExist': { 'value': control.value } };
  
        return this.postServ.getById(item).pipe(
          map((res) => {
            console.log(res)
            return res ? null :retFunc;
          }),
          catchError(() => of(retFunc)) // Handling errors
        );
      };
    }
  }
  TestvalisateAsync(event:EventTarget):any
  {
    let item=event as HTMLInputElement
    this.postServ.getById(item.value).subscribe
    (
      {
        next:data=>
          {
            this.post=data
            return this.post
          },
          error:err=>
          {
             return err
          }
      }
    )
  }
}
