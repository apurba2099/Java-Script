import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime'; //This is called Polyfilling async await

import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// APi= https://forkify-api.jonas.io

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    // 1) Loading the recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError(
      `We could not find that recipe. Please try another one!`
    );
  }
};

//https://forkify-api.jonas.io/api/v2/recipes?search=pizza

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
