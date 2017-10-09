import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
	private phoneArr:Array<any>;
	private myNum:number;
  constructor() { 
  	this.phoneArr = [
  		{"name":"张三","phoneN":"15310042345","src":"../../assets/img/mudan.jpg"},
  		{"name":"李四","phoneN":"15320042345","src":"../../assets/img/mudan.jpg"},
  		{"name":"王五","phoneN":"15340042345","src":"../../assets/img/mudan.jpg"},
  		{"name":"马六","phoneN":"15350042345","src":"../../assets/img/mudan.jpg"},
  		{"name":"赵七","phoneN":"15360042345","src":"../../assets/img/mudan.jpg"}
  	];
  }
		
  ngOnInit() {
  }
	onChange(counter){this.myNum = counter;}
}
