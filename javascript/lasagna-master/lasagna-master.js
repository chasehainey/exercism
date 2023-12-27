/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(remainingTime) {
    if (remainingTime == 0) {
        return 'Lasagna is done.';
    } else if ( remainingTime > 0) {
        return 'Not done, please wait.'
    }
    else if (remainingTime == null) {
        return 'You forgot to set the timer.';
    }
}

export function preparationTime(layersArray, prepTime) {
    if (prepTime == null) {
        return layersArray.length * 2
    }
    else {
        return layersArray.length * prepTime;
    }
}

export function quantities(layersArray) {
    let sauce = 0;
    let noodles = 0;
    for (let i = 0; i < layersArray.length; i++) {
        if (layersArray[i] == 'sauce') {
            sauce += 0.2;
        } else if (layersArray[i] == 'noodles') {
            noodles += 50;
        }
    }
    return {noodles, sauce};
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe,servings) {
    let adjustedRecipe = {};
  	Object.assign(adjustedRecipe, recipe);
    let actualServings = servings/2;
    for (let ingredient in adjustedRecipe) {
        adjustedRecipe[ingredient] *= actualServings;
    }
    return adjustedRecipe;
}