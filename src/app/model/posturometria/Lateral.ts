export class Lateral {
    public latObs1: string;
    public latObs2: string;
    public latObs3: string;
    public latObs4: string;
    public latObs5: string;
    public latObs6: string;
    public latObs7: string;

    public lat1: any;
    public lat2: any;
    public lat3: any;
    public lat4: any;
    public lat5: any;
    public lat6: any;
    public lat7: any;

    constructor() {
        this.latObs1 = '';
        this.latObs2 = '';
        this.latObs3 = '';
        this.latObs4 = '';
        this.latObs5 = '';
        this.latObs6 = '';
        this.latObs7 = '';

        this.lat1 = { recta: '', protraccion: '', retraccion: '', flexion: '', extension: '' };
        this.lat2 = { normal: '', izquierda: '', derecha: '' };
        this.lat3 = { cervical: '', cifosis: '', dorsal: '', lumbar: '', hipersifosis: '', hiperlordosis: '' };
        this.lat4 = '';
        this.lat5 = '';
        this.lat6 = '';
        this.lat7 = '';

    }
}
