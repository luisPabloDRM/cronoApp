import style from './stye.js'

class Crono extends HTMLElement {
    constructor() {
        super();
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `<style>${style}</style>` + `<slot></slot>`;

        let slot = document.createElement('slot')

    }
}

export default Crono;