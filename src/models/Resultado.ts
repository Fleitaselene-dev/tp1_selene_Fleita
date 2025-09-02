export class Resultado{
    golesLocal : number;
    golesVisitante : number;
    constructor(golesLocal:number, golesVisitante:number){
        this.golesLocal=golesLocal;
        this.golesVisitante=golesVisitante
    }
    toString(){
        return `Goles hechos por el Equipo Local $${this.golesLocal}, Goles hechos por el equipo Visitante $${this.golesVisitante}`
    }

}