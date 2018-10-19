export class EvaluacionMedica {
    public sistolica: number;
    public diastolica: number;
    public pulso: number;
    public freCardica: number;
    public freRespiratoria: number;

    public lsistolica: string;
    public ldiastolica: string;
    public lpulso: string;
    public lfreCardica: string;
    public lfreRespiratoria: string;

    constructor () {
        this.sistolica = 0;
        this.diastolica = 0;
        this.pulso = 0;
        this.freCardica = 0;
        this.freRespiratoria = 0;
        this.lsistolica = 'Presión arterial Sistólica';
        this.ldiastolica = 'Presión arterial Diastólica';
        this.lpulso = 'Pulso';
        this.lfreCardica = 'Frecuenca Cardiáca';
        this.lfreRespiratoria = 'Frecuencia Respiratoria';
    }

    public validarsistolica () {
        return Number.isInteger(this.sistolica) && this.sistolica > 0;
    }

    public validardiastolica () {
        return Number.isInteger(this.diastolica) && this.diastolica > 0;
    }

    public validarpulso () {
        return Number.isInteger(this.pulso) && this.pulso > 0;
    }

    public validarfreCardica () {
        return Number.isInteger(this.freCardica) && this.freCardica > 0;
    }

    public validarfreRespiratoria () {
        return Number.isInteger(this.freRespiratoria) && this.freRespiratoria > 0;
    }

}
