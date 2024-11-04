import piedra from '../../assets/piedra.png';
import papel from '../../assets/papel.png';
import tijera from '../../assets/tijera.png';

export function agregarComponentManos () {
    class MisManos extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.render() };

        render() {
            let div: HTMLElement = document.createElement('div');
            let imgPiedra: HTMLElement = document.createElement('img');
            let imgPapel: HTMLElement = document.createElement('img');
            let imgTijera: HTMLElement = document.createElement('img');
            div.setAttribute('class', 'div');
            imgPiedra.setAttribute('class', 'mano piedra');
            imgPiedra.setAttribute('src', piedra);
            imgPapel.setAttribute('class', 'mano papel');
            imgPapel.setAttribute('src', papel);
            imgTijera.setAttribute('class', 'mano tijera');
            imgTijera.setAttribute('src', tijera);
           
            let style: HTMLElement = document.createElement('style');
            style.innerHTML = `
                .div {
                width: 80vw;
                height: 300px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: flex-end }
                
                .mano {
                position: relative;
                height: 200px;
                top: 10px }`;

            this.shadow.appendChild(style);
            div.appendChild(imgPiedra);
            div.appendChild(imgPapel);
            div.appendChild(imgTijera);
            this.shadow.appendChild(div) }
    };
    customElements.define('mis-manos', MisManos)
}