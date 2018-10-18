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
    public mensajePersonales: Array<string>;
    public mensajeFamiliares: Array<string>;
    public mensajeHabitos: Array<string>;

    constructor() {
        this.habitos = new Habitos();
        this.personal = new Personal();
        this.familiar = new Familiar();
        this.mensajePersonales = [];
        this.mensajeFamiliares = [];
        this.mensajeHabitos = [];
    }

    ngOnInit() { }

    public validarPersonales() {
        const mensajes = [];
        if (!this.personal.validarRP1()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP1); }
        if (!this.personal.validarRP2()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP2); }
        if (!this.personal.validarRP3()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP3); }
        if (!this.personal.validarRP4()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP4); }
        if (!this.personal.validarRP5()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP5); }
        if (!this.personal.validarRP6()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP6); }
        if (!this.personal.validarRP7()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP7); }
        if (!this.personal.validarRP8()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP8); }
        if (!this.personal.validarRP9()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP9); }
        if (!this.personal.validarRP10()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP10); }
        if (!this.personal.validarRP11()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP11); }
        if (!this.personal.validarRP12()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP12); }
        if (!this.personal.validarRP13()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP13); }
        if (!this.personal.validarRP14()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP14); }
        if (!this.personal.validarRP15()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP15); }
        if (!this.personal.validarRP16()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP16); }
        if (!this.personal.validarRP17()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP17); }
        if (!this.personal.validarRP18()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP18); }
        if (!this.personal.validarRP19()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP19); }
        if (!this.personal.validarRP20()) { mensajes.push('Pregunta obligatoria: ' + this.personal.PP20); }
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

    public closePersonales(alert: string) {
        this.mensajePersonales.splice(this.mensajePersonales.indexOf(alert), 1);
    }

    public closeFamiliares(alert: string) {
        this.mensajeFamiliares.splice(this.mensajePersonales.indexOf(alert), 1);
    }

    public closeHabitos(alert: string) {
        this.mensajeHabitos.splice(this.mensajePersonales.indexOf(alert), 1);
    }


}
