import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
	private heroList :Array<any>=[
		{"name":"李白","edittype":true},
		{"name":"苏烈","edittype":true},
		{"name":"百里守约","edittype":true},
		{"name":"百里玄策","edittype":true},
		{"name":"铠","edittype":true}
	]
	private newhero:string="";
  constructor() { }

  ngOnInit() {
  }
	addhero(){
		if(this.newhero!=''){
			this.heroList.unshift({"name":this.newhero,"edittype":true})
		}
	}
	delhero(index){
		this.heroList.splice(index,1);
	}
	updatehero(index){
		this.heroList[index].edittype=false;
	}
	editEnd(index){
		this.heroList[index].edittype=true;
	}
}
