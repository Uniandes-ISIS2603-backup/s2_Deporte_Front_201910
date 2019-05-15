import { Agenda } from "../agenda/agenda";

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
export class Franja{
    
    id: number;
    horaInicio: number;
    horaFin: number;
    dia: number;
    duracionHoras: number;
    ocupada: boolean;
    idReserva: number;
    agenda: Agenda;
   
    setDia(d:number){
        this.dia = d;
    }
    
}


