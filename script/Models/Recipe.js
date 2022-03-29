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
                    <li><strong>${this.ingredients[0].ingredient ? this.ingredients[0].ingredient : ''}</strong> : ${this.ingredients[0].quantity} ${this.ingredients[0].unit ? this.ingredients[0].unit : ''}</li> 
                    <li><strong>${this.ingredients[1].ingredient ? this.ingredients[1].ingredient : ''}</strong> : ${this.ingredients[1].quantity} ${this.ingredients[1].unit ? this.ingredients[1].unit : ''}</li> 
                    <li><strong>${this.ingredients[2].ingredient ? this.ingredients[2].ingredient : ''}</strong> : ${this.ingredients[2].quantity} ${this.ingredients[2].unit ? this.ingredients[2].unit : ''}</li>  
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

}


