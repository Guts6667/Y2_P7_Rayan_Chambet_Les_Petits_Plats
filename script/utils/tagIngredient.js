// Ingredients

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

// Différencier les types de tags et exécuter le bon filtre selon le tag

const tagIngredientUpdate = () => {

    let tagList = document.querySelectorAll('.tag');

    currentRecipes = recipes;
    if (searchbar.value.length >= 3) {
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

console.log(currentRecipes);
    tagList.forEach(tag => {

        tag = tag.firstElementChild.textContent;
       
        console.log(tag);
        
        
        currentRecipes = currentRecipes.filter(
          (recipe) => 
            recipe.ingredients.some((ingredient) =>
              ingredient.ingredient
                .toLowerCase()
                .includes(tag.toLowerCase())
            )
           
        );
        console.log(currentRecipes);
        
       
    })
    updateIngredients();
    addTagIngredient();
    displayRecipeCards();
    console.log(currentRecipes);
}
tagIngredientUpdate();
