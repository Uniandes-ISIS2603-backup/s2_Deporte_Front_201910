import { Cancha } from "../cancha/cancha";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Agenda {
    /**
    * El id de la agenda
    */
    id: number;
    
    /**
     * El año de la agenda
     */

    anio: number;
    
    /**
     * El mes de la agenda
     */
    mes: number;

    dia: number;

    mesString: string;

    cancha: Cancha;
}
