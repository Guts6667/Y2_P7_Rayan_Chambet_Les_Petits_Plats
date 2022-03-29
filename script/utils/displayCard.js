// Create Recipes Cards

let recipesContainer = document.querySelector('main');

const displayRecipeCards = () => {
    recipesContainer.innerHTML = "";

    recipes.forEach(myRecipe => {
        myRecipe = new Recipe(myRecipe);
        recipesContainer.innerHTML +=
        myRecipe.createRecipeCard();
    })

}

