import { Component, Input, input, OnInit } from '@angular/core';
import { Tag } from '../../../shared/models/tag';
import { RouterLink } from '@angular/router';
import { FoodService } from '../../../services/food/food.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }
}
