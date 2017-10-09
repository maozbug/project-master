import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {
	private flowerName :string=""
	private red :string="red"
	private pink :string="pink"
	private flowerList:Array<any>
  constructor() { 
  	this.flowerList=[
			{"name":"玫瑰","value":"meigui","url":"../../assets/img/meigui.jpg"},
			{"name":"牡丹","value":"mudan","url":"../../assets/img/mudan.jpg"},
			{"name":"荷花","value":"hehua","url":"../../assets/img/hehua.jpg"},
			{"name":"桃花","value":"taohua","url":"../../assets/img/taohua.jpg"},
		]
  }
		
  ngOnInit() {
  }

}
