import type { ICompetidor } from "../interfaces/ICompetidor";

export class Equipo implements ICompetidor {
    nombre: string;
    private jugadores : string[]= [];
     constructor(nombre: string) {
        this.nombre = nombre;
    }

    
    agregarJugador(nombre: string): void {
        this.jugadores.push(nombre);
    }

    
    listarIntegrantes(): string[] {
        return [...this.jugadores];
    }

    toString(): string {
        return ` El equipo ${this.nombre} tiene esta cantidad  ${this.cantidad} de integrantes`;
    }

    
    get cantidad(): number {
        return this.jugadores.length;
    }
}
