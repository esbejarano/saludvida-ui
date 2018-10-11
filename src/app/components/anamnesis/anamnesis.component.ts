import { Component, OnInit } from '@angular/core';
import { Habitos } from '../../model/Habitos';
import { Actividad } from '../../model/Actividad';
import { Cigarillo } from '../../model/Cigarrillo';
import {NgbTabChangeEvent} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-anamnesis',
  templateUrl: './anamnesis.component.html',
  styleUrls: ['./anamnesis.component.css']
})
export class AnamnesisComponent implements OnInit {
    public preguntas: any;
    public habitos: Habitos;
    public actividadVacia: Actividad = new Actividad(0, 0, 0, 0, '');
    public cigarrilloVacio: Cigarillo = new Cigarillo(0, 0, '');
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
    public RF1: any;
    public RF2: any;
    public RF3: any;
    public RF4: any;
    public RF5: any;
    public RF6: any;
    public RF7: any;
    public RF8: any;
    public RF9: any;
    public PP1: any;
    public PP2: any;
    public PP3: any;
    public PP4: any;
    public PP5: any;
    public PP6: any;
    public PP7: any;
    public PP8: any;
    public PP9: any;
    public PP10: any;
    public PP11: any;
    public PP12: any;
    public PP13: any;
    public PP14: any;
    public PP15: any;
    public PP16: any;
    public PP17: any;
    public PP18: any;
    public PP19: any;

    public RP1: any;
    public RP2: any;
    public RP3: any;
    public RP4: any;
    public RP5: any;
    public RP6: any = {
        Palpitaciones: '',
        Taquicardias: '',
        Nauseas: '',
        Desmayos: ''
    };
    public RP7: any = {
        Obesidad: '',
        Estres: '',
        Tabaquismo: '',
        Sedentarismo: ''
    };
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

    constructor() {
        this.habitos = new Habitos();
        this.habitos.actividad = this.actividadVacia;
        this.habitos.cigarrillo = this.cigarrilloVacio;
    }

    ngOnInit() { }

    public submitPreguntasAntecendentes(form: any) {
        console.log(form.form.data);
    }

    public beforeChange($event: NgbTabChangeEvent) {
        if ($event.nextId === 'tab-preventchange2') {
          $event.preventDefault();
        }
      }


}
