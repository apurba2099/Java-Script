const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// APi= https://forkify-api.jonas.io

///////////////////////////////////////

const showRecipe = async function () {
  try {
    // const res = await fetch(
    //   'https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886'
    // );
    const res = await fetch(
      'https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e85be'
    );
    const data = await res.json();

    //Guard Clause
    if (!res.ok)
      throw new Error(`${data.message} (Status code: ${res.status})`);

    // console.log(res, data);

    // make the recipe object destructre
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log('Recipe:', recipe);
  } catch (err) {
    alert(err);
  }
};
showRecipe();

//https://forkify-api.jonas.io/api/v2/recipes?search=pizza