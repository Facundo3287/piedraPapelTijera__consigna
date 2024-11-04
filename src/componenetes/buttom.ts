export function agregarComponenteButtom () {
    class MiButtom extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: 'open' });
            this.render() };

        render() {
            let buttom: HTMLElement = document.createElement('buttom');
            buttom.textContent = this.textContent;
            buttom.setAttribute('class', 'buttom');
            buttom.addEventListener('click', (e: any) => {  
                if (e.target.textContent == 'Empezar') {
                    document.getElementById('app')!.innerHTML = `
                    <mi-titulo type = 'B'> </mi-titulo>
                    <mi-buttom class = 'buttom'>Jugar</mi-buttom>
                    <mis-manos> </mis-manos>` }
                else if (e.target.textContent == 'Jugar') console.log('sexo')
            });

            let style: HTMLElement = document.createElement('style');
            style.innerHTML = `
                .buttom {
                border: 10px solid #001997;
                border-radius: 20px;
                padding-left: 50px;
                padding-right: 50px;
                font-family: "Poppins", sans-serif;
                font-size: 30px;
                background-color: #006CFC;
                color: white }`;
            this.shadow.appendChild(style);
            this.shadow.appendChild(buttom) }
    };
    customElements.define('mi-buttom', MiButtom)
}