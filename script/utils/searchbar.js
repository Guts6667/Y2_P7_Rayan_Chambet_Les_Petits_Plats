// Searchbar Function: Detect input while typing => calls function if length >= 3
const detectSearchInput = () => {
  searchbar.addEventListener("input", (e) => {
    if (searchbar.value.length >= 3) {
      
      searchFilter();
      updateIngredients()
    }
    else{
        currentRecipes = recipes;
        tagUpdate();
        displayRecipeCards();
        updateIngredients();
    }
  });
  
};

// -----------------------------------------------------------------------------------------------------
// Filter when typing in searchbar (Utiliser filter pour trouver TOUTES les valeurs correspondantes)
// Algo 1

// const searchFilter = () => {
//   currentRecipes = recipes.filter(
//      (recipe) =>
//        recipe.name.toLowerCase().includes(searchbar.value.toLowerCase()) ||
//        recipe.description
//          .toLowerCase()
//          .includes(searchbar.value.toLowerCase()) ||
//        recipe.ingredients.some((ingredient) =>
//          ingredient.ingredient
//            .toLowerCase()
//            .includes(searchbar.value.toLowerCase())
//        )
//    );
  
//    updateIngredients()
//    tagUpdate();
//    displayRecipeCards()
//  };


// Empty currentRecipes[] then uses a for loop and a forEach loop to check every values of the array.
// If one of the object's value matches the search bar's value, it pushes the recipes in currentRecipes[]
// Algo 2
const searchFilter = () => {

  currentRecipes = [];
  for(let i = 0; i < recipes.length; i++){

    if(recipes[i].name.toLowerCase().includes(searchbar.value.toLowerCase()) ||
      recipes[i].description.toLowerCase().includes(searchbar.value.toLowerCase()) ||
      recipes[i].ingredients.forEach(ingredient => { ingredient.ingredient.toLowerCase().includes(searchbar.value.toLowerCase())
          currentRecipes.push(recipes[i])
      })
    
    );
  }
  
   updateIngredients()
   tagUpdate();
   displayRecipeCards()
 };


 

// -----------------------------------------------------------------------------------------------------

const searchbarFunc = () => {
  detectSearchInput();
};

// Call Search Function
searchbarFunc();
