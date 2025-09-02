import { Deporte } from "./Deporte";
import type { Equipo } from "./Equipo";

export class Futbol extends Deporte{
    constructor(){
        super("Equipo de Futbol", 11)
    }
    validar(equipo: Equipo): Boolean {
        return equipo.listarIntegrantes().length <= this.maxPorEquipo
    }
}