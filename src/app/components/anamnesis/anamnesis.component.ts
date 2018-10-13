import { Component, OnInit } from '@angular/core';
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

    constructor() {
        this.habitos = new Habitos();
        this.personal = new Personal();
        this.familiar = new Familiar();
    }

    ngOnInit() { }
}
