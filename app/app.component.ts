import { Component } from '@angular/core';

import { ToShoppingListPipe } from './to-shopping-list.pipe';

@Component({
  selector: 'app',
  templateUrl: '/index.html',
  pipes: [ToShoppingListPipe]
})

export class AppComponent { 
	numberOfPeople: number;
	// numberOfBreakfasts: number;
	// numberOfLunches: number;
	// numberOfDinners: number;
	// numberOfSnacks: number;

	breakfasts: MealGroup;
	lunches: MealGroup;
	dinners: MealGroup;
	snacks: MealGroup;

	shoppingList: Ingredient[];

	addBreakfast() {
		this.breakfasts.meals.push({
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

	// mealCounter(): number {
	// 	var neededMeals = this.breakfasts.meals.length + this.lunches.meals.length + this.dinners.meals.length + this.snacks.meals.length;
	// 	var currentMeals =  this.numberOfBreakfasts + this.numberOfBreakfasts + this.numberOfDinners + this.numberOfSnacks;

	// 	if ( neededMeals = currentMeals) {

	// 	}

	// 	return 1;
	// }

	// updateShoppingList() {
	// 	// Breakfast Ingredients + Lunch Ingredients + Dinner Ingredients + Snack Ingredients
	// 	console.log('Updating Shopping List');
	// 	this.shoppingList = [];
	// 	this.shoppingList.concat(
	// 		this.flattenIngredients(this.breakfasts.meals),
	// 		this.flattenIngredients(this.lunches.meals),
	// 		this.flattenIngredients(this.dinners.meals),
	// 		this.flattenIngredients(this.snacks.meals)
	// 	)
	// }

	// flattenIngredients(meals: Meal[]): Ingredient[] {
	// 	var ingredients = []



	// 	for (var mealIndex in meals) {
	// 		debugger;
	// 		ingredients.concat(meals[mealIndex].ingredients);
	// 	}

	// 	console.log(ingredients);
	// 	return ingredients;
	// }



	constructor() {
		this.numberOfPeople = 1;
		// this.numberOfBreakfasts = 1;
		// this.numberOfLunches = 2;
		// this.numberOfDinners = 1;
		// this.numberOfSnacks = 1;

		this.breakfasts = {
			id: 0,
			name: 'Breakfast',
			numberOfMeals: 1,
			meals: []
		};

		this.lunches = {
			id: 0,
			name: 'Lunch',
			numberOfMeals: 2,
			meals: []
		};

		this.dinners = {
			id: 0,
			name: 'Dinner',
			numberOfMeals: 1,
			meals: []
		};

		this.snacks = {
			id: 0,
			name: 'Snacks',
			numberOfMeals: 1,
			meals: []
		};

		// this.breakfasts.meals = [];
		// this.lunches.meals = [];
		// this.dinners.meals = [];
		// this.snacks.meals = [];

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

export interface MealGroup {
	id: number,
	name: string,
	numberOfMeals: number,
	meals: Meal[]
}

enum mealTypes {
	breakfast = 0,
	lunch = 1,
	dinner = 2,
	snacks = 3
}
