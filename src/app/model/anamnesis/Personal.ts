export class Personal {
    public PP1 = '¿Tiene problemas cardiacos?';
    public PP2 = '¿Tiene o ha tenido presion alta alguna vez?';
    public PP3 = '¿Tiene diabetes?';
    public PP4 = '¿Ha tenido dolor en el pecho u opresion?';
    public PP5 = '¿Suele sentirse cansado o fatigado con facilidad?';
    public PP6 = 'Ha tenido o tiene con el ejercicio';
    public PP7 = '¿Tiene otro factor de riesgo cardiovascular?';
    public PP8 = '¿Tiene asma?';
    public PP9 = '¿Tiene alguna alergia?';
    public PP10 = '¿Tiene algun problema de piel?';
    public PP11 = '¿Tiene alguna enfermedad neurologica?';
    public PP12 = '¿Ha tenido dolor de cabeza intenso?';
    public PP13 = '¿Ha tenido convulsiones?';
    public PP14 = '¿Tiene problemas articulares u oseos?';
    public PP15 = '¿Tiene o ha tenido traumas o lesiones previas en huesos, articulaciones o musculos?';
    public PP16 = '¿Sufre de ansiedad?';
    public PP17 = '¿Existe algun otro problema o enfermedad no mencionada aqui que debiera confiarnos?';
    public PP18 = 'Para perder o ganar peso, o mejorar el rendimiento deportivo ha tomado o toma:';
    public PP19 = '¿Tiene alguna cirugia?';
    public PP20 = '¿Sufre de depresion?';

    public RP1: any;
    public RP2: any;
    public RP3: any;
    public RP4: any;
    public RP5: any;
    public RP6: any = { Palpitaciones: '', Taquicardias: '', Nauseas: '', Desmayos: '' };
    public RP7: any = { Obesidad: '', Estres: '', Tabaquismo: '', Sedentarismo: '' };
    public RP8: any;
    public RP9: any;
    public RP10: any;
    public RP11: any;
    public RP12: any;
    public RP13: any;
    public RP14: any;
    public RP15: any;
    public RP16: any;
    public RP17: any;
    public RP18: any = { Medicamentos: '', Esteroides: '', Anabolicos: '', Suplementos: ''};
    public RP19: any;
    public RP20: any;

    public Cuales1: any;
    public Cuales9: any;
    public Cuales10: any;
    public Cuales11: any;
    public Cuales17: any;
    public Cuales19: any;
    public Cuales20: any;
    public Anno1: any;
    public Anno2: any;
    public Anno3: any;
    public Anno4: any;
    public Anno5: any;
    public Anno8: any;
    public Anno9: any;
    public Anno10: any;
    public Anno11: any;
    public Anno12: any;
    public Anno13: any;
    public Anno14: any;
    public Anno15: any;
    public Anno16: any;
    public Anno17: any;
    public Anno19: any;
    public Anno20: any;

    constructor() {
        this.RP1 = '';
        this.RP2 = '';
        this.RP3 = '';
        this.RP4 = '';
        this.RP5 = '';
        this.RP8 = '';
        this.RP9 = '';
        this.RP10 = '';
        this.RP11 = '';
        this.RP12 = '';
        this.RP13 = '';
        this.RP14 = '';
        this.RP15 = '';
        this.RP16 = '';
        this.RP17 = '';
        this.RP18 = { Medicamentos: '', Esteroides: '', Anabolicos: '', Suplementos: ''};
        this.RP19 = '';
        this.RP20 = '';
        this.RP6 = { Palpitaciones: '', Taquicardias: '', Nauseas: '', Desmayos: '' };
        this.RP7 = { Obesidad: '', Estres: '', Tabaquismo: '', Sedentarismo: '' };
        this.Cuales1 = '';
        this.Cuales9 = '';
        this.Cuales10 = '';
        this.Cuales11 = '';
        this.Cuales17 = '';
        this.Cuales19 = '';
        this.Cuales20 = '';
        this.Anno1 = '';
        this.Anno2 = '';
        this.Anno3 = '';
        this.Anno4 = '';
        this.Anno5 = '';
        this.Anno8 = '';
        this.Anno9 = '';
        this.Anno10 = '';
        this.Anno11 = '';
        this.Anno12 = '';
        this.Anno13 = '';
        this.Anno14 = '';
        this.Anno15 = '';
        this.Anno16 = '';
        this.Anno17 = '';
        this.Anno19 = '';
        this.Anno20 = '';
    }

    public limpiar(variable1, variable2?, variable3?) {
        console.log(variable1.value);
        console.log(variable2.value);
        console.log(variable3.value);
    }

}

