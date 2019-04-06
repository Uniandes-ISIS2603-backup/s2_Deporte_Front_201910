import { Propietario } from './propietario';
import { Cancha } from '../cancha/cancha';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class PropietarioDetail extends Propietario {


    /**
     * The editorial's books
     */
    canchas: Cancha[];
}