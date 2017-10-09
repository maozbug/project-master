import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
	private stuhead :Array<string>=["姓名","性别","籍贯","年龄"]
	private stubody :Array<any>=[
		{name:"小强",gander:"男",address:"江西",age:"22"},
		{name:"老李",gander:"男",address:"山西",age:"24"},
		{name:"小磊",gander:"男",address:"江西",age:"21"},
		{name:"老肥",gander:"男",address:"江西",age:"23"},
	]
	private searchs:string=''
  constructor() {

  }

  ngOnInit() {
  }

}
