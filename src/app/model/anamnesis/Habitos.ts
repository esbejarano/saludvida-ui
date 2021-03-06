export class Habitos {
    public RH1: any;
    public RH2: any;
    public RH3: any;
    public RH4: any;
    public RH5: any;
    public RH6: any;
    public RH7: any;
    public RH8: any;
    public RH9: any;
    public RH10: any;
    public PH1 = '¿Cuantos dias realiza actividad fisica o deportes?';
    public PH2 = '¿Cuanto tiempo emplea cada vez que realiza actividad fisica?';
    public PH3 = '¿Cual es la intensidad de la actividad fisica?';
    public PH4 = '¿Cuantas horas duerme aproximadamente (no cuentan siestas)?';
    public PH5 = '¿Logra conciliar facilmente el sueño?';
    public PH6 = '¿Duerme continuamente durante toda la noche?';
    public PH7 = '¿Fuma cigarrillos, tabaco o similares?';
    public PH8 = '¿Si consume cigarrillo, hace cuanto lo hace?';
    public PH9 = '¿Consume licor?';
    public PH10 = '¿Consume sustancias alucinogenas?';

    constructor() {
        this.RH1 = '';
        this.RH2 = '';
        this.RH3 = '';
        this.RH4 = '';
        this.RH5 = '';
        this.RH6 = '';
        this.RH7 = '';
        this.RH8 = '';
        this.RH9 = '';
        this.RH10 = '';
    }

    public validarRH1() {
        return this.RH1 === '';
    }

    public validarRH2() {
        return this.RH2 === '';
    }

    public validarRH3() {
        return this.RH3 === '';
    }

    public validarRH4() {
        return this.RH4 === '';
    }

    public validarRH5() {
        return this.RH5 === '';
    }

    public validarRH6() {
        return this.RH6 === '';
    }

    public validarRH7() {
        return this.RH7 === '';
    }

    public validarRH8() {
        return this.RH8 === '';
    }

    public validarRH9() {
        return this.RH9 === '';
    }

    public validarRH10() {
        return this.RH10 === '';
    }



}
