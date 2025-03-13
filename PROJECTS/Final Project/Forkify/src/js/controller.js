import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'regenerator-runtime/runtime'; //This is called Polyfilling async await
import recipeView from './views/recipeView.js';

//This comming from parcel
if (module.hot) {
  module.hot.accept();
}

// APi= https://forkify-api.jonas.io
//https://forkify-api.jonas.io/api/v2/recipes?search=pizza
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    // console.log(id);

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

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // console.log(resultsView);
    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    //2) Load search results
    await model.loadSearchResults(query);

    //3 Render results
    // console.log(model.state.search.results);
    resultsView.render(model.state.search.results);
  } catch (error) {
    console.error(error);
  }
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
