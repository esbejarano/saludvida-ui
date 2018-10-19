export class Personal {
    public PP1 = '¿Tiene problemas cardiacos? \r';
    public PP2 = '¿Tiene o ha tenido presion alta alguna vez? \r';
    public PP3 = '¿Tiene diabetes? \r';
    public PP4 = '¿Ha tenido dolor en el pecho u opresion? \r';
    public PP5 = '¿Suele sentirse cansado o fatigado con facilidad? \r';
    public PP6 = 'Ha tenido o tiene con el ejercicio \r';
    public PP7 = '¿Tiene otro factor de riesgo cardiovascular? \r';
    public PP8 = '¿Tiene asma? \r';
    public PP9 = '¿Tiene alguna alergia? \r';
    public PP10 = '¿Tiene algun problema de piel? \r';
    public PP11 = '¿Tiene alguna enfermedad neurologica? \r';
    public PP12 = '¿Ha tenido dolor de cabeza intenso? \r';
    public PP13 = '¿Ha tenido convulsiones? \r';
    public PP14 = '¿Tiene problemas articulares u oseos? \r';
    public PP15 = '¿Tiene o ha tenido traumas o lesiones previas en huesos, articulaciones o musculos? \r';
    public PP16 = '¿Sufre de ansiedad? \r';
    public PP17 = '¿Existe algun otro problema o enfermedad no mencionada aqui que debiera confiarnos? \r';
    public PP18 = 'Para perder o ganar peso, o mejorar el rendimiento deportivo ha tomado o toma: \r';
    public PP19 = '¿Tiene alguna cirugia? \r';
    public PP20 = '¿Sufre de depresion? \r';

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
    public RP18: any;
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
        this.RP6 = { Palpitaciones: '', Taquicardias: '', Nauseas: '', Desmayos: '' };
        this.RP7 = { Obesidad: '', Estres: '', Tabaquismo: '', Sedentarismo: '' };
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

    public validarRP1() {
        return (this.RP1 === '' || (this.RP1 === 'Si' && (this.Anno1 === '' ||  this.Cuales1 === '' )));
    }

    public validarRP2() {
        return (this.RP2 === '' || (this.RP2 === 'Si' && (this.Anno2 === '' )));
    }

    public validarRP3() {
        return (this.RP3 === '' || (this.RP3 === 'Si' && (this.Anno3 === '' )));
    }

    public validarRP4() {
        return (this.RP4 === '' || (this.RP4 === 'Si' && (this.Anno4 === '' )));
    }

    public validarRP5() {
        return (this.RP5 === '' || (this.RP5 === 'Si' && (this.Anno5 === '' )));
    }

    public validarRP6() {
        return ((this.RP6.Palpitaciones === '' || !this.RP6.Palpitaciones) &&
            (this.RP6.Taquicardias === '' || !this.RP6.Taquicardias) &&
            (this.RP6.Nauseas === '' || !this.RP6.Nauseas) &&
            (this.RP6.Desmayos === '' || !this.RP6.Desmayos));
    }

    public validarRP7() {
        return ((this.RP7.Obesidad === '' || !this.RP7.Obesidad ) &&
            (this.RP7.Estres === '' || !this.RP7.Estres ) &&
            (this.RP7.Tabaquismo === '' || !this.RP7.Tabaquismo ) &&
            (this.RP7.Sedentarismo === '' || !this.RP7.Sedentarismo));
    }

    public validarRP8() {
        return (this.RP8 === '' || (this.RP8 === 'Si' && (this.Anno8 === '' )));
    }

    public validarRP9() {
        return (this.RP9 === '' || (this.RP9 === 'Si' && (this.Anno9 === '' || this.Cuales9 === '' )));
    }

    public validarRP10() {
        return (this.RP10 === '' || (this.RP10 === 'Si' && (this.Anno10 === '' ||  this.Cuales10 === '' )));
    }

    public validarRP11() {
        return (this.RP11 === '' || (this.RP11 === 'Si' && (this.Anno11 === '' ||  this.Cuales11 === '' )));
    }

    public validarRP12() {
        return (this.RP12 === '' || (this.RP12 === 'Si' &&  (this.Anno12 === '')));
    }

    public validarRP13() {
        return (this.RP13 === '' || (this.RP13 === 'Si' &&  (this.Anno13 === '')));
    }

    public validarRP14() {
        return (this.RP14 === '' || (this.RP14 === 'Si' &&  (this.Anno14 === '')));
    }

    public validarRP15() {
        return (this.RP15 === '' || (this.RP15 === 'Si' &&  (this.Anno15 === '')));
    }

    public validarRP16() {
        return (this.RP16 === '' || (this.RP16 === 'Si' &&  (this.Anno16 === '')));
    }

    public validarRP17() {
        return (this.RP17 === '' || (this.RP17 === 'Si' && (this.Anno17 === '' ||  this.Cuales17 === '' )));
    }

    public validarRP18() {
        console.log('this.RP18 ', this.RP18);
        return ((this.RP18.Medicamentos === '' || !this.RP18.Medicamentos ) &&
            (this.RP18.Esteroides === '' || !this.RP18.Esteroides) &&
            (this.RP18.Anabolicos === '' || !this.RP18.Anabolicos) &&
            (this.RP18.Suplementos === '' || !this.RP18.Suplementos));
    }

    public validarRP19() {
        return (this.RP19 === '' || (this.RP19 === 'Si' && (this.Anno19 === '' ||  this.Cuales19 === '' )));
    }

    public validarRP20() {
        return (this.RP20 === '' || (this.RP20 === 'Si' && (this.Anno20 === '' ||  this.Cuales20 === '' )));
    }
}

