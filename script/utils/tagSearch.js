// Filtrer les propositions d'ingrédients, appareils, ustensils selon ce qu'il y a dans currentRecipes
// Au click sur un ingrédient => Créer un tag


//------------------------------------------------------------------------------------------------
// Ingredients
// tagComponent: Tag container
let tagComponent = document.querySelector('.tagged')

// Function in charge of displaying tags
const addTagIngredient = () => {
    // IngredientTags = Tags
    let ingredientTags = document.querySelectorAll('.ingredientTag');
    
    ingredientTags.forEach(tag => {
        // Event firing on click upon ingredient propositions
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            let ingredientTag = e.target.textContent;
                let tagElement = ` <div class="tag bg-blue">
                                        <span>${ingredientTag}</span>
                                        <i class="far fa-times-circle pointer"></i>
                                    </div>`
            //If the tag container already contains the ingredient => no action
            if(tagComponent.innerHTML.includes(tagElement)){
                console.log('Tag déjà ajouté');
            }
            // If not, a new tag proposition is added
            else{
                tagComponent.innerHTML += tagElement;
            }
            console.log(currentRecipes);
            // Filter current recipes
            currentRecipes = currentRecipes.filter(
                (recipe) =>
                  recipe.ingredients.some((ingredient) =>
                    ingredient.ingredient
                      .toLowerCase()
                      .includes(ingredientTag.toLowerCase())
                  )
              );

              updateIngredients()
              addTagIngredient();
              displayRecipeCards()
            removeTag()
        })
    })
}
console.log(recipes);


//------------------------------------------------------------------------------------------------
// Appliances


const addTagAppliance = () => {
    let applianceTags = document.querySelectorAll('.applianceTag');
    applianceTags.forEach(appliance => {
        appliance.addEventListener('click', (e) => {
            e.preventDefault();
            let applianceTag = e.target.textContent;
                let tagElement = ` <div class="tag bg-green">
                                        <span>${applianceTag}</span>
                                        <i class="far fa-times-circle pointer"></i>
                                    </div>`
            if(tagComponent.innerHTML.includes(tagElement)){
                console.log('Tag déjà ajouté');
            }
            else{
                tagComponent.innerHTML += tagElement;
            }
            currentRecipes = currentRecipes.filter(
                (recipe) =>
                recipe.appliance
                .toLowerCase()
                .includes(applianceTag.toLowerCase())
                )
            

            updateAppliances()
            addTagAppliance()
            displayRecipeCards();
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
            let ustensilTag = e.target.textContent;
                let tagElement = ` <div class="tag bg-red">
                                        <span>${ustensilTag}</span>
                                        <i class="far fa-times-circle pointer"></i>
                                    </div>`
            if(tagComponent.innerHTML.includes(tagElement)){
                console.log('Tag déjà ajouté');
            }
            else{
                tagComponent.innerHTML += tagElement;
            }
            currentRecipes = currentRecipes.filter(
                (recipe) => 
                recipe.ustensils.some((ustensil) => 
                ustensil
                    .toLowerCase()
                    .includes(ustensilTag.toLowerCase())
                )
            )
            updateUstensils();
            addTagUstensils();
            displayRecipeCards();
            removeTag();
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
            console.log('remove tag');
            tag.remove();
            tagIngredientUpdate();

            // Récupérer tous les tags, remettre current recipes à 0, puis effectuer un filter en incluant les tags récupérés
            // Puis appler update & display ingredient
        })
        
    })
}

//------------------------------------------------------
// Search for tags in searchbar
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

//------------------------------------------------------
const detectApplianceSearchbar = () => {
    applianceSearchbar.addEventListener("input", (e) => {
        let applianceTags = document.querySelectorAll('.applianceTag');
        console.log(applianceTags);
        console.log(applianceSearchbar.value);
        let keyWord = applianceSearchbar.value;

        applianceTags.forEach(tag => {
            console.log(tag);
            if(!tag.textContent.toLocaleLowerCase().includes(keyWord.toLowerCase())){
                tag.classList.add('hidden');
            }
            else{
                tag.classList.remove('hidden');
            }
        })
    })
}
detectApplianceSearchbar();

//------------------------------------------------------

const detectUstensilSearchbar = () => {
    ustensilSearchbar.addEventListener("input", (e) => {
        let ustensilTags = document.querySelectorAll('.ustensilsTag');
        console.log(ustensilTags);
        console.log(ustensilSearchbar.value);
        let keyWord = ustensilSearchbar.value;

        ustensilTags.forEach(tag => {
            console.log(tag);
            if(!tag.textContent.toLocaleLowerCase().includes(keyWord.toLowerCase())){
                tag.classList.add('hidden');
            }
            else{
                tag.classList.remove('hidden');
            }
        })
    })
}
detectUstensilSearchbar();



//------------------------------------------------------


  const tagIngredientUpdate = () => {

      let tagList = document.querySelectorAll('.tag');

      tagList.forEach(tag => {

          tag = tag.textContent
          currentRecipes = recipes;
          
          currentRecipes = currentRecipes.filter(
            (recipe) =>
              recipe.ingredients.some((ingredient) =>
                ingredient.ingredient
                  .toLowerCase()
                  .includes(tag.toLowerCase())
              )
          );
          console.log(currentRecipes);
          
          updateIngredients();
          addTagIngredient();
          displayRecipeCards();
      })
  }
  