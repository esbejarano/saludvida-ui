export class Familiar {
    public gradoUno = 'Primer Grado';
    public gradoDos = 'Segundo Grado';
    public gradoTres = 'Tercer Grado';

    public RF1: any;
    public RF2: any;
    public RF3: any;
    public RF4: any;
    public RF5: any;
    public RF6: any;
    public RF7: any;
    public RF8: any;
    public RF9: any;

    public Padre = 'Padre';
    public Madre = 'Madre';
    public Hijo = 'Hijo(a)';
    public Abuelo = 'Abuelo(a)';
    public Hermano = 'Hermano(a)';
    public Nieto = 'Nieto(a)';
    public Tio = 'Tio(a)';
    public Sobrino = 'Sobrino(a)';

    public PF1 = '¿Algun familiar ha muerto en forma prematura (menor a 50 años)? (muerte subita, infarto...) ';
    public PF2 = '¿Algun miembro de su familia padece de arritmias? ';
    public PF3 = '¿Algun miembro de su familia padece de sindrome de QT largo? ';
    public PF4 = '¿Algun miembro de su familia padece de hipertrofia cardiaca? ';
    public PF5 = '¿Algun miembro de su familia padece de sindrome de Marfan? ';
    public PF6 = '¿Algun miembro de su familia sufrio un accidente cerebrovascular (ACV)? ';
    public PF7 = '¿Algun miembro de tu familia sufre de presion arterial alta (HTA)? ';
    public PF8 = '¿Algun miembro de tu familia sufre de Diabetes? ';
    public PF9 = '¿Algun miembro de su familia presenta Dislipidemia (Colesterol y/o Trigliceridos altos)? ';

    public RF1F: any = {Pa1: '', Ma1: '', Hi1: '', Ab1: '', He1: '', Ni1: '', Ti1: '', So1: ''};
    public RF2F: any = {Pa2: '', Ma2: '', Hi2: '', Ab2: '', He2: '', Ni2: '', Ti2: '', So2: ''};
    public RF3F: any = {Pa3: '', Ma3: '', Hi3: '', Ab3: '', He3: '', Ni3: '', Ti3: '', So3: ''};
    public RF4F: any = {Pa4: '', Ma4: '', Hi4: '', Ab4: '', He4: '', Ni4: '', Ti4: '', So4: ''};
    public RF5F: any = {Pa5: '', Ma5: '', Hi5: '', Ab5: '', He5: '', Ni5: '', Ti5: '', So5: ''};
    public RF6F: any = {Pa6: '', Ma6: '', Hi6: '', Ab6: '', He6: '', Ni6: '', Ti6: '', So6: ''};
    public RF7F: any = {Pa7: '', Ma7: '', Hi7: '', Ab7: '', He7: '', Ni7: '', Ti7: '', So7: ''};
    public RF8F: any = {Pa8: '', Ma8: '', Hi8: '', Ab8: '', He8: '', Ni8: '', Ti8: '', So8: ''};
    public RF9F: any = {Pa9: '', Ma9: '', Hi9: '', Ab9: '', He9: '', Ni9: '', Ti9: '', So9: ''};

    constructor() {
        this.RF1 = '';
        this.RF2 = '';
        this.RF3 = '';
        this.RF4 = '';
        this.RF5 = '';
        this.RF6 = '';
        this.RF7 = '';
        this.RF8 = '';
        this.RF9 = '';
    }


    public validarRF1() {
        return (
            this.RF1 === '' ||
            (
                this.RF1 === 'Si' &&
                (
                    this.RF1F.Pa1  === '' || this.RF1F.Ma1  === '' || this.RF1F.Hi1  === '' ||
                    this.RF1F.Ab1  === '' || this.RF1F.He1  === '' ||
                    this.RF1F.Ni1  === '' || this.RF1F.Ti1  === '' || this.RF1F.So1  === ''
                )
            )
        );

    }

    public validarRF2() {
        return (
            this.RF2 === '' ||
            (
                this.RF2 === 'Si' &&
                (
                    this.RF2F.Pa2  === '' || this.RF2F.Ma2  === '' || this.RF2F.Hi2  === '' ||
                    this.RF2F.Ab2  === '' || this.RF2F.He2  === '' ||
                    this.RF2F.Ni2  === '' || this.RF2F.Ti2  === '' || this.RF2F.So2  === ''
                )
            )
        );

    }

    public validarRF3() {
        return (
            this.RF3 === '' ||
            (
                this.RF3 === 'Si' &&
                (
                    this.RF3F.Pa3  === '' || this.RF3F.Ma3  === '' || this.RF3F.Hi3  === '' ||
                    this.RF3F.Ab3  === '' || this.RF3F.He3  === '' ||
                    this.RF3F.Ni3  === '' || this.RF3F.Ti3  === '' || this.RF3F.So3  === ''
                )
            )
        );

    }

    public validarRF4() {
        return (
            this.RF4 === '' ||
            (
                this.RF4 === 'Si' &&
                (
                    this.RF4F.Pa4  === '' || this.RF4F.Ma4  === '' || this.RF4F.Hi4  === '' ||
                    this.RF4F.Ab4  === '' || this.RF4F.He4  === '' ||
                    this.RF4F.Ni4  === '' || this.RF4F.Ti4  === '' || this.RF4F.So4  === ''
                )
            )
        );

    }

    public validarRF5() {
        return (
            this.RF5 === '' ||
            (
                this.RF5 === 'Si' &&
                (
                    this.RF5F.Pa5  === '' || this.RF5F.Ma5  === '' || this.RF5F.Hi5  === '' ||
                    this.RF5F.Ab5  === '' || this.RF5F.He5  === '' ||
                    this.RF5F.Ni5  === '' || this.RF5F.Ti5  === '' || this.RF5F.So5  === ''
                )
            )
        );

    }

    public validarRF6() {
        return (
            this.RF6 === '' ||
            (
                this.RF6 === 'Si' &&
                (
                    this.RF6F.Pa6  === '' || this.RF6F.Ma6  === '' || this.RF6F.Hi6  === '' ||
                    this.RF6F.Ab6  === '' || this.RF6F.He6  === '' ||
                    this.RF6F.Ni6  === '' || this.RF6F.Ti6  === '' || this.RF6F.So6  === ''
                )
            )
        );

    }

    public validarRF7() {
        return (
            this.RF7 === '' ||
            (
                this.RF7 === 'Si' &&
                (
                    this.RF7F.Pa7  === '' || this.RF7F.Ma7  === '' || this.RF7F.Hi7  === '' ||
                    this.RF7F.Ab7  === '' || this.RF7F.He7  === '' ||
                    this.RF7F.Ni7  === '' || this.RF7F.Ti7  === '' || this.RF7F.So7  === ''
                )
            )
        );

    }

    public validarRF8() {
        return (
            this.RF8 === '' ||
            (
                this.RF8 === 'Si' &&
                (
                    this.RF8F.Pa8  === '' || this.RF8F.Ma8  === '' || this.RF8F.Hi8  === '' ||
                    this.RF8F.Ab8  === '' || this.RF8F.He8  === '' ||
                    this.RF8F.Ni8  === '' || this.RF8F.Ti8  === '' || this.RF8F.So8  === ''
                )
            )
        );

    }
    public validarRF9() {
        return (
            this.RF9 === '' ||
            (
                this.RF9 === 'Si' &&
                (
                    this.RF9F.Pa9  === '' || this.RF9F.Ma9  === '' || this.RF9F.Hi9  === '' ||
                    this.RF9F.Ab9  === '' || this.RF9F.He9  === '' ||
                    this.RF9F.Ni9  === '' || this.RF9F.Ti9  === '' || this.RF9F.So9  === ''
                )
            )
        );

    }
}
