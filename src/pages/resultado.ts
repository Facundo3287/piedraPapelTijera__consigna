import { state } from "../state";

export function agregarPagResultado () {
    let contenedor: HTMLElement = document.getElementById('app')!;
    if (state.data.resultadoPartida == 'Ganaste') {
        contenedor.innerHTML = `<mi-contenedor type = 'verde'> </mi-contenedor>` }
    else if (state.data.resultadoPartida == 'Perdiste') {
        contenedor.innerHTML = `<mi-contenedor type = 'rojo'> </mi-contenedor>` }
    else if (state.data.resultadoPartida == 'Enpate') {
        contenedor.innerHTML = `<mi-contenedor type = 'blanco'> </mi-contenedor>` }
};