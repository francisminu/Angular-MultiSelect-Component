import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiSelectComponent } from './multi-select.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe} from './filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MultiSelectComponent, FilterPipe],
  exports: [
    MultiSelectComponent
  ]
})
export class MultiSelectModule { }
