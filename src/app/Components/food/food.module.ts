import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food.component';

@NgModule({
  declarations: [
    FoodComponent
  ],
  exports: [
    FoodComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoodModule { }
