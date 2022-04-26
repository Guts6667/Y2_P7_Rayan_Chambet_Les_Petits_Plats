const tagUpdate = () => {
    // Récupère la list de tag avec la class "tag"
    let tagList = document.querySelectorAll('.tag');
    // Réinitialise la valeur de currentRecipes en lui donnant la valeur de recipes
    currentRecipes = recipes;
    
    if (searchbar.value.length >= 3) {
    //Filter les recettes en comparant les caractères dans la searchbar et les noms, descriptions et ingredients
      currentRecipes = recipes.filter(
          (recipe) =>
            recipe.name.toLowerCase().includes(searchbar.value.toLowerCase()) ||
            recipe.description
              .toLowerCase()
              .includes(searchbar.value.toLowerCase()) ||
            recipe.ingredients.some((ingredient) =>
              ingredient.ingredient
                .toLowerCase()
                .includes(searchbar.value.toLowerCase())
            )
        );
    }
    
// Faire un if (monTag = couleurTag => filtre correspondant)
    tagList.forEach(tag => {
    
    if(tag.classList.contains('blueTag')){

        let ingredientTag = tag.firstElementChild.textContent;
  
        currentRecipes = currentRecipes.filter(
          (recipe) => 
            recipe.ingredients.some((ingredient) =>
              ingredient.ingredient
                .toLowerCase()
                .includes(ingredientTag.toLowerCase())
            )
        );
    }
    
    else if(tag.classList.contains('greenTag')){
        let  applianceTag= tag.firstElementChild.textContent;

        currentRecipes = currentRecipes.filter(
            (recipe) => 
            recipe.appliance 
            .toLowerCase()
            .includes(applianceTag.toLowerCase())
        )
    } 
    
    else if(tag.classList.contains('redTag')){
        let ustensilTag = tag.firstElementChild.textContent;

        currentRecipes = currentRecipes.filter(
            (recipe) => 
            recipe.ustensils.some((ustensil) =>
            ustensil
            .toLowerCase()
            .includes(ustensilTag.toLowerCase())) 
        )
    }

    })
    updateIngredients();
    updateAppliances();
    updateUstensils();
    addTagUstensils();
    addTagAppliance();
    addTagIngredient();
    displayRecipeCards();
}
