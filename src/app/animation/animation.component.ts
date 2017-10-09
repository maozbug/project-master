import { Component, OnInit } from '@angular/core';
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
animations:[
	trigger('signal',[
		state('void',style({'transform':'translateY(-100%)'})),
		state('go', style({'background-color': 'green','height':'100px'})),
    state('stop',style({'background-color':'red','height':'50px'})),
		transition('* => *',animate(500))
	])
]
})
export class AnimationComponent implements OnInit {
	private signal:String
  constructor() { }

  ngOnInit() {
  }
	stop(){this.signal = 'stop';}
  go(){this.signal = 'go';}
}
