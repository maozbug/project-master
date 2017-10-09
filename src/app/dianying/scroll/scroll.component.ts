import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
//声明Swiper
declare var Swiper:any;

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {
	private scroll:Array<any>=[]
  constructor(list:ListsService) { 
  	this.scroll=list.getlist()
  	console.log(this.scroll)
  }

  ngOnInit() {
  	window.onload=function(){
  		var swiper = new Swiper('.swiper-container',{
	  		loop: true,
	  		observer:true,
	      observeParents:true,
	      speed: 2000,
	      autoplayDisableOnInteraction : false,
	      autoplay:1000
	  	});
  	}
  }

}
