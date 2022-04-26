// When the chevron 'Up' is clicked, calls pushIngredients()
arrowUpIngredients.addEventListener('click', (e) => {
    e.preventDefault();
    displayIngredientComponent()
})
//------------------------------------------------------------------------------------
// When the chevron 'Down' is clicked, calls hideIngredients()
arrowDownIngredients.addEventListener('click', (e) => {
    e.preventDefault()
    hideIngredients()
})
//------------------------------------------------------------------------------------
arrowUpAppliances.addEventListener('click', (e) => {
    e.preventDefault();
    displayApplianceComponent()
})
//------------------------------------------------------------------------------------
arrowDownAppliances.addEventListener('click', (e) => {
    e.preventDefault();
    hideAppliances();
})
//------------------------------------------------------------------------------------
arrowUpUstensils.addEventListener('click', (e) => {
    e.preventDefault();
    displayUstensilsComponent()
})
//------------------------------------------------------------------------------------
arrowDownUstensils.addEventListener('click', (e) => {
    e.preventDefault();
    hideUstensils();
})
//------------------------------------------------------------------------------------
// Function updateIngredients : Update ingredient list

const updateIngredients = () => {
   let allIngredients = [];
    currentRecipes.forEach(recipe => {
        
        recipe.ingredients.forEach(ingredient => {
            allIngredients.push(ingredient.ingredient);
        })
    })

    allIngredients = [...new Set([...allIngredients])].sort()
    

    let tempInnerHTMLIngre = "";
    ingredientResults.innerHTML = "";
    allIngredients.forEach(ingredient => {
        
        tempInnerHTMLIngre += `<li class ='ingredientTag pointer'>${ingredient}</li> `
    })

    ingredientResults.innerHTML = tempInnerHTMLIngre;
}

// Fonction display ingredients
const displayIngredientComponent = () => {
    asideIngredients.classList.remove('hidden')
    arrowUpIngredients.classList.add('hidden');
    arrowDownIngredients.classList.remove('hidden');
    ingredientSearchbar.classList.add('tagSearch')
    ingredientSearchbar.setAttribute('placeholder', 'Rechercher un ingrédient')
    updateIngredients()
    addTagIngredient()
}


//------------------------------------------------------------------------------------
// Function hideIngredients: Hide all ingredients
const hideIngredients = ()=> {
    asideIngredients.classList.add('hidden');
    arrowDownIngredients.classList.add('hidden');
    arrowUpIngredients.classList.remove('hidden')
    ingredientSearchbar.setAttribute('placeholder', 'Ingrédients')
    ingredientSearchbar.classList.remove('tagSearch')
}


//------------------------------------------------------------------------------------
// Functions for Appliances

const updateAppliances = () => {
    let allAppliances = [];

    currentRecipes.forEach(recipe => {
        allAppliances.push(recipe.appliance);
    })

    allAppliances = [...new Set([...allAppliances])].sort()
    
    let tempInnerHTMLAppliance = "";
    appliancesResults.innerHTML = '';

    allAppliances.forEach(appliance => {
        
        tempInnerHTMLAppliance += `<li class = 'applianceTag pointer'>${appliance}</li> `
    })
    

    appliancesResults.innerHTML = tempInnerHTMLAppliance;
}

const displayApplianceComponent = () => {
    asideAppliances.classList.remove('hidden')
    arrowUpAppliances.classList.add('hidden');
    arrowDownAppliances.classList.remove('hidden');
    applianceSearchbar.classList.add('tagSearch')
    applianceSearchbar.setAttribute('placeholder', 'Rechercher un appareil')
    updateAppliances()
    addTagAppliance()
}

const hideAppliances = ()=> {
    asideAppliances.classList.add('hidden');
    arrowDownAppliances.classList.add('hidden');
    arrowUpAppliances.classList.remove('hidden')
    applianceSearchbar.classList.remove('tagSearch')
    applianceSearchbar.setAttribute('placeholder', 'Appareils')
}


//------------------------------------------------------------------------------------
// Functions for Ustensils

const updateUstensils = () => {
    let allUstensils = [];
    currentRecipes.forEach(recipe => {
        
        allUstensils.push(recipe.ustensils)
    })

    allUstensils = allUstensils.flatMap(ustensils => ustensils)
    allUstensils = [...new Set([...allUstensils])].sort()

    let tempInnerHTMLUstensils = "";
    ustensilsResults.innerHTML = '';
    allUstensils.forEach(ustensil => {
        
        tempInnerHTMLUstensils += `<li class = 'ustensilsTag pointer'>${ustensil}</li> `
    })
    
    ustensilsResults.innerHTML = tempInnerHTMLUstensils;
}

const displayUstensilsComponent = () =>{
    asideUstensils.classList.remove('hidden')
    arrowUpUstensils.classList.add('hidden');
    arrowDownUstensils.classList.remove('hidden');
    ustensilSearchbar.classList.add('tagSearch')
    ustensilSearchbar.setAttribute('placeholder', 'Rechercher un ustensil')
    updateUstensils()
    addTagUstensils()
}


const hideUstensils = ()=> {
    asideUstensils.classList.add('hidden');
    arrowDownUstensils.classList.add('hidden');
    arrowUpUstensils.classList.remove('hidden')
    ustensilSearchbar.classList.remove('tagSearch')
    ustensilSearchbar.setAttribute('placeholder', 'Ustensils')
}