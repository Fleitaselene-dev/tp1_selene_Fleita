let ultimoId = 0;

export function generarID(): number {
    ultimoId++;
    return ultimoId;
}
