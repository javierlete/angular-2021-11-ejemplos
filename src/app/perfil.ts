export interface Perfil {
    nombre: string;
    apellidos: string;
    dni: string;
    direccion: {
        calle: string;
        numero: number;
        cp: string;
    }
}