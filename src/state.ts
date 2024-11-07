type FuncionFlecha = () => void;

interface Jugadas {
    jugadaUsuario: string | null;
    jugadaMaquina: string | null };

interface Data {
    jugadaActualUsuario: string | null;
    jugadaActualMaquina: string | null;
    resultadoPartida: string | null;
    victoriasUsuario: number;
    victoriasMaquina: number;
    jugadas: Jugadas[] };

interface State {
    data: Data;
    listeners: FuncionFlecha[];
    recordar(): void;
    getState(): Data;
    setState(nuevaData: Data): void;
    suscribirse(suscripcion: FuncionFlecha): void };

export let state: State = {
    data: {
        jugadaActualUsuario: null,
        jugadaActualMaquina: null,
        resultadoPartida: null,
        victoriasUsuario: 0,
        victoriasMaquina: 0,
        jugadas: [] },
    listeners: [],
    recordar() {
        if ( localStorage.getItem('data') ) {
            let texto: string = localStorage.getItem('data')!;
            let data: Data = JSON.parse(texto);
            this.data = data } },
    getState() {
        return this.data },
    setState(nuevaData: Data) {
        this.data = nuevaData;
        localStorage.setItem('data', JSON.stringify(this.data)) },
    suscribirse(suscripcion: FuncionFlecha) {
        this.listeners.push(suscripcion) } 
};