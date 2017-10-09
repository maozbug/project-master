import { Component, OnInit } from '@angular/core';
import { ListsService } from '../lists.service';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
	private filmsList:Array<any>;
  constructor(list:ListsService) { 
  	this.filmsList=list.getPlayNow()
  	console.log(this.filmsList);
  }

  ngOnInit() {
  }

}
