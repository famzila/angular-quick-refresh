import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ NavBarComponent],
  exports: [ NavBarComponent],
  imports: [
    SharedModule
  ]
})
export class CoreModule { }