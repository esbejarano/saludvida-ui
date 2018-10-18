export class Posterior {
    public postObs1: string;
    public postObs2: string;
    public postObs3: string;
    public postObs4: string;
    public postObs5: string;
    public postObs6: string;
    public postObs7: string;
    public postObs8: string;
    public postObs9: string;
    public postObs10: string;

    public post1: any;
    public post2: any;
    public post3: any;
    public post4: any;
    public post5: string;
    public post6: any;
    public post7: any;
    public post8: any;
    public post9: any;
    public post10: any;

    constructor() {
        this.postObs1 = '';
        this.postObs2 = '';
        this.postObs3 = '';
        this.postObs4 = '';
        this.postObs5 = '';
        this.postObs6 = '';
        this.postObs7 = '';
        this.postObs8 = '';
        this.postObs9 = '';
        this.postObs10 = '';
        this.post1 = {recta: '', inclinacion: '', rotacion: ''};
        this.post2 = {alineado: '', ascendido: ''};
        this.post3 = {alineada: '', ascendida: ''};
        this.post4 = {alineado: '', ascendido: ''};
        this.post5 = '';
        this.post6 = {alineada: '', ascendida: ''};
        this.post7 = {tamano: '', pliegue: ''};
        this.post8 = {visible: '', forma: '' };
        this.post9 = {normal: '', genu: ''};
        this.post10 = {normal: '', varo: ''};
    }
}
