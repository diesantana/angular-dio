class CardNews extends HTMLElement {
    constructor() {
        super();
        //  Anexa a sombra ao componente 
        const shadow = this.attachShadow({ mode: 'open' });

        // insere consteudos e estilos na shadow
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    // constroi os elementos
    build() {

        const componentRoot = document.createElement('div'); // Cria a div principal 
        componentRoot.setAttribute('class', 'card');  // Seta classes na div principal 

        // Cria a div para texto 
        const createDivText = () => {

            const cardtext = document.createElement('div');
            cardtext.setAttribute('class', 'card-text');  // Seta classes na div text 

            // author
            const author = document.createElement('span');
            author.setAttribute('class', 'author');
            author.textContent = 'By ' + (this.getAttribute('autor') || 'Anonymous');

            // titulo noticia
            const tituloNoticia = document.createElement('h1');
            const linkNoticia = document.createElement('a');
            linkNoticia.textContent = this.getAttribute('titulo');
            linkNoticia.href = this.getAttribute('link-noticia') || '#';
            tituloNoticia.appendChild(linkNoticia);


            // conteúdo da noticia
            const newsContent = document.createElement('p');
            newsContent.textContent = this.getAttribute('conteudo');

            //  Insere os filhos na div text
            cardtext.appendChild(author);
            cardtext.appendChild(tituloNoticia);
            cardtext.appendChild(newsContent);

            return cardtext;
        }

        // Cria a div para a img  
        const createCardImg = () => {

            const cardImg = document.createElement('div');
            cardImg.setAttribute('class', 'card-img');  // Seta classes na div img 

            const newsImg = document.createElement('img');
            newsImg.src = this.getAttribute('imagem') || 'assets/img/photo-default.png';
            newsImg.alt = this.getAttribute('imagem-alt') || 'Foto da notícia';

            cardImg.appendChild(newsImg);

            return cardImg;
        }

        // Insere as divs text e img dentro da div principal 
        componentRoot.appendChild(createDivText());
        componentRoot.appendChild(createCardImg());

        return componentRoot; // retorna a div principal 
    }

    // estiliza os elementos
    styles() {
        const styleTag = document.createElement('style');
        styleTag.textContent = `
            * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
            }
        
            a {
                text-decoration: none;
                color: black;
            }
            
            .card {
                max-width: 700px;
                width: 100%;
                margin: 5rem auto;
                display: flex;
                padding: 1rem;
                box-shadow: 8px 14px 21px 0px rgba(0,0,0,0.67);
                -webkit-box-shadow: 8px 14px 21px 0px rgba(0,0,0,0.67);
                -moz-box-shadow: 8px 14px 21px 0px rgba(0,0,0,0.67);
            }
            
            .card-text {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-right: .5rem;
            }
            
            .card-text .author {
                color: rgb(70, 70, 70);
                font-weight: 500;
            }
            
            /* ">" pega os h1 que são filhos diretos de .card-text */
            .card-text>h1 {
                margin: .625rem 0 .25rem;
                line-height: 1.9rem;
            }
            
            .card img {
                height: 200px;
            }
        
        `
        return styleTag;
    }

}

customElements.define('card-news', CardNews);

