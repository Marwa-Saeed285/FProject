import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDToEG'
})
export class USDToEGPipe implements PipeTransform {
  idNumber: string = '30028052400101'; 
  birthdate:any;
  transform(vaue:number): Date {

    return this.extractBirthdate();
  }
  extractBirthdate():Date {
    const birthdateString = this.idNumber.substring(0, 7);
    const year = parseInt(birthdateString.substring(0, 2));
    const month = parseInt(birthdateString.substring(5, 7))-1; 
    const day = parseInt(birthdateString.substring(6,8 ));
    return  this.birthdate = new Date(year, month, day);
  }

}
