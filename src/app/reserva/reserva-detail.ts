import {Reserva} from "./reserva";
export class ReservaDetail extends Reserva{

   /**
   * direccion del lugar de la Reserva
   */
  direccion:String
  /**
   * duracion de la reserva
   */
  duracion: number;

  /**
   * costo de la reserva
   */
  costo: number;
}