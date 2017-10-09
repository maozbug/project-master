import { Component, OnInit,Input } from '@angular/core';
//import { ListsService } from '../dianying/lists.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	@Input() content:Array<any> 
	@Input() soons:Array<any> 
//constructor(list:ListsService) { 
//	list.getlist()
//}
	constructor() { 
		
	}

  ngOnInit() {
  }
}
