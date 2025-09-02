import { generarID } from "../utils/GeneradorID";
import { Partido } from "./Partido";
export class Torneo {
    id:number;
    nombre:string;
    private partidos: Partido[] =[]
    constructor( nombre:string, partidos:Partido[] = []){
        this.nombre=nombre;
        this.id= generarID();
        this.partidos=partidos
    }
     programarPartidos(partido: Partido) {
        if (!this.partidos.some(p => p.id === partido.id)) {
        this.partidos.push(partido);
    } else {
        throw new Error("Ya existe un partido con este ID");
    }
    }
    listarPartidos(): Partido[] {
        console.log(this.partidos)
        return this.partidos
    }
 
    buscarPartido(idBuscado: number): Partido | undefined {
        return this.partidos.find(partido =>
            partido.id === idBuscado
        );
    }
}
