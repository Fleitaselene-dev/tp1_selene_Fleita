import { generarID } from "../utils/GeneradorID";
import { Equipo } from "./Equipo";
import type { Deporte } from "./Deporte";
export class Partido{
    id: number;
   local : Equipo;
    visitante : Equipo;
    deporte:Deporte;
    resultado? : string
    constructor(local: Equipo, visitante:Equipo, deporte:Deporte, resultado?:string){
        this.local=local;
        this.visitante=visitante;
        this.id=generarID();
        this.deporte=deporte;
        this.resultado=resultado
        //Validamos por nombre que los equipos no sean los mismos
        if(local.nombre === visitante.nombre){
   throw new Error("El equipo local no puede ser el mismo que el visitante");
}

    }
   
    jugar(){
      if (!this.deporte.validar(this.local) || !this.deporte.validar(this.visitante)) {
            throw new Error("No se puede jugar el partido: uno de los equipos no cumple con las reglas del deporte");
        }
    }
    toString() {
        if (!this.resultado) {
            return `Partido entre ${this.local.nombre} y ${this.visitante.nombre} de ${this.deporte.nombre} aún no jugado.`;
        }
        return `Resultado del partido: ${this.local.nombre} ${this.resultado} ${this.visitante.nombre} (${this.deporte.nombre})`;
    }

}

