/*Récupère la searchbar */
const searchbar = document.querySelector("#searchbar");

// -----------------------------------------------------------------------------------------------------
// Searchbar Function: Detect input while typing => calls function if length >= 3
const detectSearchInput = () => {
  searchbar.addEventListener("input", (e) => {
    if (searchbar.value.length >= 3) {
      console.log(searchbar.value);
      searchFilter();
      updateIngredients()
    }
    else{
        currentRecipes = recipes;
        displayRecipeCards();
    }
  });
};

// -----------------------------------------------------------------------------------------------------
// Filter when typing in searchbar (Utiliser filter pour trouver TOUTES les valeurs correspondantes)


const searchFilter = () => {
 currentRecipes = recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(searchbar.value.toLowerCase()) ||
      recipe.description
        .toLowerCase()
        .includes(searchbar.value.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.ingredient
          .toLowerCase()
          .includes(searchbar.value.toLowerCase())
      )
  );

  console.log(currentRecipes);
  displayRecipeCards()
};

// -----------------------------------------------------------------------------------------------------
const searchbarFunc = () => {
  detectSearchInput();
};

// Call Search Function
searchbarFunc();
