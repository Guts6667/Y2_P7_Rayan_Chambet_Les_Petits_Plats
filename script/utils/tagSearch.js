// Filtrer les propositions d'ingrédients selon ce qu'il y a dans currentRecipes
// Au click sur un ingrédient => Créer un tag
let tagComponent = document.querySelector('.tagged')
const addTag = () => {
    let ingredientTags = document.querySelectorAll('.ingredientTag');
    console.log(ingredientTags);
    ingredientTags.forEach(ingredient => {
        console.log(ingredient);
        ingredient.addEventListener('click', (e) => {
            e.preventDefault();
            let ingredient = e.target.textContent;
                let tagElement = ` <div class="tag bg-blue">
                                        <span>${ingredient}</span>
                                        <i class="far fa-times-circle pointer"></i>
                                    </div>`
            if(tagComponent.innerHTML.includes(tagElement)){
                console.log('Tag déjà ajouté');
            }
            else{
                tagComponent.innerHTML += tagElement;
            }
        })
    })
}


const detectTagSearchIngredient = () => {
    ingredientSearchbar.addEventListener("input", (e) => {
      if (ingredientSearchbar.value.length >= 3) {
        console.log(ingredientSearchbar.value);
        
      }
    //   else{
    //       currentRecipes = recipes;
    //       displayRecipeCards();
    //   }
    });
  };
  detectTagSearchIngredient()






















// const searchTagIngredient = () => {
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
   
//      console.log(currentRecipes);
//      displayRecipeCards()
//    };
   