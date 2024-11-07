import './style.css';
import '../assets/fondo.png';
import { router } from "./router.js";
import { state } from './state.js';
import { agregarComponenteTitulo } from './componenetes/titulo.js';
import { agregarComponenteButtom} from './componenetes/buttom.js';
import { agregarComponentManos } from './componenetes/manos.js';
import { agregarComponenteContador } from './componenetes/contador.js';
import { agregarComponenteDuelo } from './componenetes/duelto.js';
import { agregarComponenteEstrella } from './componenetes/estrella.js';
import { agregarComponenteEstadisticas } from './componenetes/estadisticas.js';
import { agregarComponenteContenedor } from './componenetes/contenedor.js';

function main () {
    agregarComponenteTitulo();
    agregarComponenteButtom();
    agregarComponentManos();
    agregarComponenteContador();
    agregarComponenteDuelo();
    agregarComponenteEstrella();
    agregarComponenteEstadisticas();
    agregarComponenteContenedor();
    state.recordar();
    router(window.location.pathname) };

main()