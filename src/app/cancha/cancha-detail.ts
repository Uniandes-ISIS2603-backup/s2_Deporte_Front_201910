import { Author } from '../author/author';
import { Book } from './cancha';


/**
* This class represents a book of the BookStore. 
* It contains all the information relevant to the book.
*/
export class BookDetail extends Book {
   
    propietario: Propierario;
    
    reviews: Review[];
}