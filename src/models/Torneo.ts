import { Partido } from "./Partido";
export class Torneo {
    id:number;
    nombre:string;
    private partidos: Partido[] =[]
    constructor(id:number, nombre:string, partidos:Partido[] = []){
        this.nombre=nombre;
        this.id=id;
        this.partidos=partidos
    }
     programarPartidos(partido: Partido) {
        if (!this.partidos.some(partido => partido.id === partido.id)) {
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