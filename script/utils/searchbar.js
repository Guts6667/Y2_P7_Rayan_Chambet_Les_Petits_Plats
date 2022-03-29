/*Récupère la searchbar */
const searchbar = document.querySelector('#searchbar');


// -----------------------------------------------------------------------------------------------------
// Searchbar Function: Detect input while typing => calls function if length >= 3
const detectSearchInput = () =>{
    searchbar.addEventListener('input', (e) => {
        if(searchbar.value.length >= 3){
            console.log(searchbar.value);
            searchFilter()
        }
    })
}

// -----------------------------------------------------------------------------------------------------
// Filter when typing in searchbar (Utiliser filter pour trouver TOUTES les valeurs correspondantes)
let myRecipe = []
const searchFilter = () =>{
    console.log(recipes);
    myRecipe = recipes.filter(recipe => recipe.name.includes(searchbar.value) || recipe.description.includes(searchbar.value));
  
    console.log(myRecipe);
   };


  
  
  




// -----------------------------------------------------------------------------------------------------
const searchbarFunc = () => {


    detectSearchInput();
 }
 
// Call Search Function
searchbarFunc();