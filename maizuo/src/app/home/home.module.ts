import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films/films.component';
import { TimesPipe } from './times.pipe';
//import { DatetimesPipe } from './datetimes.pipe';
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FilmsComponent, TimesPipe],
  exports :[FilmsComponent]
})
export class HomeModule { }
