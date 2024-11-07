import ganaste from '../../assets/ganaste.png';
import perdiste from '../../assets/perdiste.png';

export function agregarComponenteEstrella () {
    class MiEstrella extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.render() };

        render() {
            let img: HTMLElement = document.createElement('img');
            img.setAttribute('class', 'estrella');
            if (this.getAttribute('type')! == 'Ganaste') img.setAttribute('src', ganaste)
            else if (this.getAttribute('type')! == 'Perdiste') img.setAttribute('src', perdiste);
            let style: HTMLElement = document.createElement('style');
            style.innerHTML = `
                .estrella {
                width: 200px;
                height: 200px }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(img) }
    };
    customElements.define('mi-estrella', MiEstrella)
}