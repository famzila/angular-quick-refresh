import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [TruncatePipe],
  exports: [TruncatePipe, CommonModule, MaterialModule],
  imports: [
    CommonModule, 
    MaterialModule
  ]
})
export class SharedModule { }
