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



