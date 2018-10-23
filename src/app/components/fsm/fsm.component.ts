import { Component, OnInit } from '@angular/core';
import { FSM } from 'src/app/model/fsm/fsm';

@Component({
    selector: 'app-fsm',
    templateUrl: './fsm.component.html',
    styleUrls: ['./fsm.component.css']
})
export class FsmComponent implements OnInit {

    public fsm: FSM;

    constructor() {
        this.fsm = new FSM();
    }

    ngOnInit() {}

    public calcularResultadoFinal(derecho, izquierdo) {
        return (derecho < izquierdo ? derecho : izquierdo );
    }

    public calcularResultadosFinales() {
        this.fsm.desplanteF = this.calcularResultadoFinal(this.fsm.desplanteD, this.fsm.desplanteI);
        this.fsm.estabilidadF = this.calcularResultadoFinal(this.fsm.estabilidadD, this.fsm.estabilidadI);
        this.fsm.levantamientoF = this.calcularResultadoFinal(this.fsm.levantamientoD, this.fsm.levantamientoI);
        this.fsm.movilidadF = this.calcularResultadoFinal(this.fsm.movilidadD, this.fsm.movilidadI);
        this.fsm.pasoObsF = this.calcularResultadoFinal(this.fsm.pasoObsD, this.fsm.pasoObsI);
        this.calcularTotales();
    }

    public calcularTotales() {
        this.fsm.totales = this.fsm.pasoObsF + this.fsm.desplanteF + this.fsm.movilidadF +
            this.fsm.levantamientoF + this.fsm.estabilidadF +
            this.fsm.sentadilla + this.fsm.estabilidadT;
    }
}
