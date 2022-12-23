import style from './stye.js'

class Crono extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<style>${style}</style>` ;

        let slot = document.createElement('slot');

        this.botonIniciarPausar = document.createElement('wc-boton');
        this.botonReiniciar = document.createElement('wc-boton');

        let contenedorBotones = document.createElement('div');
        contenedorBotones.classList.add('content-botones');

        shadowRoot.appendChild(slot);
        contenedorBotones.appendChild(this.botonIniciarPausar);
        contenedorBotones.appendChild(this.botonReiniciar);

    }
}

export default Crono;