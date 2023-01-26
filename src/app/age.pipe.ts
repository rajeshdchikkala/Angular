import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): number {
    let currentYear:any=new Date().getFullYear(); //2023
    let inputYear:any=new Date(value).getFullYear(); //employee DOB Name
    return currentYear-inputYear;
  }

}
