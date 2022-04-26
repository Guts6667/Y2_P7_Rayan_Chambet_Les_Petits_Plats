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