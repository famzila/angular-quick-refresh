import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { TruncatePipe } from './truncate.pipe';
import { TableOfContentComponent } from './table-of-content/table-of-content.component';



@NgModule({
  declarations: [TruncatePipe, TableOfContentComponent],
  exports: [TruncatePipe, CommonModule, MaterialModule, TableOfContentComponent],
  imports: [
    CommonModule, 
    MaterialModule
  ]
})
export class SharedModule { }
