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
// Algorithme #2
// Second version of the filtering function through the main searchbar


const searchFilter = () => {
  currentRecipes = [];

for(let i= 0;  i < recipes.length; i++){
    if(recipes[i].name.toLowerCase().includes(searchbar.value.toLowerCase()) || 
    recipes[i].description.toLowerCase().includes(searchbar.value.toLowerCase()) ||
          recipes[i].ingredients.some((ingredient) =>
            ingredient.ingredient
              .toLowerCase()
              .includes(searchbar.value.toLowerCase()))){
                  currentRecipes.push(recipes[i]);
              }
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
