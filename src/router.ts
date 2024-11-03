export function router (contenedor: HTMLElement, url: string) {
    if (url == '/piedraPapelTijera__consigna/') contenedor.innerHTML = '<h1> hola inicio </h1>'
    else if (url == '/piedraPapelTijera__consigna/juego') contenedor.innerHTML = '<h1> hola juego </h1>'
    else console.log('faloo', window.location.pathname)
}