// Create Recipes Cards
let currentRecipes = recipes;
let recipesContainer = document.querySelector('main');

const displayRecipeCards = () => {
    recipesContainer.innerHTML = "";

    currentRecipes.forEach(myRecipe => {
        myRecipe = new Recipe(myRecipe);
        recipesContainer.innerHTML +=
        myRecipe.createRecipeCard();
    })

}

