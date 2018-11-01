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
    public bicepRelajadoIzq: number;
    public bicepRelajadoDer: number;
    public pantorrillaRelajadaIzq: number;
    public pantorrillaRelajadaDer: number;
    public cuello: number;
    public cintura: number;
    public cadera: number;
    public brazoCorregido: number;
    public piernaCorregida: number;
    public valorICC: number;
    public interpretaICC: string;
    public valorEstructura: number;
    public interpretaEstructura: string;
    public muneca: number;
    public codo: number;
    public rodilla: number;
    public endomorfia: number;
    public mesomorfia: number;
    public ectomorfia: number;
    public x: number;
    public y: number;
    public perMuneca: number;
    public catalogacion: string;

    constructor() {
        this.nombre = '';
        this.perMuneca = 0;
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
        this.bicepRelajadoIzq = 0;
        this.bicepRelajadoDer = 0;
        this.pantorrillaRelajadaIzq = 0;
        this.pantorrillaRelajadaDer = 0;
        this.cuello = 0;
        this.cintura = 0;
        this.cadera = 0;
        this.brazoCorregido = 0;
        this.piernaCorregida = 0;
        this.valorICC = 0;
        this.interpretaICC = '';
        this.valorEstructura = 0;
        this.interpretaEstructura = '';
        this.muneca = 0;
        this.codo = 0;
        this.rodilla = 0;
        this.endomorfia = 0;
        this.mesomorfia = 0;
        this.ectomorfia = 0;
        this.x = 0;
        this.y = 0;
        this.catalogacion = '';
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
        const a = (( this.codo + this.brazoCorregido + this.rodilla + this.muneca ) / 4 );
        const valorOseo = (Math.pow( (this.estatura / 100), 2) * (this.muneca / 100) * (this.rodilla / 100) * 400);
        this.pesoOseo = (3.02 * Math.pow( valorOseo, 0.712));
        this.pesoMuscular =  (this.peso - (this.pesoGraso + this.pesoOseo + this.pesoResidual));
    }

    public calcularPorcentajeGrasa() {
        if (this.genero === '1') {
            this.porcenGrasa = (
                (495 / (1.0324 - 0.19077 * (Math.log10((this.cintura - this.cuello))) + 0.15456 * (Math.log10(this.estatura)))) - 450);
        } else {
            this.porcenGrasa = (
                495 / ( 1.29579 - 0.35004 *
                    (Math.log10((this.cintura + this.cadera - this.cuello))) + 0.221 * (Math.log10(this.estatura))) - 450);
        }
    }

    public calcularICC() {
        this.valorICC = this.cintura / this.cadera;
        this.interpretaICC = (this.valorICC > 0.9) ? '2' : '1';
    }

    public calcularPerimetrosCorregidos () {
        this.brazoCorregido = this.bicepRelajadoDer - ( this.tricipital / 10 );
        this.piernaCorregida = this.pantorrillaRelajadaDer - ( this.pantorrilla / 10 );
    }

    public calcularEstructura() {
        this.valorEstructura = (this.estatura / this.perMuneca);
        let valor;

        if (this.genero === '1') {
            if (this.valorEstructura < 9.6) {
                valor = '3';
            } else if (this.valorEstructura < 10.4) {
                valor = '2';
            } else {
                valor = '1';
            }
        } else {
            if (this.valorEstructura < 9.9) {
                valor = '3';
            } else if (this.valorEstructura < 10.9) {
                valor = '2';
            } else {
                valor = '1';
            }
        }
        this.interpretaEstructura = valor;
    }

    public calcularSomatotipos() {
        this.endomorfia = (
            (0.1451 * this.plieguesCorregidos) -
            (0.00068 * Math.pow(this.plieguesCorregidos, 2)) +
            (0.0000014 * Math.pow(this.plieguesCorregidos, 3)) -
            0.7182
        );
        this.mesomorfia = (
            (0.858 * this.codo) +
            (0.601 * this.rodilla) +
            (0.188 * this.brazoCorregido) +
            (0.161 * this.piernaCorregida) -
            (0.131 * this.estatura) +
            4.5
        );

        if (this.indicePonderal >= 40.75) {
            this.ectomorfia = this.indicePonderal * 0.732 - 28.58;
        } else if (this.indicePonderal > 38.25) {
            this.ectomorfia = this.indicePonderal * 0.463 - 17.63;
        } else {
            this.ectomorfia = 0.1;
        }

        this.x = this.ectomorfia - this.endomorfia;
        this.y = (2 * this.mesomorfia) - (this.ectomorfia + this.endomorfia);

        let valor = '';
        if (this.endomorfia - this.mesomorfia > 0.5 && Math.abs(this.mesomorfia - this.ectomorfia) < 0.5) {
            valor = '1';
        } else if (this.endomorfia - this.mesomorfia > 0.5 && this.mesomorfia - this.ectomorfia > 0.5) {
            valor = '2';
        } else if (Math.abs(this.endomorfia - this.mesomorfia) < 0.5 && this.mesomorfia - this.ectomorfia > 0.5) {
            valor = '3';
        } else if (this.mesomorfia - this.endomorfia > 0.5 && this.endomorfia - this.ectomorfia > 0.5) {
            valor = '4';
        } else if (this.mesomorfia - this.endomorfia > 0.5 && (this.endomorfia - this.ectomorfia) < 0.5) {
            valor = '5';
        } else if (this.mesomorfia - this.ectomorfia > 0.5 && this.ectomorfia - this.endomorfia > 0.5) {
            valor = '6';
        } else if (Math.abs(this.mesomorfia - this.ectomorfia) < 0.5 && this.ectomorfia - this.endomorfia > 0.5) {
            valor = '7';
        } else if (this.ectomorfia - this.mesomorfia > 0.5 && this.mesomorfia - this.endomorfia > 0.5) {
            valor = '8';
        } else if (this.ectomorfia - this.endomorfia > 0.5 && Math.abs(this.mesomorfia - this.endomorfia ) < 0.5) {
            valor = '9';
        } else if (this.ectomorfia - this.endomorfia > 0.5 && this.endomorfia - this.mesomorfia > 0.5) {
            valor = '10';
        } else if (Math.abs(this.endomorfia - this.ectomorfia) < 0.5 && this.ectomorfia - this.endomorfia > 0.5) {
            valor = '11';
        } else if (this.endomorfia - this.ectomorfia > 0.5 && this.ectomorfia - this.mesomorfia > 0.5) {
            valor = '12';
        } else if (Math.abs(this.endomorfia - this.mesomorfia) < 0.5 && Math.abs(this.mesomorfia - this.ectomorfia) < 0.5) {
            valor = '13';
        }

        this.catalogacion = valor;
    }
}
