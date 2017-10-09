import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { ScrollComponent } from './scroll/scroll.component';
import { ShowleftService } from '../showleft.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, LeftComponent, ScrollComponent],
  providers: [ShowleftService],
  exports :[HeaderComponent, LeftComponent,ScrollComponent]
})
export class CommonsModule { }
