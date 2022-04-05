let allIngredients = [];

let ingredientList = document.querySelector('.ingredientResults')
console.log(ingredientList);

const pushIngredient = () => {
    currentRecipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            allIngredients.push(ingredient.ingredient);
        })
    })
    allIngredients = [...new Set([...allIngredients])].sort()
    console.log(allIngredients);

    let tempInnerHTML;
    allIngredients.forEach(ingredient => {
        
        tempInnerHTML += ` <li class = 'ingredientTag'>${ingredient}</li>  `
    })

    ingredientList.innerHTML = tempInnerHTML;
}
pushIngredient()

