class Recipe {

    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.servings = data.servings;
        this.ingredients = data.ingredients;
        this.time = data.time;
        this.description = data.description;
        this.appliance = data.appliance;
        this.ustensils = data.ustensils;
    }

    createRecipeCard(){
        return `
        <article class="border">
        <div class="article-picture">
            <!-- Picture -->
        </div>
        <div class="article-bottom">
            <!-- Description -->
            <div class="article-header">
                <div>
                    <h3>${this.name}</h3>
                </div>
                <div class="article-time">
                    <div>
                        <i class="far fa-clock"></i>
                    </div>
                    <div>
                        <span>${this.time} min</span>
                    </div>
                </div>
            </div>
            <div class="article-description">
                <div class="description-left">
                    <ul class = "ingredientList">
                    ${this.ingredients.map(myIngredients =>`<li><strong>${myIngredients.ingredient? myIngredients.ingredient : ''}</strong> : ${myIngredients.quantity ? myIngredients.quantity : ''} ${myIngredients.unit ? myIngredients.unit : ''}</li> ` ).join('')}
                    
                    </ul>
                </div>
                <div class="description-right">
                    <p>
                        ${this.description}
                    </p>
                </div>
            </div>
        </div>
    </article>
        `
    }

    getIngredients(ingredients){
        

        let ingredientList = '';

        ingredients.forEach(myIngredients => {
            ingredientList +=
            `
            <li><strong>${myIngredients.ingredient? myIngredients.ingredient : ''}</strong> : ${myIngredients.quantity ? myIngredients.quantity : ''} ${myIngredients.unit ? myIngredients.unit : ''}</li> 
            `

        });
        return ingredientList;


        
        

     
    }



}
// ${this.getIngredients(this.ingredients)}

// let ingredientList = document.querySelector('ul');
        // this.ingredients.forEach(myIngredients => {
        //     console.log(myIngredients);
        //     ingredientList.innerHTML +=
        //     `
        //     <li><strong>${myIngredients.ingredient? myIngredients.ingredient : ''}</strong> : ${myIngredients.quantity ? myIngredients.quantity : ''} ${myIngredients.unit ? myIngredients.unit : ''}</li> 
        //     `

        // });