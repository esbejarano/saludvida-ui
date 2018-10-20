export class Antropometria {
    public nombre: string;
    public edad: number;
    public genero: string;
    public tipo: string;
    public estatura: number;
    public peso: number;
    public pesoIdeal: number;
    public pesoPonderado: number;
    public indicePonderal: number;
    public imc: number;
    public resultadoImc: string;
    public interpretaImc: string;
    public tricipital: number;
    public subEscapular: number;
    public supIleaco: number;
    public pantorrilla: number;
    public plieguesCorregidos: number;
    public porcenGrasa: number;
    public pesoGraso: number;
    public pesoResidual: number;
    public pesoMagro: number;
    public pesoOseo: number;
    public pesoMuscular: number;
    public cuello: number;
    public cintura: number;
    public cadera: number;

    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.genero = '1';
        this.tipo = '1';
        this.estatura = 0;
        this.peso = 0;
        this.pesoIdeal = 0;
        this.pesoPonderado = 0;
        this.indicePonderal = 0;
        this.imc = 0;
        this.resultadoImc = '';
        this.interpretaImc = '';
        this.tricipital = 0;
        this.subEscapular = 0;
        this.supIleaco = 0;
        this.pantorrilla = 0;
        this.plieguesCorregidos = 0;
        this.porcenGrasa = 0;
        this.pesoGraso = 0;
        this.pesoResidual = 0;
        this.pesoMagro = 0;
        this.pesoOseo = 0;
        this.pesoMuscular = 0;
        this.cuello = 0;
        this.cintura = 0;
        this.cadera = 0;
    }

    public calcularPesoIdeal () {
        let valor = 0;
        if (this.tipo === '2') {
            valor = this.pesoPonderado * 0.9;
        } else if (this.tipo === '1') {
            valor = this.pesoPonderado * 1.1;
        } else {
            valor = this.pesoPonderado;
        }
        this.pesoIdeal = valor;
    }

    public calcularPesoPonderado() {
        this.pesoPonderado = (this.tipo === '1' ?
            (48.08 + ( ( this.estatura - 152.4) / 2.54 ) * 2.72 ) :
            (45.35 + ( ( this.estatura - 152.4) / 2.54 ) * 2.267 )
        );

        this.indicePonderal = (this.peso / (Math.pow(this.estatura, (1 / 3))));
    }

    public calcularIMC() {
        this.imc = (this.peso) / ((this.estatura / 100) * (this.estatura / 100));
        if (this.imc < 18.5) {
            this.resultadoImc = '1';
        } else if (this.imc < 25) {
            this.resultadoImc = '2';
        } else if (this.imc < 30) {
            this.resultadoImc = '3';
        } else {
            this.resultadoImc = '4';
        }

        if (this.imc < 16 ) {
            this.interpretaImc = '1';
        } else if (this.imc < 16.99) {
            this.interpretaImc = '2';
        } else if (this.imc < 18.49) {
            this.interpretaImc = '3';
        } else if (this.imc < 22.99) {
            this.interpretaImc = '4';
        } else if (this.imc < 24.99) {
            this.interpretaImc = '5';
        } else if (this.imc < 27.49) {
            this.interpretaImc = '6';
        } else if (this.imc < 29.99) {
            this.interpretaImc = '7';
        } else if (this.imc < 32.49) {
            this.interpretaImc = '8';
        } else if (this.imc < 34.99) {
            this.interpretaImc = '9';
        } else if (this.imc < 37.49) {
            this.interpretaImc = '10';
        } else if (this.imc < 39.99) {
            this.interpretaImc = '11';
        } else {
            this.interpretaImc = '12';
        }
    }

    public calcularPlieguesCorregidos() {
        this.plieguesCorregidos = (((this.tricipital + this.subEscapular + this.supIleaco ) * 170.18) / this.estatura);
    }

    public calcularPesos() {
        this.pesoGraso = ((this.peso * this.porcenGrasa) / 100);
        this.pesoResidual = (this.genero === '1') ? (this.peso * (24.1 / 100)) : (this.peso * ( 20.9 / 100));
        this.pesoMagro = (this.peso - this.pesoGraso);
        // this.pesoOseo = ( (Math.pow(( ( B29 + B24 + B30 + B28 ) / 4 ), 2 ) ) * (this.estatura) * (0.92) * (0.001));
        this.pesoMuscular =  (this.peso - (this.pesoGraso + this.pesoOseo + this.pesoResidual));
    }

    public calcularPorcentajeGrasa() {
        if (this.genero === '1') {
            this.porcenGrasa = (
                ( 495 / (1.0324 - 0.19077 * ( Math.log10( (this.cintura - this.cuello) ) ) + 0.15456 * ( Math.log10( this.estatura ) ) ) )
            - 450 );
        } else {
            this.porcenGrasa =
                (495 /
                    ( 1.29579 - 0.35004 * ( Math.log10((this.cintura + this.cadera - this.cuello))) + 0.221 * (Math.log10(this.estatura))
                    )
                - 450);
        }
    }

}
