// Need to add function to multiply quantities based on number of people & number of meals

// Array of all the meals is super flexible, but it makes more sense to put each meal as a parameter, based on its specific needs so 
// I'm not basing it off of each meals quantities and such? 



import { Pipe, PipeTransform } from '@angular/core';

import { MealGroup, Meal, Ingredient } from './app.component.ts';

@Pipe({
	name: 'toShoppingList',
	pure: false
})

export class ToShoppingListPipe implements PipeTransform {
	transform(mealGroups: MealGroup[]): Ingredient[] {
		var shoppingList: Ingredient[] = [];

		for(var mealGroupIndex in mealGroups){
			shoppingList = shoppingList.concat(calculateTotalIngredients(mealGroups[mealGroupIndex]));
		}

		return shoppingList;
	}
}

function mealChecker(mealGroup: MealGroup): number {
	var actualNumberOfMeals: number = 0;

	for(var mealIndex in mealGroup.meals){
		actualNumberOfMeals +=  +mealGroup.meals[mealIndex].timesUsed;
	}

	return actualNumberOfMeals;
}

function calculateTotalIngredients(mealGroup: MealGroup): Ingredient[] {
	var ingredientList = [];

	for(var mealIndex in mealGroup.meals){
		for(var ingredientIndex in mealGroup.meals[mealIndex].ingredients) {
			if(mealGroup.meals[mealIndex].ingredients[ingredientIndex].quantity > 0) {
				var tempIngredient = _.clone(mealGroup.meals[mealIndex].ingredients[ingredientIndex]);
				tempIngredient.quantity = tempIngredient.quantity * +mealGroup.meals[mealIndex].timesUsed;
				ingredientList.push(tempIngredient);
			}
		}
	}	
	console.log('yolo');

	return ingredientList;
}

function combineIngredients(ingredients: Ingredient[]): Ingredient[] {

	return [];
}