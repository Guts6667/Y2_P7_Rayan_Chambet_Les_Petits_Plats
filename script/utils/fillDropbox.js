// Aside: Contains all of the ingredients.
let asideIngredients = document.querySelector('#asideIngredients')
// IngredientLists: <ul>
let ingredientList = document.querySelector('.ingredientResults');
// Chevron Up 
let arrowUpIngredients = document.querySelector('#arrowUpIngredients');
// Chevron Down
let arrowDownIngredients = document.querySelector('#arrowDownIngredients');

// When the chevron 'Up' is clicked, calls pushIngredients()
arrowUpIngredients.addEventListener('click', (e) => {
    e.preventDefault();
    pushIngredient();
})
// When the chevron 'Down' is clicked, calls hideIngredients()
arrowDownIngredients.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(e.target);
    hideIngredients()
})

let allIngredients = [];

// Function pushIngredients: Display all ingredients
const pushIngredient = () => {

    currentRecipes.forEach(recipe => {
        
        recipe.ingredients.forEach(ingredient => {
            allIngredients.push(ingredient.ingredient);
        })
    })

    allIngredients = [...new Set([...allIngredients])].sort()
    console.log(allIngredients);

    asideIngredients.classList.remove('hidden')
    arrowUpIngredients.classList.add('hidden');
    arrowDownIngredients.classList.remove('hidden');

    let tempInnerHTML;
    allIngredients.forEach(ingredient => {
        
        tempInnerHTML += `<li class = 'ingredientTag pointer'>${ingredient}</li> `
    })

    ingredientList.innerHTML = tempInnerHTML;
}

// Function hideIngredients: Hide all ingredients
const hideIngredients = ()=> {
    asideIngredients.classList.add('hidden');
    arrowDownIngredients.classList.add('hidden');
    arrowUpIngredients.classList.remove('hidden')
}



