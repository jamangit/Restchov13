import { Component, OnInit } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food/food.service';
import { TagsComponent } from '../../partials/tags/tags.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [
    TagsComponent,
    RouterLink
  ],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit{

  food!: Food;

  constructor(private activatedRoute: ActivatedRoute, private foodService: FoodService) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
        this.food = foodService.getFoodById(params.id);
    })
  }

  ngOnInit(): void {
    
  }

}
