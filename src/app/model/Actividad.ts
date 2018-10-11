export class Actividad {
    public realizaActividad: number;
    public tipoActividad: number;
    public diasSemana: number;
    public horasDia: number;
    public observaciones: string;

    constructor(realizaActividad: number, tipoActividad: number, diasSemana: number, horasDia: number, observaciones: string) {
        this.realizaActividad = realizaActividad;
        this.tipoActividad = tipoActividad;
        this.diasSemana = diasSemana;
        this.horasDia = horasDia;
        this.observaciones = observaciones;
    }
}
