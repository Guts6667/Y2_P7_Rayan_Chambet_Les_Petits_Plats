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
                    <ul>
                        <li><strong>Title s</strong> : dsknfksd</li>
                        <li><strong>Title s</strong> : dsknlf</li>
                        <li><strong>Title s</strong>: dksfnk</li>
                        <li><strong>Title s</strong> : dsfsdf</li>
                        <li><strong>Title s</strong>: osfj,slkdfn,</li>
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