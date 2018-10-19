export class Sistemas {

    public otorrino: string;
    public cuello: string;
    public tiroides: string;
    public corazon: string;
    public pulmones: string;
    public torax: string;
    public abdomen: string;
    public marcha: string;
    public extremidades: string;
    public edemas: string;
    public alienacion: string;
    public atrofias: string;
    public deformidades: string;
    public palpacion: string;
    public dolorosos: string;
    public derrames: string;
    public movimientos: string;
    public fuerza: string;
    public perifericos: string;
    public neurologico: string;
    public piel: string;

    public observacion1: string;
    public observacion2: string;
    public observacion3: string;
    public observacion4: string;
    public observacion5: string;
    public observacion6: string;
    public observacion7: string;
    public observacion8: string;
    public observacion9: string;
    public observacion10: string;
    public observacion11: string;
    public observacion12: string;
    public observacion13: string;
    public observacion14: string;
    public observacion15: string;
    public observacion16: string;
    public observacion17: string;
    public observacion18: string;
    public observacion19: string;
    public observacion20: string;
    public observacion21: string;

    public lOtorrino: string;
    public lCuello: string;
    public lTiroides: string;
    public lCorazon: string;
    public lPulmones: string;
    public lTorax: string;
    public lAbdomen: string;
    public lMarcha: string;
    public lExtremidades: string;
    public lEdemas: string;
    public lAlienacion: string;
    public lAtrofias: string;
    public lDeformidades: string;
    public lPalpacion: string;
    public lDolorosos: string;
    public lDerrames: string;
    public lMovimientos: string;
    public lFuerza: string;
    public lPerifericos: string;
    public lNeurologico: string;
    public lPiel: string;


    constructor() {
        this.otorrino = '0';
        this.cuello = '0';
        this.tiroides = '0';
        this.corazon = '0';
        this.pulmones = '0';
        this.torax = '0';
        this.abdomen = '0';
        this.marcha = '0';
        this.extremidades = '0';
        this.edemas = '0';
        this.alienacion = '0';
        this.atrofias = '0';
        this.deformidades = '0';
        this.palpacion = '0';
        this.dolorosos = '0';
        this.derrames = '0';
        this.movimientos = '0';
        this.fuerza = '0';
        this.perifericos = '0';
        this.neurologico = '0';
        this.piel = '0';
        this.observacion1 = '';
        this.observacion2 = '';
        this.observacion3 = '';
        this.observacion4 = '';
        this.observacion5 = '';
        this.observacion6 = '';
        this.observacion7 = '';
        this.observacion8 = '';
        this.observacion9 = '';
        this.observacion10 = '';
        this.observacion11 = '';
        this.observacion12 = '';
        this.observacion13 = '';
        this.observacion14 = '';
        this.observacion15 = '';
        this.observacion16 = '';
        this.observacion17 = '';
        this.observacion18 = '';
        this.observacion19 = '';
        this.observacion20 = '';
        this.observacion21 = '';
        this.lOtorrino = 'Otorrino';
        this.lCuello = 'Cuello';
        this.lTiroides = 'Tiroides';
        this.lCorazon = 'Corazon';
        this.lPulmones = 'Pulmones';
        this.lTorax = 'Torax';
        this.lAbdomen = 'Abdomen';
        this.lMarcha = 'Marcha';
        this.lExtremidades = 'Extremidades';
        this.lEdemas = 'Edemas';
        this.lAlienacion = 'Alienacion';
        this.lAtrofias = 'Atrofias';
        this.lDeformidades = 'Deformidades';
        this.lPalpacion = 'Palpacion';
        this.lDolorosos = 'Dolorosos';
        this.lDerrames = 'Derrames';
        this.lMovimientos = 'Movimientos';
        this.lFuerza = 'Fuerza';
        this.lPerifericos = 'Perifericos';
        this.lNeurologico = 'Neurologico';
        this.lPiel = 'Piel';
    }

    public validarOtorrino() { return (this.otorrino === '1' && this.observacion1 === ''); }
    public validarCuello() { return (this.cuello === '1' && this.observacion2 === ''); }
    public validarTiroides() { return (this.tiroides === '1' && this.observacion3 === ''); }
    public validarCorazon() { return (this.corazon === '1' && this.observacion4 === ''); }
    public validarPulmones() { return (this.pulmones === '1' && this.observacion5 === ''); }
    public validarTorax() { return (this.torax === '1' && this.observacion6 === ''); }
    public validarAbdomen() { return (this.abdomen === '1' && this.observacion7 === ''); }
    public validarMarcha() { return (this.marcha === '1' && this.observacion8 === ''); }
    public validarExtremidades() { return (this.extremidades === '1' && this.observacion9 === ''); }
    public validarEdemas() { return (this.edemas === '1' && this.observacion10 === ''); }
    public validarAlienacion() { return (this.alienacion === '1' && this.observacion11 === ''); }
    public validarAtrofias() { return (this.atrofias === '1' && this.observacion12 === ''); }
    public validarDeformidades() { return (this.deformidades === '1' && this.observacion13 === ''); }
    public validarPalpacion() { return (this.palpacion === '1' && this.observacion14 === ''); }
    public validarDolorosos() { return (this.dolorosos === '1' && this.observacion15 === ''); }
    public validarDerrames() { return (this.derrames === '1' && this.observacion16 === ''); }
    public validarMovimientos() { return (this.movimientos === '1' && this.observacion17 === ''); }
    public validarFuerza() { return (this.fuerza === '1' && this.observacion18 === ''); }
    public validarPerifericos() { return (this.perifericos === '1' && this.observacion19 === ''); }
    public validarNeurologico() { return (this.neurologico === '1' && this.observacion20 === ''); }
    public validarPiel() { return (this.piel === '1' && this.observacion21 === ''); }
}
