import { Component } from '@angular/core';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent {
   employees:any[]=[];

  constructor(){


    this.employees=
    [
      {empid:'101',empname:'Ramu',gender:'Male',title:'Software Developer',salary:'60000',department:'1',address:'Hyderabad',dob:'01/01/1985'},
      {empid:'102',empname:'Vijay',gender:'Male',title:'Sr. Software Developer',salary:'80000',department:'2',address:'Goa',dob:'02/02/1986'},
      {empid:'103',empname:'Sandhya',gender:'Female',title:'Software Developer',salary:'50000',department:'3',address:'Kerala',dob:'03/03/1982'},
      {empid:'104',empname:'Ganesh',gender:'Male',title:'Software Lead',salary:'120000',department:'4',address:'Banglore',dob:'04/04/1988'},
      {empid:'105',empname:'Ananya',gender:'Female',title:'Software Manager',salary:'180000',department:'1',address:'Chennai',dob:'05/05/1986'},
      {empid:'106',empname:'Rakesh',gender:'Male',title:'Software Developer',salary:'70000',department:'2',address:'Delhi',dob:'02/10/1981'},
      {empid:'107',empname:'Lakshman',gender:'Male',title:'Sr. Software Developer',salary:'65000',department:'31',address:'Bihar',dob:'11/11/1989'},
      {empid:'108',empname:'Geeta',gender:'Female',title:'Software Lead',salary:'95000',department:'4',address:'Hyderabad',dob:'10/08/1985'},

    ]
  }

  refresh():void{

    this.employees=
    [
      {empid:'101',empname:'Ramu',gender:'Male',title:'Software Developer',salary:'60000',department:'1',address:'Hyderabad',dob:'01/01/1985'},
      {empid:'102',empname:'Vijay',gender:'Male',title:'Sr. Software Developer',salary:'80000',department:'2',address:'Goa',dob:'02/02/1986'},
      {empid:'103',empname:'Sandhya',gender:'Female',title:'Software Developer',salary:'50000',department:'3',address:'Kerala',dob:'03/03/1982'},
      {empid:'104',empname:'Ganesh',gender:'Male',title:'Software Lead',salary:'120000',department:'4',address:'Banglore',dob:'04/04/1988'},
      {empid:'105',empname:'Ananya',gender:'Female',title:'Software Manager',salary:'180000',department:'1',address:'Chennai',dob:'05/05/1986'},
      {empid:'106',empname:'Rakesh',gender:'Male',title:'Software Developer',salary:'70000',department:'2',address:'Delhi',dob:'02/10/1981'},
      {empid:'107',empname:'Lakshman',gender:'Male',title:'Sr. Software Developer',salary:'65000',department:'31',address:'Bihar',dob:'11/11/1989'},
      {empid:'108',empname:'Geeta',gender:'Female',title:'Software Lead',salary:'95000',department:'4',address:'Hyderabad',dob:'10/08/1985'},
      {empid:'109',empname:'Umesh',gender:'Male',title:'Software Developer',salary:'82000',department:'2',address:'Vizag',dob:'04/04/1982'},

    ]
  }

  getTotalEmployeesCount():number{
    return this.employees.length;
  }

  getMaleEmployeesCount():number{
    return this.employees.filter(e=>e.gender==='Male').length;
  }

  getFemaleEmployeesCount():number{
    return this.employees.filter(e=>e.gender==='Female').length;
  }

  trackbyEMPCode(index:number,employee:any):string{
    return employee.code;
  }

  onEmployeeRadioChange(selectedRadioButtonValue:string):void{
    console.log("List Component " + selectedRadioButtonValue);
  }
}
