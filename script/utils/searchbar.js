let searchbar = document.querySelector('#searchbar');


const searchbarFunc = () => {


   detectSearchInput();
}



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
// Filter when typing in searchbar
let myRecipe = []
const searchFilter = () =>{
    myRecipe = myRecipes.find(o => o.description  === searchbar.value);
  
    console.log(myRecipe);
   };


  
  
  




// -----------------------------------------------------------------------------------------------------
// Call Search Function
searchbarFunc();