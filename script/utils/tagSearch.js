// Filtrer les propositions d'ingrédients, appareils, ustensils selon ce qu'il y a dans currentRecipes
// Au click sur un ingrédient => Créer un tag


//------------------------------------------------------------------------------------------------
// Ingredients
let tagComponent = document.querySelector('.tagged')
const addTagIngredient = () => {
    let ingredientTags = document.querySelectorAll('.ingredientTag');
    
    ingredientTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            let ingredientTag = e.target.textContent;
                let tagElement = ` <div class="tag bg-blue">
                                        <span>${ingredientTag}</span>
                                        <i class="far fa-times-circle pointer"></i>
                                    </div>`
            if(tagComponent.innerHTML.includes(tagElement)){
                console.log('Tag déjà ajouté');
            }
            else{
                tagComponent.innerHTML += tagElement;
            }
            console.log(currentRecipes);
            currentRecipes = currentRecipes.filter(
                (recipe) =>
                  recipe.ingredients.some((ingredient) =>
                    ingredient.ingredient
                      .toLowerCase()
                      .includes(ingredientTag.toLowerCase())
                  )
              );
              console.log(currentRecipes);
              updateIngredients()
              addTagIngredient();
              displayRecipeCards()
            removeTag()
        })
    })
}



//------------------------------------------------------------------------------------------------
// Appliances


const addTagAppliance = () => {
    let applianceTags = document.querySelectorAll('.applianceTag');
    applianceTags.forEach(appliance => {
        appliance.addEventListener('click', (e) => {
            e.preventDefault();
            let appliance = e.target.textContent;
                let tagElement = ` <div class="tag bg-green">
                                        <span>${appliance}</span>
                                        <i class="far fa-times-circle pointer"></i>
                                    </div>`
            if(tagComponent.innerHTML.includes(tagElement)){
                console.log('Tag déjà ajouté');
            }
            else{
                tagComponent.innerHTML += tagElement;
            }
            removeTag()
        })
    })
}


//------------------------------------------------------------------------------------------------
// Ustensils

const addTagUstensils = () => {
    let ustensilTags = document.querySelectorAll('.ustensilsTag');
    ustensilTags.forEach(ustensil => {
        ustensil.addEventListener('click', (e) => {
            e.preventDefault();
            let ustensil = e.target.textContent;
                let tagElement = ` <div class="tag bg-red">
                                        <span>${ustensil}</span>
                                        <i class="far fa-times-circle pointer"></i>
                                    </div>`
            if(tagComponent.innerHTML.includes(tagElement)){
                console.log('Tag déjà ajouté');
            }
            else{
                tagComponent.innerHTML += tagElement;
            }
            removeTag()
        })
    })
    
}

//------------------------------------------------------
// Supprime les tags

const removeTag = () => {
    let tagList = document.querySelectorAll('.tag')

    tagList.forEach(tag => {
        tag.lastElementChild.addEventListener('click', (e) => {
            e.preventDefault()
            console.log(e);
            console.log('remove tag');
            tag.remove();
        })

    })
}

//------------------------------------------------------



const detectIngredientSearchbar = () => {
    ingredientSearchbar.addEventListener("input", (e) => {
        let ingredientTags = document.querySelectorAll('.ingredientTag');
        console.log(ingredientTags);
        console.log(ingredientSearchbar.value);
        let keyWord = ingredientSearchbar.value;

        ingredientTags.forEach(tag => {
            console.log(tag); 
            if(!tag.textContent.toLocaleLowerCase().includes(keyWord.toLowerCase())){
                tag.classList.add('hidden');
            }
            else{
                tag.classList.remove('hidden');
            }
        })
    });
    
  };
  detectIngredientSearchbar();












// searchIngredients()

// const searchFilter = () => {
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
//      updateIngredients()
   
//      displayRecipeCards()
//    };
   