"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var to_shopping_list_pipe_1 = require('./to-shopping-list.pipe');
var AppComponent = (function () {
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
    function AppComponent() {
        this.trekfoodObject = {
            id: 0,
            name: '',
            numberOfPeople: 1,
            mealGroups: []
        };
        // Add Breakfast
        this.trekfoodObject.mealGroups.push({
            id: 0,
            name: 'Breakfast',
            backgroundColor: '#9cc3b1',
            numberOfMeals: 1,
            meals: []
        });
        // Add Lunch
        this.trekfoodObject.mealGroups.push({
            id: 0,
            name: 'Lunch',
            class: 'lunch',
            numberOfMeals: 1,
            meals: []
        });
        this.trekfoodObject.mealGroups.push({
            id: 0,
            name: 'Dinner',
            class: 'dinner',
            numberOfMeals: 1,
            meals: []
        });
        this.trekfoodObject.mealGroups.push({
            id: 0,
            name: 'Snacks',
            backgroundColor: '#fdd274',
            numberOfMeals: 1,
            meals: []
        });
        // this.numberOfPeople = 1;
        // this.numberOfBreakfasts = 1;
        // this.numberOfLunches = 2;
        // this.numberOfDinners = 1;
        // this.numberOfSnacks = 1;
        // this.breakfasts = {
        // 	id: 0,
        // 	name: 'Breakfast',
        // 	numberOfMeals: 1,
        // 	meals: []
        // };
        // this.lunches = {
        // 	id: 0,
        // 	name: 'Lunch',
        // 	numberOfMeals: 2,
        // 	meals: []
        // };
        // this.dinners = {
        // 	id: 0,
        // 	name: 'Dinner',
        // 	numberOfMeals: 1,
        // 	meals: []
        // };
        // this.snacks = {
        // 	id: 0,
        // 	name: 'Snacks',
        // 	numberOfMeals: 1,
        // 	meals: []
        // };
        // this.breakfasts.meals = [];
        // this.lunches.meals = [];
        // this.dinners.meals = [];
        // this.snacks.meals = [];
        // this.shoppingList = [];
    }
    // numberOfPeople: number;
    // numberOfBreakfasts: number;
    // numberOfLunches: number;
    // numberOfDinners: number;
    // numberOfSnacks: number;
    // breakfasts: MealGroup;
    // lunches: MealGroup;
    // dinners: MealGroup;
    // snacks: MealGroup;
    // shoppingList: Ingredient[];
    AppComponent.prototype.addBreakfast = function () {
        this.breakfasts.meals.push({
            id: 0,
            name: '',
            ingredients: [],
            timesUsed: 1
        });
        // this.updateShoppingList();
    };
    AppComponent.prototype.removeMeal = function (mealType, ingredientIndex) {
        console.log(this[mealType] + '  |  ' + ingredientIndex);
        this[mealType].splice(ingredientIndex, 1);
        // this.updateShoppingList();
    };
    AppComponent.prototype.addIngredient = function (meal) {
        meal.ingredients.push({
            id: 0,
            name: '',
            quantity: 0,
            units: ''
        });
        // this.updateShoppingList();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/index.html',
            pipes: [to_shopping_list_pipe_1.ToShoppingListPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
// enum mealTypes {
// 	breakfast = 0,
// 	lunch = 1,
// 	dinner = 2,
// 	snacks = 3
// }
//# sourceMappingURL=app.component.js.map