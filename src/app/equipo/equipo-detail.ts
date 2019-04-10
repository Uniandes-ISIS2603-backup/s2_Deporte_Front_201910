import {Equipo} from './equipo';
import {Cliente} from '../cliente/cliente';
import {Partido} from '../partido/partido';
//import {Entrenamiento} from '../entrenamiento/entrenamiemto';
export class EquipoDetail extends Equipo
{
  jugadores:Cliente[];
  partidos:Partido[];
  //entrenamientos:Entrenamiento[];
}