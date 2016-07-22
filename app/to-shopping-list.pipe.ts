// Need to add function to multiply quantities based on number of people & number of meals

// Array of all the meals is super flexible, but it makes more sense to put each meal as a parameter, based on its specific needs so 
// I'm not basing it off of each meals quantities and such? 



import { Pipe, PipeTransform } from '@angular/core';

import { Meal, Ingredient } from './app.component.ts';

@Pipe({
	name: 'toShoppingList',
	pure: false
})

export class ToShoppingListPipe implements PipeTransform {
	transform(mealsArray): Ingredient[] {
		var shoppingList: Ingredient[] = [];

		for(var mealsArrayIndex in mealsArray){
			for(var mealIndex in mealsArray[mealsArrayIndex]){
			// if (meals[mealIndex].ingredients.length) {
				// console.log(mealsArray[mealsArrayIndex][mealIndex].ingredients);
				shoppingList = shoppingList.concat(mealsArray[mealsArrayIndex][mealIndex].ingredients);
			// }
			}
		}

		return shoppingList;
	}
}