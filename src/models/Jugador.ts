export class Jugador {
    id: number;     
    nombre: string;
    edad: number;
    posicion?: string;       

    constructor(id: number, nombre: string, edad: number, posicion?: string) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.posicion = posicion;
    }

    toString(): string {
        return `Jugador ${this.id}: ${this.nombre}, ${this.edad} años` +
               (this.posicion ? `, juega como ${this.posicion}` : "");
    }
}
