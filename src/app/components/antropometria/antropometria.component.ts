import { Antropometria } from './../../model/antropometria/Antropometria';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-antropometria',
  templateUrl: './antropometria.component.html',
  styleUrls: ['./antropometria.component.css']
})
export class AntropometriaComponent implements OnInit {

    public antropometria: Antropometria;

    constructor() {
        this.antropometria = new Antropometria();
    }

    ngOnInit() { }

    public calcularTodo() {
        this.antropometria.calcularPesoIdeal();
        this.antropometria.calcularPesoPonderado();
        this.antropometria.calcularIMC();
        this.antropometria.calcularPlieguesCorregidos();
        this.antropometria.calcularPesos();
        this.antropometria.calcularPorcentajeGrasa();
        this.antropometria.calcularICC();
        this.antropometria.calcularPerimetrosCorregidos();
        this.antropometria.calcularEstructura();
        this.antropometria.calcularSomatotipos();
    }
}
