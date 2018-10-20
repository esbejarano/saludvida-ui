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

    ngOnInit() {
    }
}
