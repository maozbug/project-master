import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ListsService } from './dianying/lists.service';
import { ShowLeftService } from './dianying/show-left.service';

import { AppComponent } from './app.component';
import { FlowerComponent } from './flower/flower.component';
import { FormsModule } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { HeroComponent } from './hero/hero.component';
import { FirstUcpPipe } from './first-ucp.pipe';
import { ShopComponent } from './shop/shop.component';
import { SearchPipe } from './search.pipe';
import { FontColorDirective } from './font-color.directive';
import { FormComponent } from './form/form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { DianyingComponent } from './dianying/dianying.component';
import { DatetimesPipe } from './datetimes.pipe';
import { ScrollComponent } from './dianying/scroll/scroll.component';
import { LeftComponent } from './left/left.component';
import { FilmsComponent } from './dianying/films/films.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowerComponent,
    StudentComponent,
    HeroComponent,
    FirstUcpPipe,
    ShopComponent,
    SearchPipe,
    FontColorDirective,
    FormComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    ContentComponent,
    DianyingComponent,
    DatetimesPipe,
    ScrollComponent,
    LeftComponent,
    FilmsComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ListsService,ShowLeftService],
  bootstrap: [AppComponent]
})
export class AppModule { }
