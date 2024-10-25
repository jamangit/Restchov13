import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food/food.service';
import { CommonModule } from '@angular/common';
import { Food } from '../../../shared/models/food';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { FormsModule } from '@angular/forms';
import { TagsComponent } from '../../partials/tags/tags.component';
import { RouterLink } from '@angular/router';
import { FoodPageComponent } from '../food-page/food-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    TagsComponent,
    FoodPageComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

foods: Food[] = []

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
        this.foods = this.foodService.getAll();
    })
  }

}
