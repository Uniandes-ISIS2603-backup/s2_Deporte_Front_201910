import { Propietario } from '../propietario/propietario';

export class Cancha {

    id: number;


    zona: string;


    ciudad: string;

    direccion: string;

    caracteristicas: string;

    reservada: boolean;

    tipoCancha: string;

    contacto: number;

    propietario:Propietario;

    imagen:string;

    nombre:string;
}