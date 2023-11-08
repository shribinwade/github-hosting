import { food } from "./food";

export class CartItem{
   
    food:food;
    quntity:number=1;
    
    constructor(food:food){
        this.food=food;   
    }
    
     get price():number{
           return this.food.price * this.quntity;
     }

}