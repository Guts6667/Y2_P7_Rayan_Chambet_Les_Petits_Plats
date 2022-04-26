// Supprime les tags

const removeTag = () => {
    let tagList = document.querySelectorAll('.tag')

    tagList.forEach(tag => {
        tag.lastElementChild.addEventListener('click', (e) => {
            e.preventDefault()

            // Ici faire la distinguer le type de tag retiré et appeler le bon tag update      
            tag.remove();
            tagUpdate();
            addTagAppliance()
            addTagIngredient()
            addTagUstensils()

            // Récupérer tous les tags, remettre current recipes à 0, puis effectuer un filter en incluant les tags récupérés
            // Puis appler update & display ingredient
        })
        
    })
}