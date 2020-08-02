import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from './button/button.module';
import { SelectModule } from './select/select.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    SelectModule,
  ],
  exports: [
    ButtonModule,
    SelectModule,
  ]
})
export class SimpleUiComponentModule { }
