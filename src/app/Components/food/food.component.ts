import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFood } from 'src/app/interfaces/Food.interface';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit {

  constructor() { }

  restaurant: IFood[] = [
    { id: 1, name: 'Luis Torres', description: 'D 1' },
    { id: 2, name: 'Javier Moreno', description: 'D 2' },
    { id: 3, name: 'Karina Marquez', description: 'D 3' },
    { id: 4, name: 'Gregorio Lopez', description: 'D 4' }
  ];

  ngOnInit(): void {
  }

 

}
