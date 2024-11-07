import piedra from '../../assets/piedra.png';
import papel from '../../assets/papel.png';
import tijera from '../../assets/tijera.png';
import { state } from '../state';

export function agregarComponentManos () {
    class MisManos extends HTMLElement {
        shadow: ShadowRoot;
        modo: string;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.modo = this.getAttribute('modo')!
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
                top: 10px }
                
                .mano:hover { 
                opacity: 0.5 }`;

            this.shadow.appendChild(style);
            div.appendChild(imgPiedra);
            div.appendChild(imgPapel);
            div.appendChild(imgTijera);
            this.shadow.appendChild(div);
            if (this.modo == 'true') this.animacion(imgPiedra, imgPapel, imgTijera) };
        
        animacion(imgPiedra: HTMLElement, imgPapel: HTMLElement, imgTijera: HTMLElement) {
            state.data.jugadaActualMaquina = random();
            function aux (e: any) { 
                if (e.target.src.includes('piedra.png') == true) {
                    state.data.jugadaActualUsuario = 'piedra';
                    imgPiedra.style.top = '-10px';
                    imgPapel.style.top = '10px';
                    imgTijera.style.top = '10px' }
                else if (e.target.src.includes('papel.png') == true) {
                    state.data.jugadaActualUsuario = 'papel';
                    imgPiedra.style.top = '10px';
                    imgPapel.style.top = '-10px';
                    imgTijera.style.top = '10px'}
                else if (e.target.src.includes('tijera.png') == true) {
                    state.data.jugadaActualUsuario = 'tijera';
                    imgPiedra.style.top = '10px';
                    imgPapel.style.top = '10px';
                    imgTijera.style.top = '-10px'} };
            function random (): string {
                let array: string[] = ['piedra', 'papel', 'tijera'];
                let random: number = Math.floor(Math.random() * 3);
                return array[random] };
            imgPiedra.addEventListener('click', aux);
            imgPapel.addEventListener('click', aux);
            imgTijera.addEventListener('click', aux) }
    };
    customElements.define('mis-manos', MisManos)
}