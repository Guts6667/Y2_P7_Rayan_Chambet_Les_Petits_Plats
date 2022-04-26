// Create Recipes Cards
let currentRecipes = recipes;


const displayRecipeCards = () => {
    recipesContainer.innerHTML = "";

    currentRecipes.forEach(myRecipe => {
        myRecipe = new Recipe(myRecipe);
        recipesContainer.innerHTML +=
        myRecipe.createRecipeCard();
    })

}

