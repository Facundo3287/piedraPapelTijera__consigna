import './style.css';
import '../assets/fondo.png';
import { router } from "./router.js";
import { agregarComponenteTitulo } from './componenetes/titulo.js';
import { agregarComponenteButtom} from './componenetes/buttom.js';
import { agregarComponentManos } from './componenetes/manos.js';

function main () {
    agregarComponenteTitulo();
    agregarComponenteButtom();
    agregarComponentManos();
    router(window.location.pathname)
};

main()