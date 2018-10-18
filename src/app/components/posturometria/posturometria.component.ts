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


    constructor() {
        this.anterior = new Anterior();
        this.lateral = new Lateral();
    }

    ngOnInit() {

        this.infoPreguntas = {
            'preguntasVistaAnterior': [
                {
                    'id': 'cabeza',
                    'name': 'cabeza',
                    'label': 'CABEZA',
                    'comment': 'cabezaComment',
                    'options': [
                        {
                            'id': 1,
                            'name': 'RECTA'
                        },
                        {
                            'id': 2,
                            'name': 'INCLINACIÓN DER'
                        },
                        {
                            'id': 3,
                            'name': 'INCLINACIÓN IZQ'
                        },
                        {
                            'id': 4,
                            'name': 'ROTACIÓN DER'
                        },
                        {
                            'id': 5,
                            'name': 'ROTACIÓN IZQ'
                        }
                    ]
                },
                {
                    'id': 'hombros',
                    'name': 'hombros',
                    'label': 'HOMBROS',
                    'comment': 'hombrosComment',
                    'options': [{
                            'id': 1,
                            'name': 'ALINEADOS'
                        },
                        {
                            'id': 2,
                            'name': 'ASCENDIDO DER'
                        },
                        {
                            'id': 3,
                            'name': 'ASCENDIDO IZQ'
                        }
                    ]
                },
                {
                    'id': 'tetillas',
                    'name': 'tetillas',
                    'label': 'TETILLAS',
                    'comment': 'tetillasComment',
                    'options': [{
                            'id': 1,
                            'name': 'ALINEADAS'
                        },
                        {
                            'id': 2,
                            'name': 'ASCENDIDA DER'
                        },
                        {
                            'id': 3,
                            'name': 'ASCENDIDA IZQ'
                        }
                    ]
                },
                {
                    'id': 'rodillas',
                    'name': 'rodillas',
                    'label': 'RODILLAS',
                    'comment': 'rodillasComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'GENU VARO'
                        },
                        {
                            'id': 3,
                            'name': 'GENU VALGO'
                        }
                    ]
                },
                {
                    'id': 'cuello',
                    'name': 'cuello',
                    'label': 'CUELLO MASA MUSCULAR',
                    'comment': 'cuelloComment',
                    'options': [{
                            'id': 1,
                            'name': 'BAJA'
                        },
                        {
                            'id': 2,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 3,
                            'name': 'ALTA'
                        }
                    ]
                },
                {
                    'id': 'claviculas',
                    'name': 'claviculas',
                    'label': 'CLAVÍCULAS',
                    'comment': 'claviculasComment',
                    'options': [{
                            'id': 1,
                            'name': 'ALINEADAS'
                        },
                        {
                            'id': 2,
                            'name': 'ASCENDIDA DER'
                        },
                        {
                            'id': 3,
                            'name': 'ASCENDIDA IZQ'
                        }
                    ]
                },
                {
                    'id': 'espilicas',
                    'name': 'espilicas',
                    'label': 'ESP. ILIACAS ANTERO-SUPER',
                    'comment': 'espilicasComment',
                    'options': [{
                            'id': 1,
                            'name': 'ALINEADAS'
                        },
                        {
                            'id': 2,
                            'name': 'ASCENDIDA DER'
                        },
                        {
                            'id': 3,
                            'name': 'ASCENDIDA IZQ'
                        }
                    ]
                },
                {
                    'id': 'pies',
                    'name': 'pies',
                    'label': 'PIES',
                    'comment': 'piesComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'DER EN EVERSIÓN'
                        },
                        {
                            'id': 3,
                            'name': 'IZQ EN EVERSIÓN'
                        },
                        {
                            'id': 4,
                            'name': 'DER EN INVERSIÓN'
                        },
                        {
                            'id': 5,
                            'name': 'IZQ EN INVERSIÓN'
                        }
                    ]
                }
            ],
            'preguntasVistaLateral': [
                {
                    'id': 'cabeza',
                    'name': 'cabeza',
                    'label': 'CABEZA',
                    'comment': 'cabezaComment',
                    'options': [{
                            'id': 1,
                            'name': 'RECTA'
                        },
                        {
                            'id': 2,
                            'name': 'PROTRACCIÓN'
                        },
                        {
                            'id': 3,
                            'name': 'RETRACCIÓN'
                        },
                        {
                            'id': 4,
                            'name': 'FLEXIÓN NORMAL'
                        },
                        {
                            'id': 5,
                            'name': 'EXTENSIÓN NORMAL'
                        }
                    ]
                },
                {
                    'id': 'columna',
                    'name': 'columna',
                    'label': 'COLUMNA VERTEBRAL',
                    'comment': 'columnaComment',
                    'options': [{
                            'id': 1,
                            'name': 'CERVICAL NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'CIFOSIS'
                        },
                        {
                            'id': 3,
                            'name': 'DORSAL NORMAL'
                        },
                        {
                            'id': 4,
                            'name': 'LUMBAR NORMAL'
                        },
                        {
                            'id': 5,
                            'name': 'HIPERCIFOSIS'
                        },
                        {
                            'id': 6,
                            'name': 'HIPERLORDOSI'
                        }
                    ]
                },
                {
                    'id': 'pelvis',
                    'name': 'pelvis',
                    'label': 'PELVIS',
                    'comment': 'pelvisComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'ANTEVERSIÓN'
                        },
                        {
                            'id': 3,
                            'name': 'RETROVERSIÓN'
                        }
                    ]
                },
                {
                    'id': 'pies',
                    'name': 'pies',
                    'label': 'PIES',
                    'comment': 'piesComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'PLANO'
                        }
                    ]
                },
                {
                    'id': 'escapulas',
                    'name': 'escapulas',
                    'label': 'ESCÁPULAS',
                    'comment': 'escapulasComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'PROTRUÍDA DER'
                        },
                        {
                            'id': 3,
                            'name': 'PROTRUÍDA IZQ'
                        },
                        {
                            'id': 4,
                            'name': 'RETRAÍDA DER'
                        },
                        {
                            'id': 5,
                            'name': 'RETRAÍDA IZQ'
                        }
                    ]
                },
                {
                    'id': 'abdomen',
                    'name': 'abdomen',
                    'label': 'ABDOMEN TAMAÑO',
                    'comment': 'abdomenComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'PROMINENTE'
                        }
                    ]
                },
                {
                    'id': 'rodillas',
                    'name': 'rodillas',
                    'label': 'RODILLAS',
                    'comment': 'rodillasComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'GENU FLEXUM'
                        },
                        {
                            'id': 3,
                            'name': 'GENU RECURVATUM'
                        }
                    ]
                }
            ],
            'preguntasVistaPosterior': [
                {
                    'id': 'cabeza',
                    'name': 'cabeza',
                    'label': 'CABEZA',
                    'comment': 'cabezaComment',
                    'options': [{
                            'id': 1,
                            'name': 'RECTA'
                        },
                        {
                            'id': 2,
                            'name': 'INCLINACIÓN DER'
                        },
                        {
                            'id': 3,
                            'name': 'INCLINACIÓN IZQ'
                        },
                        {
                            'id': 4,
                            'name': 'ROTACIÓN IZQ'
                        },
                        {
                            'id': 5,
                            'name': 'ROTACIÓN DER'
                        }
                    ]
                },
                {
                    'id': 'escapulas',
                    'name': 'escapulas',
                    'label': 'ESCÁPULAS',
                    'comment': 'escapulasComment',
                    'options': [{
                            'id': 1,
                            'name': 'ALINEADAS'
                        },
                        {
                            'id': 2,
                            'name': 'ASCENDIDA DER'
                        },
                        {
                            'id': 3,
                            'name': 'ASCENDIDA IZQ'
                        }
                    ]
                },
                {
                    'id': 'columna',
                    'name': 'columna',
                    'label': 'COLUMNA VERTEBRAL',
                    'comment': 'columnaComment',
                    'options': [{
                            'id': 1,
                            'name': 'APOFISIS ALINEADAS'
                        },
                        {
                            'id': 2,
                            'name': 'ESCOLIOSIS'
                        }
                    ]
                },
                {
                    'id': 'gluteos',
                    'name': 'gluteos',
                    'label': 'GLÚTEOS TAMAÑO',
                    'comment': 'gluteosComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'PROMINENTES'
                        },
                        {
                            'id': 3,
                            'name': 'PEQUEÑOS'
                        },
                        {
                            'id': 4,
                            'name': 'PLIEGUES ALINEADOS'
                        },
                        {
                            'id': 5,
                            'name': 'PLIEGUES DESCENDIDOS'
                        }
                    ]
                },
                {
                    'id': 'rodillas',
                    'name': 'rodillas',
                    'label': 'RODILLAS',
                    'comment': 'rodillasComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'GENU VARO'
                        },
                        {
                            'id': 3,
                            'name': 'GENU VALGO'
                        }
                    ]
                },
                {
                    'id': 'hombros',
                    'name': 'hombros',
                    'label': 'HOMBROS',
                    'comment': 'hombrosComment',
                    'options': [{
                            'id': 1,
                            'name': 'ALINEADOS'
                        },
                        {
                            'id': 2,
                            'name': 'ASCENDIDO DER'
                        },
                        {
                            'id': 3,
                            'name': 'ASCENDIDO IZQ'
                        }
                    ]
                },
                {
                    'id': 'codos',
                    'name': 'codos',
                    'label': 'CODOS FLEXIÓN 90 GRADOS',
                    'comment': 'codosComment',
                    'options': [{
                            'id': 1,
                            'name': 'ALINEADOS'
                        },
                        {
                            'id': 2,
                            'name': 'ASCENDIDO DER'
                        },
                        {
                            'id': 3,
                            'name': 'ASCENDIDO IZQ'
                        }
                    ]
                },
                {
                    'id': 'crestas',
                    'name': 'crestas',
                    'label': 'CRESTAS ILIACAS ALINEADAS',
                    'comment': 'crestasComment',
                    'options': [{
                            'id': 1,
                            'name': 'ALINEADOS'
                        },
                        {
                            'id': 2,
                            'name': 'ASCENDIDA DER'
                        },
                        {
                            'id': 3,
                            'name': 'ASCENDIDA IZQ'
                        }
                    ]
                },
                {
                    'id': 'pliegues',
                    'name': 'pliegues',
                    'label': 'PLIEGUES POPLITEOS',
                    'comment': 'plieguesComment',
                    'options': [{
                            'id': 1,
                            'name': 'VISIBLES'
                        },
                        {
                            'id': 2,
                            'name': 'ALINEADOS'
                        },
                        {
                            'id': 3,
                            'name': 'OBLICUOS'
                        }
                    ]
                },
                {
                    'id': 'pies',
                    'name': 'pies',
                    'label': 'PIES',
                    'comment': 'piesComment',
                    'options': [{
                            'id': 1,
                            'name': 'NORMAL'
                        },
                        {
                            'id': 2,
                            'name': 'VARO (SUPINADOR)'
                        },
                        {
                            'id': 3,
                            'name': 'VALGO (PRONADOR)'
                        }
                    ]
                }
            ]
        };
    }

    submitVistaAnterior(form: any) {
        console.log(form.form.value);
    }

    submitVistaLateral(form: any) {
        console.log(form.form.value);
    }

    submitVistaPosterior(form: any) {
        console.log(form.form.value);
    }

    public enviar() {
        console.log(this.formPreguntasVistaAnterior);
    }

}
