import { Component } from '@angular/core';

import { ToShoppingListPipe } from './to-shopping-list.pipe';

@Component({
  selector: 'app',
  templateUrl: '/index.html',
  pipes: [ToShoppingListPipe]
})

export class AppComponent { 
	numberOfPeople: number;
	numberOfBreakfasts: number;
	numberOfLunches: number;
	numberOfDinners: number;
	numberOfSnacks: number;

	breakfasts: Meal[];
	lunches: Meal[];
	dinners: Meal[];
	snacks: Meal[];

	shoppingList: Ingredient[];

	addBreakfast() {
		this.breakfasts.push({
			id: 0,
			name: '',
			ingredients: [],
			timesUsed: 1
		});

		// this.updateShoppingList();
	}

	removeMeal(mealType: string , ingredientIndex: number) {
		console.log(this[mealType] + '  |  ' + ingredientIndex);
		this[mealType].splice(ingredientIndex, 1);

		// this.updateShoppingList();
	}

	addIngredient(meal:Meal) {
		meal.ingredients.push({
			id: 0,
			name: '',
			quantity: 0,
			units: ''
		});

		// this.updateShoppingList();
	}

	mealCounter(): number {
		var neededMeals = this.breakfasts.length + this.lunches.length + this.dinners.length + this.snacks.length;
		var currentMeals =  this.numberOfBreakfasts + this.numberOfBreakfasts + this.numberOfDinners + this.numberOfSnacks;

		if ( neededMeals = currentMeals) {

		}

		return 1;
	}

	updateShoppingList() {
		// Breakfast Ingredients + Lunch Ingredients + Dinner Ingredients + Snack Ingredients
		console.log('Updating Shopping List');
		this.shoppingList = [];
		this.shoppingList.concat(
			this.flattenIngredients(this.breakfasts),
			this.flattenIngredients(this.lunches),
			this.flattenIngredients(this.dinners),
			this.flattenIngredients(this.snacks)
		)
	}

	flattenIngredients(meals: Meal[]): Ingredient[] {
		var ingredients = []



		for (var mealIndex in meals) {
			debugger;
			ingredients.concat(meals[mealIndex].ingredients);
		}

		console.log(ingredients);
		return ingredients;
	}



	constructor() {
		this.numberOfPeople = 1;
		this.numberOfBreakfasts = 1;
		this.numberOfLunches = 2;
		this.numberOfDinners = 1;
		this.numberOfSnacks = 1;

		this.breakfasts = [];
		this.lunches = [];
		this.dinners = [];
		this.snacks = [];

		this.shoppingList = [];
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

enum mealTypes {
	breakfast = 0,
	lunch = 1,
	dinner = 2,
	snacks = 3
}
