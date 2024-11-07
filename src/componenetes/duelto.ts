import piedra from '../../assets/piedra.png';
import papel from '../../assets/papel.png';
import tijera from '../../assets/tijera.png';
import { router } from '../router';

export function agregarComponenteDuelo () {
    class MiDuelo extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.render() };

        render() {
            let div: HTMLElement = document.createElement('div');
            let img1: HTMLElement = document.createElement('img');
            let img2: HTMLElement = document.createElement('img');
            let style: HTMLElement = document.createElement('style');
            div.setAttribute('class', 'div');
            img1.setAttribute('class', 'img1 img');
            img2.setAttribute('class', 'img2 img');
            if (this.getAttribute('src1') == 'piedra' && this.getAttribute('src2') == 'piedra') {
                img1.setAttribute('src', `${piedra}`);
                img2.setAttribute('src', `${piedra}`) }
            else if (this.getAttribute('src1') == 'piedra' && this.getAttribute('src2') == 'papel') {
                img1.setAttribute('src', `${piedra}`);
                img2.setAttribute('src', `${papel}`) }
            else if (this.getAttribute('src1') == 'piedra' && this.getAttribute('src2') == 'tijera') {
                img1.setAttribute('src', `${piedra}`);
                img2.setAttribute('src', `${tijera}`)}
            else if (this.getAttribute('src1') == 'papel' && this.getAttribute('src2') == 'piedra') {
                img1.setAttribute('src', `${papel}`);
                img2.setAttribute('src', `${piedra}`)}
            else if (this.getAttribute('src1') == 'papel' && this.getAttribute('src2') == 'papel') {
                img1.setAttribute('src', `${papel}`);
                img2.setAttribute('src', `${papel}`) }
            else if (this.getAttribute('src1') == 'papel' && this.getAttribute('src2') == 'tijera') {
                img1.setAttribute('src', `${papel}`);
                img2.setAttribute('src', `${tijera}`) }
            else if (this.getAttribute('src1') == 'tijera' && this.getAttribute('src2') == 'piedra') {
                img1.setAttribute('src', `${tijera}`);
                img2.setAttribute('src', `${piedra}`) }
            else if (this.getAttribute('src1') == 'tijera' && this.getAttribute('src2') == 'papel') {
                img1.setAttribute('src', `${tijera}`);
                img2.setAttribute('src', `${papel}`) }
            else if (this.getAttribute('src1') == 'tijera' && this.getAttribute('src2') == 'tijera') {
                img1.setAttribute('src', `${tijera}`);
                img2.setAttribute('src', `${tijera}`) };
            style.innerHTML = `
                .div {
                display: flex;
                flex-direction: column;
                justify-content: space-between }

                .img {
                width: 100px;
                height: 250px }
                
                .img1 {
                transform: rotate(180deg) }`;
            setTimeout( () => { router('/piedraPapelTijera__consigna/Resultado')  }, 3500);
            div.appendChild(img1);
            div.appendChild(img2);
            this.shadow.appendChild(style);
            this.shadow.appendChild(div) }
    };
    customElements.define('mi-duelo', MiDuelo)
}