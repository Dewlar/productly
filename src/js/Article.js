export class Article {
    constructor({id, title, urlToImage, tags, wide}) {
        this.id = id;
        this.title = title;
        this.urlToImage = urlToImage;
        this.tags = tags;
        this.isWide = wide;
    }

    // Article generator
    generateArticle() {
        let template = '';
        let article = document.createElement('article');
        article.setAttribute('data-id', this.id);
        if (this.isWide) {
            article.className = 'strategy strategy_wide block-shadowed';
        } else {
            article.className = 'strategy block-shadowed';
        }

        this.urlToImage &&
        (template += `<img class="strategy__image" src="${this.urlToImage}" alt="strategy">`)

        if (this.title || this.tags) {
            template += `<div class="strategy__content">`

            this.title &&
            (template += `<h3 class="strategy__name">${this.title}</h3>`)

            if (this.tags) {
                template += `<div class="strategy__tags tags">`

                this.tags.map((tag) => {
                    template += `<span class="tag tag_colored">${tag}</span>`
                })

                template += `</div>`
            }

            template += `</div>`
        }

        article.innerHTML = template;
        return article;
    }
}
