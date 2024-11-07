import { state } from "../state";
import { router } from "../router";

export function agregarComponenteContador () {
    class MiContador extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.render() };

        render() {
            let h1: HTMLElement = document.createElement('h1');
            h1.setAttribute('class', 'contador');
            h1.textContent = '3';
            const duration = 3;
            let intervalId: number | null = null;
            intervalId = setInterval( () => {
                const currentTime = duration - Math.floor((new Date().getTime() - startTime) / 1000);
                h1.textContent = currentTime.toString();
                if (currentTime <= 0) {
                    this.enviarInfo();
                    clearInterval(intervalId!) }
            }, 1000);
            let startTime = new Date().getTime();
            
            let style: HTMLElement = document.createElement('style');
            style.innerHTML = `
                .contador {
                margin: 0px;
                margin-bottom: 35px;
                border: 5px solid black;
                border-radius: 200px;
                width: 230px;
                height: 230px;
                font-family: "Poppins", sans-serif;
                font-size: 50px;
                text-align: center;
                line-height: 4.5;
                color: black }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(h1) };

        enviarInfo() {
            let dataVieja = state.getState();
            let objeto = {
                jugadaUsuario: dataVieja.jugadaActualUsuario,
                jugadaMaquina: dataVieja.jugadaActualMaquina };
            dataVieja.jugadas.push(objeto);
            if (objeto.jugadaUsuario == 'piedra' && objeto.jugadaMaquina == 'piedra') {
                dataVieja.resultadoPartida = 'Enpate';
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'piedra' src2 = 'piedra'> </mi-duelo>` }
            else if (objeto.jugadaUsuario == null) {
                router('/piedraPapelTijera__consigna/') }
            else if (objeto.jugadaUsuario == 'piedra' && objeto.jugadaMaquina == 'papel') {
                dataVieja.resultadoPartida = 'Perdiste';
                dataVieja.victoriasMaquina = dataVieja.victoriasMaquina + 1;
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'papel' src2 = 'piedra'> </mi-duelo>` }
            else if (objeto.jugadaUsuario == 'piedra' && objeto.jugadaMaquina == 'tijera') {
                dataVieja.resultadoPartida = 'Ganaste';
                dataVieja.victoriasUsuario = dataVieja.victoriasUsuario + 1;
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'tijera' src2 = 'piedra'> </mi-duelo>` }
            else if (objeto.jugadaUsuario == 'papel' && objeto.jugadaMaquina == 'piedra') {
                dataVieja.resultadoPartida = 'Ganaste';
                dataVieja.victoriasUsuario = dataVieja.victoriasUsuario + 1;
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'piedra' src2 = 'papel'> </mi-duelo>` }
            else if (objeto.jugadaUsuario == 'papel' && objeto.jugadaMaquina == 'papel') {
                dataVieja.resultadoPartida = 'Enpate';
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'papel' src2 = 'papel'> </mi-duelo>` }
            else if (objeto.jugadaUsuario == 'papel' && objeto.jugadaMaquina == 'tijera') {
                dataVieja.resultadoPartida = 'Perdiste';
                dataVieja.victoriasMaquina = dataVieja.victoriasMaquina  + 1;
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'tijera' src2 = 'papel'> </mi-duelo>` }
            else if (objeto.jugadaUsuario == 'tijera' && objeto.jugadaMaquina == 'piedra') {
                dataVieja.resultadoPartida = 'Perdiste';
                dataVieja.victoriasMaquina = dataVieja.victoriasMaquina  + 1;
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'piedra' src2 = 'tijera'> </mi-duelo>` }
            else if (objeto.jugadaUsuario == 'tijera' && objeto.jugadaMaquina == 'papel') {
                dataVieja.resultadoPartida = 'Ganaste';
                dataVieja.victoriasUsuario = dataVieja.victoriasUsuario + 1;
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'papel' src2 = 'tijera'> </mi-duelo>` }
            else if (objeto.jugadaUsuario == 'tijera' && objeto.jugadaMaquina == 'tijera') {
                dataVieja.resultadoPartida = 'Enpate';
                document.querySelector('.app')!.innerHTML = `<mi-duelo src1 = 'tijera' src2 = 'tijera'> </mi-duelo>` };
            dataVieja.jugadaActualUsuario = null;
            state.setState(dataVieja) };

      
    };
    customElements.define('mi-contador', MiContador)
}