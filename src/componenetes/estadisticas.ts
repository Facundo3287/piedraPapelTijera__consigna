import { state } from "../state";

export function agregarComponenteEstadisticas () {
    class MisEstadisticas extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.render() };

        render() {
            let div: HTMLElement = document.createElement('div');
            div.setAttribute('class', 'cuadro');
            div.innerHTML = `
            <h1 class = 'texto'> Score </h1>
            <p class = 'texto'> Vos: ${state.getState().victoriasUsuario} </p>
            <p class = 'texto'> Maquina: ${state.getState().victoriasMaquina} </p>`;
            let style: HTMLElement = document.createElement('style');
            style.innerHTML = `
                .cuadro {
                margin-bottom: 20px;
                border: 5px solid black;
                border-radius: 10px;
                width: 200px;
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                background-color: white }
                
                .texto {
                margin: 5px;
                font-family: "Poppins", sans-serif  }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(div) }
    };
    customElements.define('mis-estadisticas', MisEstadisticas)
}