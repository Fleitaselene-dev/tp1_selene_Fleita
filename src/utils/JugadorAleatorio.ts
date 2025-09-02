import { basketballPositions, nombres, posicionesFutbol } from "./ArrayJugadores";

export interface Usuario {
    nombre: string;
    edad: number;
    posicion: string;
    deporte: 'fútbol' | 'Basquet';
}

export function generarUsuarioAleatorio(deporte: 'fútbol' | 'Basquet'): Usuario {
    if (deporte !== 'fútbol' && deporte !== 'Basquet') {
        throw new Error('El deporte debe ser "fútbol" o "Basquet"');
    }

    // Selecciona nombres al azar 
    const nombre = nombres[Math.floor(Math.random() * nombres.length)];

    // Generar edad 
    const edad = Math.floor(Math.random() * 23) + 18;

    // Seleccionar posición según el deporte especificado
    let posicion: string;
    if (deporte === 'fútbol') {
        posicion = posicionesFutbol[Math.floor(Math.random() * posicionesFutbol.length)];
    } else {
        posicion = basketballPositions[Math.floor(Math.random() * basketballPositions.length)];
    }

    return {
        nombre,
        edad,
        posicion,
        deporte
    };
}

export function generarUsuariosAleatorios(cantidad: number, deporte: 'fútbol' | 'Basquet'): Usuario[] {
   
    if (deporte !== 'fútbol' && deporte !== 'Basquet') {
        throw new Error('El deporte debe ser "fútbol" o "Basquet"');
    }

    const usuarios: Usuario[] = [];

    for (let i = 0; i < cantidad; i++) {
        usuarios.push(generarUsuarioAleatorio(deporte));
    }

    return usuarios;
}