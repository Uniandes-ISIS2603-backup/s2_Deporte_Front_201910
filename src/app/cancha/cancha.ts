import { Propietario } from '../propietario/propietario';

export class Cancha {

    id: number;


    zona: string;


    ciudad: string;

    direccion: string;

    caracteristicas: string;

    alquilada: boolean;

    tipoCancha: string;

    contactos: number[];

    propietario:Propietario;
}