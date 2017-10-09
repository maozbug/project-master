import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
	@Output() checkA = new EventEmitter<any>(); 
	
	@Input() phoneItem:any;
	private vivo:number=1234324556
  constructor() { }

  ngOnInit() {
  }
	change(){
		this.checkA.emit(this.vivo);}
}
