export class Torneo {
    id:number;
    nombre:string;
    private partidos: Partido[] =[]
    constructor(id:number, nombre:string, partidos:Partido[] = []){
        this.nombre=nombre;
        this.id=id;
        this.partidos=partidos
    }
}