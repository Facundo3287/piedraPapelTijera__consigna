export function agregarPagInicio () {
    let contenedor: HTMLElement = document.getElementById('app')!;
    contenedor.innerHTML = `
        <mi-titulo type = 'A'> </mi-titulo>
        <mi-buttom class = 'buttom'>Empezar</mi-buttom>
        <mis-manos> </mis-manos>`;
    
};