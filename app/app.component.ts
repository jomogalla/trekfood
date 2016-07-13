import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: '/index.html'
})

export class AppComponent { 

	numberOfPeople = 1;
	numberOfBreakfasts = 0;
	numberOfLunches = 1;
	numberOfDinners = 1;

	breakfasts: Meal[] = [];

	lunches: Meal[] = [];

	dinner: Meal[] = [];

	addBreakfast() {
		this.breakfasts.push({
			id: 0,
			name: '',
			ingredients: []
		});
	}

	addIngredient(meal:Meal) {
		meal.ingredients.push({
			id: 0,
			name: '',
			quantity: 0
		});
	}
}

export class Meal{
	id: number;
	name: string;
	ingredients: Ingredient[];
}

export class Ingredient {
	id: number;
	name: string;
	quantity: number;
}
