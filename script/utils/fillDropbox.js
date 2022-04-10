

// Aside: Contains all of the ingredients.
let asideIngredients = document.querySelector('#asideIngredients')
// IngredientLists: <ul>
let ingredientList = document.querySelector('.ingredientResults');
// Chevron Up 
let arrowUpIngredients = document.querySelector('#arrowUpIngredients');
// Chevron Down
let arrowDownIngredients = document.querySelector('#arrowDownIngredients');

// Appliances
let asideAppliances = document.querySelector('#asideAppliances');
let arrowUpAppliances = document.querySelector('#arrowUpAppliances');
let arrowDownAppliances = document.querySelector('#arrowDownAppliances');
let appliancesResults = document.querySelector('.appliancesResults');

// Ustensils
let asideUstensils = document.querySelector('#asideUstensils');
let arrowUpUstensils = document.querySelector('#arrowUpUstensils');
let arrowDownUstensils = document.querySelector('#arrowDownUstensils');
let ustensilsResults = document.querySelector('.ustensilsResults');
//------------------------------------------------------------------------------------
// When the chevron 'Up' is clicked, calls pushIngredients()
arrowUpIngredients.addEventListener('click', (e) => {
    e.preventDefault();
    pushIngredient();
})
// When the chevron 'Down' is clicked, calls hideIngredients()
arrowDownIngredients.addEventListener('click', (e) => {
    e.preventDefault()
    hideIngredients()
})

arrowUpAppliances.addEventListener('click', (e) => {
    e.preventDefault();
    pushAppliances();
})

arrowDownAppliances.addEventListener('click', (e) => {
    e.preventDefault();
    hideAppliances();
})

arrowUpUstensils.addEventListener('click', (e) => {
    e.preventDefault();
    pushUstensils();
})

arrowDownUstensils.addEventListener('click', (e) => {
    e.preventDefault();
    hideUstensils();
})
//------------------------------------------------------------------------------------
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

    let tempInnerHTMLIngre;
    allIngredients.forEach(ingredient => {
        
        tempInnerHTMLIngre += `<li class = 'ingredientTag pointer'>${ingredient}</li> `
    })

    ingredientList.innerHTML = tempInnerHTMLIngre;
}

//------------------------------------------------------------------------------------
// Function hideIngredients: Hide all ingredients
const hideIngredients = ()=> {
    asideIngredients.classList.add('hidden');
    arrowDownIngredients.classList.add('hidden');
    arrowUpIngredients.classList.remove('hidden')
}


//------------------------------------------------------------------------------------
// Functions for Appliances
let allAppliances = [];

const pushAppliances = () => {

    currentRecipes.forEach(recipe => {
        allAppliances.push(recipe.appliance);
    })

    allAppliances = [...new Set([...allAppliances])].sort()
    

    asideAppliances.classList.remove('hidden')
    arrowUpAppliances.classList.add('hidden');
    arrowDownAppliances.classList.remove('hidden');

    let tempInnerHTMLAppliance;
    allAppliances.forEach(appliance => {
        
        tempInnerHTMLAppliance += `<li class = 'applianceTag pointer'>${appliance}</li> `
    })
    

    appliancesResults.innerHTML = tempInnerHTMLAppliance;
}

const hideAppliances = ()=> {
    asideAppliances.classList.add('hidden');
    arrowDownAppliances.classList.add('hidden');
    arrowUpAppliances.classList.remove('hidden')
}


//------------------------------------------------------------------------------------
// Functions for Ustensils
let allUstensils = [];

const pushUstensils = () => {

    currentRecipes.forEach(recipe => {
        
        allUstensils.push(recipe.ustensils)
    })
    // allUstensils.map(ustensils => ustensils)

    allUstensils = allUstensils.flatMap(ustensils => ustensils)
    allUstensils = [...new Set([...allUstensils])].sort()
    console.log(allUstensils);
    

    asideUstensils.classList.remove('hidden')
    arrowUpUstensils.classList.add('hidden');
    arrowDownUstensils.classList.remove('hidden');

    let tempInnerHTMLUstensils;
    allUstensils.forEach(ustensil => {
        
        tempInnerHTMLUstensils += `<li class = 'ustensilsTag pointer'>${ustensil}</li> `
    })
    

    ustensilsResults.innerHTML = tempInnerHTMLUstensils;
}


const hideUstensils = ()=> {
    asideUstensils.classList.add('hidden');
    arrowDownUstensils.classList.add('hidden');
    arrowUpUstensils.classList.remove('hidden')
}