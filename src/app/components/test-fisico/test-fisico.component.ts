import { Component, OnInit } from '@angular/core';
import { TestFisico } from 'src/app/model/testfisico/TestFisico';

@Component({
    selector: 'app-test-fisico',
    templateUrl: './test-fisico.component.html',
    styleUrls: ['./test-fisico.component.css']
})
export class TestFisicoComponent implements OnInit {

    public testFisico: TestFisico;

    constructor() {
        this.testFisico = new TestFisico();
    }

    ngOnInit() { }

}
