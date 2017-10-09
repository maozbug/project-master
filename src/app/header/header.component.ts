import { Component, OnInit } from '@angular/core';
import { ShowLeftService } from '../dianying/show-left.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	private showtype:any;
  constructor(showleft:ShowLeftService) { 
  	this.showtype=showleft;
  }

  ngOnInit() {
  }
	OpMenu(){
		this.showtype.changetype();
	}
}
