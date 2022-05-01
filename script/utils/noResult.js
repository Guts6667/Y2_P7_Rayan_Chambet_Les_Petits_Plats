searchbar.addEventListener('input', (e) => {
    e.preventDefault();

        if(recipesContainer.innerHTML == ''){
                errorMsg.classList.remove('hidden')
            } 
        else{
            errorMsg.classList.add('hidden')
        }


   
})

