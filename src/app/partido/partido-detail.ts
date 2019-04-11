import {Partido} from './partido';
import {Equipo} from '../equipo/equipo';
export class PartidoDetail extends Partido
{
  participantes:Equipo[];
}