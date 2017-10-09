import { Component, OnInit } from '@angular/core';
import { ShowLeftService } from '../dianying/show-left.service';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css'],
  animations:[
		trigger('showleft',[
			state('void',style({'transform':'translateY(-100%)'})),
			state('show', style({'background-color': 'green','height':'100px'})),
	    state('hide',style({'background-color':'red','height':'50px'})),
			transition('* => *',animate(500))
		])
	]
})
export class LeftComponent implements OnInit {
	private showtype :any;
  private	showleft :string;
	private show:Boolean=false;
  constructor(showleft:ShowLeftService) {
  	this.showtype=showleft;
  }

  ngOnInit() {
  	this.show=this.showtype.gettype();
  }
	ngDoCheck(){
		this.show=this.showtype.gettype();
	}
	clsMenu(){
		this.show=this.showtype.changetype();
	}
}
