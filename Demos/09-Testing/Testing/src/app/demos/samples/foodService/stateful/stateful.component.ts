import { Component, OnInit } from '@angular/core';
import { FoodServiceStateful } from '../food-stateful.service';
import { FoodItem } from '../food.model';

@Component({
  selector: 'app-stateful',
  templateUrl: './stateful.component.html',
  styleUrls: ['./stateful.component.scss'],
})
export class StatefulComponent implements OnInit {
  constructor(private service: FoodServiceStateful) {}

  food: FoodItem[];

  ngOnInit(): void {
    this.service.getAllFood().subscribe((data) => {
      this.food = data;
    });
  }
}
