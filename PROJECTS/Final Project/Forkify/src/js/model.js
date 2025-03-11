import { async } from 'regenerator-runtime';
export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    const res = await fetch(
      `https://forkify-api.jonas.io/api/v2/recipes/${id}`
    );
    const data = await res.json();

    //Guard Clause
    if (!res.ok)
      throw new Error(`${data.message} (Status code: ${res.status})`);
    // console.log(res, data);

    // make the recipe object destructre
    const { recipe } = data.data;
    state.recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log('Recipe:', state.recipe);
  } catch (err) {
    alert(err);
  }
};
