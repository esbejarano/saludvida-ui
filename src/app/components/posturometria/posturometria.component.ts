import { Posterior } from './../../model/posturometria/Posterior';
import { Lateral } from './../../model/posturometria/Lateral';
import { Anterior } from './../../model/posturometria/Anterior';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posturometria',
  templateUrl: './posturometria.component.html',
  styleUrls: ['./posturometria.component.css']
})
export class PosturometriaComponent implements OnInit {
    public infoPreguntas: any;
    public formPreguntasVistaAnterior: any;
    public formpreguntasVistaLateral: any;
    public anterior: Anterior;
    public lateral: Lateral;
    public posterior: Posterior;

    constructor() {
        this.anterior = new Anterior();
        this.lateral = new Lateral();
        this.posterior = new Posterior();
    }

    ngOnInit() { }

}
