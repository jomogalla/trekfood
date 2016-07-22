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
    function AppComponent() {
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
    AppComponent.prototype.addBreakfast = function () {
        this.breakfasts.push({
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
    AppComponent.prototype.mealCounter = function () {
        var neededMeals = this.breakfasts.length + this.lunches.length + this.dinners.length + this.snacks.length;
        var currentMeals = this.numberOfBreakfasts + this.numberOfBreakfasts + this.numberOfDinners + this.numberOfSnacks;
        if (neededMeals = currentMeals) {
        }
        return 1;
    };
    AppComponent.prototype.updateShoppingList = function () {
        // Breakfast Ingredients + Lunch Ingredients + Dinner Ingredients + Snack Ingredients
        console.log('Updating Shopping List');
        this.shoppingList = [];
        this.shoppingList.concat(this.flattenIngredients(this.breakfasts), this.flattenIngredients(this.lunches), this.flattenIngredients(this.dinners), this.flattenIngredients(this.snacks));
    };
    AppComponent.prototype.flattenIngredients = function (meals) {
        var ingredients = [];
        for (var mealIndex in meals) {
            debugger;
            ingredients.concat(meals[mealIndex].ingredients);
        }
        console.log(ingredients);
        return ingredients;
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
var mealTypes;
(function (mealTypes) {
    mealTypes[mealTypes["breakfast"] = 0] = "breakfast";
    mealTypes[mealTypes["lunch"] = 1] = "lunch";
    mealTypes[mealTypes["dinner"] = 2] = "dinner";
    mealTypes[mealTypes["snacks"] = 3] = "snacks";
})(mealTypes || (mealTypes = {}));
//# sourceMappingURL=app.component.js.map