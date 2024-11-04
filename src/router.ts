import { agregarPagInicio } from "./pages/inicio";
import { agregarPagResultado } from "./pages/resultado";

export function router (url: string) {
    if (url == '/piedraPapelTijera__consigna/') agregarPagInicio()
    else if (url == '/piedraPapelTijera__consigna/juego') agregarPagResultado()
}