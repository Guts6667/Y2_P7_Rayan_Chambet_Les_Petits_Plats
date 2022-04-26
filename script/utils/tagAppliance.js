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