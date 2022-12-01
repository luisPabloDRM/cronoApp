import style from "./estilos.js";
import html from "./template.js";


    const numeros = new Map([
    [1, ['dere-inferior', 'dere-superior']],
    [2, ['central-superior', 'dere-superior', 'central', 'izqui-inferior', 'central-inferior']],
    [3, ['central-superior', 'dere-superior', 'central', 'dere-inferior', 'central-inferior']],
    [4, ['izqui-superior', 'central', 'dere-superior', 'dere-inferior']],
    [5, ['central-superior', 'izqui-superior', 'central', 'dere-inferior', 'central-inferior']],
    [6, ['central-superior', 'izqui-superior', 'izqui-inferior', 'central', 'dere-inferior', 'central-inferior']],
    [7, ['central-superior', 'dere-superior', 'dere-inferior']],
    [8, ['central-superior', 'izqui-superior', 'dere-superior', 'central', 'izqui-inferior', 'dere-inferior', 'central-inferior']],
    [9, ['central-superior', 'izqui-superior', 'dere-superior', 'central', 'dere-inferior']],
    [0, ['central-superior', 'izqui-superior', 'dere-superior', 'izqui-inferior', 'dere-inferior', 'central-inferior']]
]);
class Digito extends HTMLElement {
    constructor(){
        super();
        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `<style>${style}</style>${html}`;
        this._contenedorDigito = this.shadowRoot.querySelector('#contenedor-digito');
    }
    connectedCallback(){
        this.numero = 0;
        setInterval(()=>{
            this.avanzar(this.numero);
        },100);
    }
    get numero(){
      return  parseFloat(this.getAttribute('numero')) ;

    }
    avanzar(numero){
        this.numero = numero === 9 ? 0 : numero + 1;
    }


    set numero(numero){
        this.setAttribute('numero', numero);
    }
    static get observedAttributes(){
        return ['numero'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        switch(name){
            case 'numero':
                if(oldValue != newValue){
                    this.renderNumero();
                }
        }
    }
    renderNumero(){
        Array.from(this._contenedorDigito.children).forEach((element) => {
            element.classList.add('white');
        });
        numeros.get(this.numero).forEach((identificador)=>{
            this._contenedorDigito.querySelector(`#${identificador}`).classList.remove('white');
        });


    }
}
export default Digito;