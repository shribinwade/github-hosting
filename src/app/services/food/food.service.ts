import { Injectable } from '@angular/core';
import{food} from '../../shared/models/food' 
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getFoodById(id: number):food{
     return this.getAll().find(food=> food.id == id)!;
  }


  getAllTags():Tag[]{
    
    return [
      {name:'All',count: 16},
      {name:'FastFood',count: 4},
      {name:'Pizza',count: 2},
      {name:'Lunch',count: 3},
      {name:'SlowFood',count: 2},
      {name:'Hamburger',count: 1},
      {name:'Fry',count: 1},
      {name:'Soup',count: 1},
    ]

  }

  getAllFoodsByTag(tag:string):food[]{
     return tag=="All"?
     this.getAll() : 
     this.getAll().filter(food => food.tags?.includes(tag));
  }
  
  getAllFoodsBySearchTerm(searchTerm:string) :food[]{
    return this.getAll().filter(food => food.name
      .toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAll():food[]{
    return[
    
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 1000,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 200,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 500,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl: '/assets/images/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 200,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 350,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl: '/assets/images/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 900,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl: '/assets/images/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Dosa',
        price: 90,
        cookTime: '10-15',
        favorite: true,
        origins: ['South-India'],
        stars: 5.0,
        imageUrl: '/assets/images/food-7.jpg',
        tags: ['FastFood'],
      },
      {
        id: 8,
        name: 'Idili',
        price: 90,
        cookTime: '10-15',
        favorite: true,
        origins: ['South-India'],
        stars: 5.0,
        imageUrl: '/assets/images/food-8.jpg',
        tags: ['FastFood', 'Lunch'],
      },

    ]
  }
}
