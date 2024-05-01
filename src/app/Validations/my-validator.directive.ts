import { Directive } from '@angular/core';
import { AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMyValidator]'
})
export class MyValidatorDirective implements Validator {

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let retFunc={'emaillErorr':{'value':control.value}}
    let value:string=control.value
    //  if(value.includes('@'))
    //    return null
    return value.includes('@')?null : retFunc
  }

  registerOnValidatorChange?(fn: () => void): void {
    throw new Error('Method not implemented.');
  }

}
