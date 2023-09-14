class TituloDinamico extends HTMLElement {
    constructor() {
        super();
        // Anexando a sombra 
        const shadow = this.attachShadow({mode: 'open'}); 

        // base do componente
        const componentRoot = document.createElement('h1');
        componentRoot.textContent = this.getAttribute('titulo');

        // Estilizando o componente
        const styleComponent = document.createElement('style');
        styleComponent.textContent = ` h1 { color: red}`

        // Inserir os elementos criados no shadow 
        shadow.appendChild(styleComponent);
        shadow.appendChild(componentRoot);
    }
}

// Definindo o componente para estar disponível no HTML 
customElements.define('titulo-dinamico', TituloDinamico);

