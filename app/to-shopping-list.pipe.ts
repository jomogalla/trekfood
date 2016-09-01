// Need to add function to multiply quantities based on number of people & number of meals

// Array of all the meals is super flexible, but it makes more sense to put each meal as a parameter, based on its specific needs so 
// I'm not basing it off of each meals quantities and such? 



import { Pipe, PipeTransform } from '@angular/core';

import { TrekFood, MealGroup, Meal, Ingredient } from './app.component.ts';

@Pipe({
	name: 'toShoppingList',
	pure: false
})

export class ToShoppingListPipe implements PipeTransform {
	transform(trekFood: TrekFood): Ingredient[] {
		var shoppingList: Ingredient[] = [];

		// Concat all the ingredients
		shoppingList = shoppingList.concat(calculateTotalIngredients(trekFood.breakfasts, trekFood.numberOfPeople));
		shoppingList = shoppingList.concat(calculateTotalIngredients(trekFood.lunches, trekFood.numberOfPeople));
		shoppingList = shoppingList.concat(calculateTotalIngredients(trekFood.dinners, trekFood.numberOfPeople));
		shoppingList = shoppingList.concat(calculateTotalIngredients(trekFood.snacks, trekFood.numberOfPeople));

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

function calculateTotalIngredients(mealGroup: MealGroup, numberOfPeople: number): Ingredient[] {
	var ingredientList = [];

	for(var mealIndex in mealGroup.meals){
		for(var ingredientIndex in mealGroup.meals[mealIndex].ingredients) {
			if(mealGroup.meals[mealIndex].ingredients[ingredientIndex].quantity > 0) {
				var tempIngredient = _.clone(mealGroup.meals[mealIndex].ingredients[ingredientIndex]);
				tempIngredient.quantity = tempIngredient.quantity * +mealGroup.meals[mealIndex].timesUsed * numberOfPeople;
				ingredientList.push(tempIngredient);
			}
		}
	}	

	return ingredientList;
}

function combineIngredients(ingredients: Ingredient[]): Ingredient[] {

	return [];
}