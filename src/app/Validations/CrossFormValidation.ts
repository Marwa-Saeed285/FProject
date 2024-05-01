import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function CrossFildValidatoePassword():ValidatorFn
{
   return(control:AbstractControl):ValidationErrors|null =>
    {
        let password=control.get('password');  
        let confirmPassword=control.get('password');  
        if(!password||!confirmPassword||!password.value||!confirmPassword.value)
            {
                return null
            }

        let res={'CongirmingError':{'value':password?.value} }
        return password===confirmPassword?null:res
    }
}