import { Jugador } from "./models/Jugador";
import { Equipo } from "./models/Equipo";
import { Futbol } from "./models/Futbol";
import { Basquet } from "./models/Basquet";
import { Partido } from "./models/Partido";
import { generarUsuarioAleatorio } from "./utils/JugadorAleatorio";

// CREAR JUGADORES 
function crearJugadores(cantidad: number, deporte: 'fútbol' | 'Basquet'): Jugador[] {
    return Array.from({ length: cantidad }, () => {
        const u = generarUsuarioAleatorio(deporte);
        return new Jugador(u.nombre, u.edad, u.posicion);
    });
}

//  CREAR EQUIPOS 
// CREAR EQUIPOS
const equipoFutbol = new Equipo('Ferrari', crearJugadores(11, "fútbol"));
const equipoBasquet = new Equipo('Red Bull', crearJugadores(5, "Basquet"));


//  CREAR DEPORTES
const futbol = new Futbol();
const basquet = new Basquet();

// VALIDAR EQUIPOS
console.log('Fútbol válido:', futbol.validar(equipoFutbol));
console.log('Básquet válido:', basquet.validar(equipoBasquet));


// MOSTRAR JUGADORES 
console.log('Equipo de Fútbol:', equipoFutbol.listarIntegrantes());
console.log('Equipo de Básquet:', equipoBasquet.listarIntegrantes());

// CREAR Y JUGAR PARTIDOS 
const partidoFutbol = new Partido(equipoFutbol, equipoFutbol, futbol);
partidoFutbol.jugar();
console.log('Resultado Fútbol:', partidoFutbol.resultado);

const partidoBasquet = new Partido(equipoBasquet, equipoBasquet, basquet);
partidoBasquet.jugar();
console.log('Resultado Básquet:', partidoBasquet.resultado);
