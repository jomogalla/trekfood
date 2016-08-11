import { Component } from '@angular/core';

import { ToShoppingListPipe } from './to-shopping-list.pipe';

@Component({
  selector: 'app',
  templateUrl: '/index.html',
  pipes: [ToShoppingListPipe]
})

export class AppComponent { 
	trekFood: TrekFood;

	addMeal(mealType: string) {
		this.trekFood[mealType].meals.push({
			id: 0,
			name: '',
			ingredients: [],
			timesUsed: 1
		});
	}

	removeMeal(mealType: string, mealIndex: number) {
		if (this.trekFood[mealType].meals.length) {
			this.trekFood[mealType].meals.splice(mealIndex, 1);
		}
	}

	addIngredient(meal:Meal) {
		meal.ingredients.push({
			id: 0,
			name: '',
			quantity: 0,
			units: ''
		});

	}

	removeIngredient(mealType: string, mealIndex: number, ingredientIndex: number){
		if (this.trekFood[mealType].meals[mealIndex].ingredients.length) {
			this.trekFood[mealType].meals[mealIndex].ingredients.splice(ingredientIndex, 1);
		}
	}

	calculateMealsNeeded(mealGroup: MealGroup): number {
		var mealsUsed: number = 0;
		for (var mealIndex in mealGroup.meals) {
			mealsUsed += +mealGroup.meals[mealIndex].timesUsed;
		}

		if (mealGroup.numberOfMeals < mealsUsed) {
			return 2
		} else if (mealGroup.numberOfMeals > mealsUsed){
			return 1;
		} else {
			return 0;
		}

	}

	constructor() {
		this.trekFood = {
			id: 0,
			name: '',
			numberOfPeople: 1,
			breakfasts: {
				id: 0,
				name: 'Breakfast',
				numberOfMeals: 1,
				meals: []
			},
			lunches: {
				id: 0,
				name: 'Lunch',
				numberOfMeals: 2,
				meals: []
			},
			dinners: {
				id: 0,
				name: 'Dinner',
				numberOfMeals: 1,
				meals: []
			},
			snacks: {
				id: 0,
				name: 'Snacks',
				numberOfMeals: 1,
				meals: []
			}

		}
	}
}

export interface Meal{
	id: number;
	name: string;
	ingredients: Ingredient[];
	timesUsed: number;
}

export interface Ingredient {
	id: number;
	name: string;
	quantity: number;
	units: string;
}

interface ShoppingListItem {
	id: number;
	name: string;
	quantity: number;
	units: string;
}

export interface MealGroup {
	id: number;
	name: string;
	numberOfMeals: number;
	meals: Meal[];
}

export interface TrekFood {
	id: number;
	name: string;
	numberOfPeople: number;
	breakfasts: MealGroup;
	lunches: MealGroup;
	dinners: MealGroup;
	snacks: MealGroup;
}
