// Filtrer les propositions d'ingrédients, appareils, ustensils selon ce qu'il y a dans currentRecipes
// Au click sur un ingrédient => Créer un tag

//------------------------------------------------------------------------------------------------
// Ustensils

const addTagUstensils = () => {
    let ustensilTags = document.querySelectorAll('.ustensilsTag');
    ustensilTags.forEach(ustensil => {
        ustensil.addEventListener('click', (e) => {
            e.preventDefault();
            let ustensilTag = e.target.textContent;
            console.log(ustensilTag);
                let tagElement = ` <div class="tag bg-red redTag">
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
    console.log(currentRecipes);
}

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


// const tagUpdateUstensils = () => {
//     // Récupère la list de tag avec la class "tag"
    
//     let redTags = document.querySelectorAll('.redTag');
//     console.log(redTags);

//     // Réinitialise la valeur de currentRecipes en lui donnant la valeur de recipes
//     currentRecipes = recipes;
    
//     if (searchbar.value.length >= 3) {
//     //Filter les recettes en comparant les caractères dans la searchbar et les noms, descriptions et ingredients
//       currentRecipes = recipes.filter(
//           (recipe) =>
//             recipe.name.toLowerCase().includes(searchbar.value.toLowerCase()) ||
//             recipe.description
//               .toLowerCase()
//               .includes(searchbar.value.toLowerCase()) ||
//             recipe.ingredients.some((ingredient) =>
//               ingredient.ingredient
//                 .toLowerCase()
//                 .includes(searchbar.value.toLowerCase())
//             )
//         );
//     }
// // Faire un if (monTag = couleurTag => filtre correspondant)
//     redTags.forEach(redTag => {
//         redTag = redTag.firstElementChild.textContent;

//         console.log(redTag);
//         console.log(currentRecipes);
//         currentRecipes = currentRecipes.filter(
//             (recipe) => 
//             recipe.ustensils.some((ustensil) =>
//             ustensil
//             .toLowerCase()
//             .includes(redTag.toLowerCase())) 
//         )
//         console.log(currentRecipes);
//     })
    
//     updateUstensils()
//     addTagUstensils()
//     displayRecipeCards();
//     console.log(currentRecipes);
// }

