import { Sistemas } from './../../model/anamnesis/Sistemas';
import { EvaluacionMedica } from './../../model/anamnesis/EvaluacionMedica';
import { Component, OnInit, Input } from '@angular/core';
import { Habitos } from '../../model/anamnesis/Habitos';
import { Personal } from '../../model/anamnesis/Personal';
import { Familiar } from '../../model/anamnesis/Familiar';
import { NgbTabChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-anamnesis',
    templateUrl: './anamnesis.component.html',
    styleUrls: ['./anamnesis.component.css']
})
export class AnamnesisComponent implements OnInit {
    public habitos: Habitos;
    public personal: Personal;
    public familiar: Familiar;
    public evaluacion: EvaluacionMedica;
    public sistema: Sistemas;
    public mensajePersonales: Array<string>;
    public mensajeFamiliares: Array<string>;
    public mensajeHabitos: Array<string>;
    public mensajeEvaluacion: Array<string>;
    public mensajeSistema: Array<string>;

    constructor() {
        this.habitos = new Habitos();
        this.personal = new Personal();
        this.familiar = new Familiar();
        this.sistema = new Sistemas();
        this.evaluacion = new EvaluacionMedica();
        this.mensajePersonales = [];
        this.mensajeFamiliares = [];
        this.mensajeHabitos = [];
        this.mensajeEvaluacion = [];
        this.mensajeSistema = [];
    }

    ngOnInit() { }

    public validarPersonales() {
        const mensajes = [];
        if (this.personal.validarRP1()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP1); }
        if (this.personal.validarRP2()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP2); }
        if (this.personal.validarRP3()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP3); }
        if (this.personal.validarRP4()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP4); }
        if (this.personal.validarRP5()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP5); }
        if (this.personal.validarRP6()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP6); }
        if (this.personal.validarRP7()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP7); }
        if (this.personal.validarRP8()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP8); }
        if (this.personal.validarRP9()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP9); }
        if (this.personal.validarRP10()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP10); }
        if (this.personal.validarRP11()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP11); }
        if (this.personal.validarRP12()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP12); }
        if (this.personal.validarRP13()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP13); }
        if (this.personal.validarRP14()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP14); }
        if (this.personal.validarRP15()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP15); }
        if (this.personal.validarRP16()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP16); }
        if (this.personal.validarRP17()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP17); }
        if (this.personal.validarRP18()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP18); }
        if (this.personal.validarRP19()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP19); }
        if (this.personal.validarRP20()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP20); }
        this.mensajePersonales = mensajes;
        return this.mensajePersonales.length === 0;
    }

    public validarFamiliares() {
        const mensajes = [];
        if (this.familiar.validarRF1()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF1); }
        if (this.familiar.validarRF2()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF2); }
        if (this.familiar.validarRF3()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF3); }
        if (this.familiar.validarRF4()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF4); }
        if (this.familiar.validarRF5()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF5); }
        if (this.familiar.validarRF6()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF6); }
        if (this.familiar.validarRF7()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF7); }
        if (this.familiar.validarRF8()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF8); }
        if (this.familiar.validarRF9()) { mensajes.push('Pregunta obligatoria: ' + this.familiar.PF9); }
        this.mensajeFamiliares = mensajes;
        return this.mensajeFamiliares.length === 0;
    }

    public validarHabitos() {
        const mensajes = [];
        if (this.habitos.validarRH1()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH1); }
        if (this.habitos.validarRH2()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH2); }
        if (this.habitos.validarRH3()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH3); }
        if (this.habitos.validarRH4()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH4); }
        if (this.habitos.validarRH5()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH5); }
        if (this.habitos.validarRH6()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH6); }
        if (this.habitos.validarRH7()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH7); }
        if (this.habitos.validarRH8()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH8); }
        if (this.habitos.validarRH9()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH9); }
        if (this.habitos.validarRH10()) { mensajes.push('Pregunta obligatoria: ' + this.habitos.PH10); }
        this.mensajeHabitos = mensajes;
        return this.mensajeHabitos.length === 0;
    }

    public validarSistema() {
        const mensajes = [];
        if ( this.sistema.validarOtorrino()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lOtorrino); }
        if ( this.sistema.validarCuello()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lCuello); }
        if ( this.sistema.validarTiroides()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lTiroides); }
        if ( this.sistema.validarCorazon()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lCorazon); }
        if ( this.sistema.validarPulmones()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lPulmones); }
        if ( this.sistema.validarTorax()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lTorax); }
        if ( this.sistema.validarAbdomen()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lAbdomen); }
        if ( this.sistema.validarMarcha()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lMarcha); }
        if ( this.sistema.validarExtremidades()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lExtremidades); }
        if ( this.sistema.validarEdemas()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lEdemas); }
        if ( this.sistema.validarAlienacion()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lAlienacion); }
        if ( this.sistema.validarAtrofias()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lAtrofias); }
        if ( this.sistema.validarDeformidades()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lDeformidades); }
        if ( this.sistema.validarPalpacion()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lPalpacion); }
        if ( this.sistema.validarDolorosos()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lDolorosos); }
        if ( this.sistema.validarDerrames()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lDerrames); }
        if ( this.sistema.validarMovimientos()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lMovimientos); }
        if ( this.sistema.validarFuerza()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lFuerza); }
        if ( this.sistema.validarPerifericos()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lPerifericos); }
        if ( this.sistema.validarNeurologico()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lNeurologico); }
        if ( this.sistema.validarPiel()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lPiel); }
        if ( this.sistema.validarDiagnostico()) { mensajes.push('Informacion obligatoria: ' + this.sistema.lDiagnostico); }

        this.mensajeSistema = mensajes;
        return this.mensajeSistema.length === 0;
    }

    public validarEvaluacionMedica() {
        const mensajes = [];
        if ( !this.evaluacion.validarsistolica() ) {
            mensajes.push( 'El campo: ' + this.evaluacion.lsistolica + ' debe ser mayor de 0');
        }

        if ( !this.evaluacion.validardiastolica() ) {
            mensajes.push( 'El campo: ' + this.evaluacion.ldiastolica + ' debe ser mayor de 0');
        }

        if ( !this.evaluacion.validarpulso() ) {
            mensajes.push( 'El campo: ' + this.evaluacion.lpulso + ' debe ser mayor de 0');
        }

        if ( !this.evaluacion.validarfreCardica() ) {
            mensajes.push( 'El campo: ' + this.evaluacion.lfreCardica + ' debe ser mayor de 0');
        }

        if ( !this.evaluacion.validarfreRespiratoria() ) {
            mensajes.push( 'El campo: ' + this.evaluacion.lfreRespiratoria + ' debe ser mayor de 0');
        }

        this.mensajeEvaluacion = mensajes;
        return this.mensajeEvaluacion.length === 0;
    }

    public closePersonales(alert: string) {
        this.mensajePersonales.splice(this.mensajePersonales.indexOf(alert), 1);
    }

    public closeFamiliares(alert: string) {
        this.mensajeFamiliares.splice(this.mensajeFamiliares.indexOf(alert), 1);
    }

    public closeHabitos(alert: string) {
        this.mensajeHabitos.splice(this.mensajeHabitos.indexOf(alert), 1);
    }

    public closeEvaluacion(alert: string) {
        this.mensajeEvaluacion.splice(this.mensajeEvaluacion.indexOf(alert), 1);
    }

    public closeSistema(alert: string) {
        this.mensajeSistema.splice(this.mensajeSistema.indexOf(alert), 1);
    }
}
