export function agregarComponenteTitulo () {
    class MiTitulo extends HTMLElement {
        shadow: ShadowRoot;
        type: string;

        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.type = this.getAttribute('type')!;
            this.render() }

        render() {
            if (this.type == 'A') this.tipoA()
            else if (this.type == 'B') this.tipoB() };

        tipoA() {
            let h1: HTMLElement = document.createElement('h1');
            h1.setAttribute('class', 'h1');
            h1.innerHTML = `Piedra<br>Papel<spam class = 'spam'>o</spam><br>Tijera`;
            let style: HTMLElement = document.createElement('style');
            style.innerHTML = `
                .h1 {
                margin: 0px;
                font-family: "Merriweather", serif;
                font-weight: 900;
                font-size: 60px;
                line-height: 0.9;
                color: #009048 }

                .spam {
                color:#91CCAF }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(h1) };
        
        tipoB() {
            let h1: HTMLElement = document.createElement('h1');
            h1.setAttribute('class', 'h1');
            h1.innerHTML = `Presioná jugar<br>y elegí: piedra,<br>papel o tijera<br>antes de que<br>pasen los 3<br>segundos.`;
            let style: HTMLElement = document.createElement('style');
            style.innerHTML = `
            .h1 {
                margin: 0px;
                font-family: "Merriweather", serif;
                font-weight: 400;
                font-size: 25px;
                line-height: 1.1;
                text-align: center;
                color: black }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(h1) }
        
    };
    customElements.define('mi-titulo', MiTitulo)
}