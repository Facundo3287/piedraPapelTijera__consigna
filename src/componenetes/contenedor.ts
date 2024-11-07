export function agregarComponenteContenedor () {
    class MiContenedor extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.render() };

        render() {
            let div: HTMLElement = document.createElement('div');
            if (this.getAttribute('type') == 'verde') {
                div.setAttribute('class', 'contenedor verde');
                div.innerHTML = `
                    <mi-estrella type = 'Ganaste'> </mi-estrella>
                    <mis-estadisticas> </mis-estadisticas>
                    <mi-buttom> Volver a jugar </mi-buttom>` }
            else if (this.getAttribute('type') == 'rojo') {
                div.setAttribute('class', 'contenedor rojo');
                div.innerHTML = `
                <mi-estrella type = 'Perdiste'> </mi-estrella>
                <mis-estadisticas> </mis-estadisticas>
                <mi-buttom> Volver a jugar </mi-buttom>` }
            else if (this.getAttribute('type') == 'blanco') {
                div.setAttribute('class', 'contenedor blanco');
                div.innerHTML = `
                <mis-estadisticas> </mis-estadisticas>
                <mi-buttom> Volver a jugar </mi-buttom>` };
                
            let style: HTMLElement = document.createElement('style');
            style.innerHTML = `
                .contenedor {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                border: 5px solid black;
                border-radius: 10px;
                width: 400px;
                height: 520px; }
                
                .rojo { background-color: red }
                .verde { background-color: green }
                .blanco { background-color: white }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(div) }
    };
    customElements.define('mi-contenedor', MiContenedor)
}