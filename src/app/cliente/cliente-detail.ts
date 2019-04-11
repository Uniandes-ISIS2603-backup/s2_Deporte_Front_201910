import {Cliente} from './cliente';
import {Equipo} from '../equipo/equipo';
//import {Campeonato} from '../campeonato/campeonato';
//import {Post} from '../post/post';
export class ClienteDetail extends Cliente 
{
  equipos:Equipo[];
  //campeonatos: Campeonato[];
  //favoritos: Post[];
}