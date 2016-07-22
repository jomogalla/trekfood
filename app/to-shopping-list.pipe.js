// Need to add function to multiply quantities based on number of people & number of meals
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
// Array of all the meals is super flexible, but it makes more sense to put each meal as a parameter, based on its specific needs so 
// I'm not basing it off of each meals quantities and such? 
var core_1 = require('@angular/core');
var ToShoppingListPipe = (function () {
    function ToShoppingListPipe() {
    }
    ToShoppingListPipe.prototype.transform = function (mealsArray) {
        var shoppingList = [];
        for (var mealsArrayIndex in mealsArray) {
            for (var mealIndex in mealsArray[mealsArrayIndex]) {
                // if (meals[mealIndex].ingredients.length) {
                // console.log(mealsArray[mealsArrayIndex][mealIndex].ingredients);
                shoppingList = shoppingList.concat(mealsArray[mealsArrayIndex][mealIndex].ingredients);
            }
        }
        return shoppingList;
    };
    ToShoppingListPipe = __decorate([
        core_1.Pipe({
            name: 'toShoppingList',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], ToShoppingListPipe);
    return ToShoppingListPipe;
}());
exports.ToShoppingListPipe = ToShoppingListPipe;
//# sourceMappingURL=to-shopping-list.pipe.js.map