import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string) : Food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14},
      { name: 'FastFood', count: 4},
      { name: 'Pizza', count: 2},
      { name: 'Lunch', count: 3},
      { name: 'SlowFood', count: 2},
      { name: 'Hamburger', count: 1},
      { name: 'Fry', count: 1},
      { name: 'Soup', count: 1}
    ]
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag == 'All'? this.getAll():
                         this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        price: 10,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        favorite: false,
        imageUrl: '/assets/images/food-1.jpg'
      }, 
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        tags: ['Slowfood', 'Lunch'],
        favorite: true,
        imageUrl: '/assets/images/food-2.jpg'
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        tags: ['FastFood', 'Hamburger'],
        favorite: false,
        imageUrl: '/assets/images/food-3.jpg'
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        tags: ['FastFood', 'Fry'],
        favorite: true,
        imageUrl: '/assets/images/food-4.jpg'
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        tags: ['SlowFood', 'Soup'],
        favorite: false,
        imageUrl: '/assets/images/food-5.jpg'
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        tags: ['FastFood', 'Pizza', 'Lunch'],
        favorite: false,
        imageUrl: '/assets/images/food-6.jpg'
      }
    ]
  }
}
