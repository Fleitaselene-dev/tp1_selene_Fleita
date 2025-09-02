import { Deporte } from "./Deporte";
import type { Equipo } from "./Equipo";
export class Basquet extends Deporte {

    constructor() {
        super("Basquet", 5);
    }
 validar(equipo: Equipo): Boolean {
         return equipo.listarIntegrantes().length <= this.maxPorEquipo;
    }

    
}
