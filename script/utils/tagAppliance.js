// Appliances
const addTagAppliance = () => {
    let applianceTags = document.querySelectorAll('.applianceTag');
    applianceTags.forEach(appliance => {
        appliance.addEventListener('click', (e) => {
            e.preventDefault();
            let applianceTag = e.target.textContent;
                let tagElement = ` <div class="tag bg-green greenTag">
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
    console.log(currentRecipes);
}

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

// const tagUpdateAppliance = () => {
//     // Récupère la list de tag avec la class "tag"
    
//     let greenTags = document.querySelectorAll('.greenTag');

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


//     greenTags.forEach(greenTag => {
//         greenTag = greenTag.firstElementChild.textContent;

//         console.log(greenTag);

//         currentRecipes = currentRecipes.filter(
//             (recipe) => 
//             recipe.appliance 
//             .toLowerCase()
//             .includes(greenTag.toLowerCase())
//         )
//         console.log(currentRecipes);
//     })
    
//     updateAppliances()
//     addTagAppliance()
//     displayRecipeCards();
//     console.log(currentRecipes);
// }
