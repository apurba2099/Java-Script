import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarkViews.js';
import addRecipeViews from './views/addRecipeViews.js';

import 'core-js/stable'; //This is called Polyfilling everything else
import 'regenerator-runtime/runtime'; //This is called Polyfilling async await
import recipeView from './views/recipeView.js';

// This comming from parcel
if (module.hot) {
  module.hot.accept();
}

// APi= https://forkify-api.jonas.io
//https://forkify-api.jonas.io/api/v2/recipes?search=pizza
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());

    // 1) Update bookmarks view
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);

    //3) Update bookmarks view
    bookmarksView.update(model.state.bookmarks);
  } catch (err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    // 1) Get search query
    const query = searchView.getQuery();
    if (!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);

    // 3) Render results
    resultsView.render(model.getSearchResultsPage());

    // 4) Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goToPage) {
  //1 Render NEW results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //2) Render NEW Pagination buttons
  paginationView.render(model.state.search);
};

//Servings + and - controller code
const controlServings = function (newServings) {
  //Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  //2) Update recipe view
  recipeView.update(model.state.recipe);

  //3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmark = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = function (newRecipe) {
  console.log(newRecipe);

  //Upload the new recipe data

};

// Publisher-Subscriber Pattern
const init = function () {
  bookmarksView.addHandlerRender(controlBookmark);

  recipeView.addHandlerRender(controlRecipes);

  recipeView.addHandlerUpdateServings(controlServings);

  recipeView.addHandlerAddBookmark(controlAddBookmark);

  searchView.addHandlerSearch(controlSearchResults);

  paginationView.addHandlerClick(controlPagination);

  addRecipeViews.addHandlerUpload(controlAddRecipe);
};

init();


