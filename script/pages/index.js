// Creation of Class Recipe
let myRecipes = [];
recipes.forEach(recipe => {
    recipe = new Recipe(recipe);
myRecipes.push(recipe)
})
console.log(myRecipes);


// ---------------------------------------------------------------------------------------------------
// Create Recipes Cards

let recipesContainer = document.querySelector('main');

const displayRecipeCards = () => {
    recipesContainer.innerHTML = "";

    myRecipes.forEach(myRecipe => {
        recipesContainer.innerHTML +=
        myRecipe.createRecipeCard();
    })
}
displayRecipeCards();
