
console.log(ingredientSearchbar);
const detectTagSearchIngredient = () => {
    ingredientSearchbar.addEventListener("input", (e) => {
      if (ingredientSearchbar.value.length >= 3) {
        console.log(ingredientSearchbar.value);
        
      }
    //   else{
    //       currentRecipes = recipes;
    //       displayRecipeCards();
    //   }
    });
  };
  detectTagSearchIngredient()



// const searchTagIngredient = () => {
//     currentRecipes = recipes.filter(
//        (recipe) =>
//          recipe.name.toLowerCase().includes(searchbar.value.toLowerCase()) ||
//          recipe.description
//            .toLowerCase()
//            .includes(searchbar.value.toLowerCase()) ||
//          recipe.ingredients.some((ingredient) =>
//            ingredient.ingredient
//              .toLowerCase()
//              .includes(searchbar.value.toLowerCase())
//          )
//      );
   
//      console.log(currentRecipes);
//      displayRecipeCards()
//    };
   