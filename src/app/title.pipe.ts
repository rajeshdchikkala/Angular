import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(empName: string, gender:string): unknown {
      if(gender.toLowerCase() ==="male") 
         return "Mr. "+empName;
      else
         return "Mrs. "+ empName;
  }

}
