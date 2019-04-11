import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Entrenamiento } from '../entrenamiento';
import { EntrenamientoDetail } from '../entrenamiento-detail';
import { EntrenamientoService } from '../entrenamiento.service';

/**
 * El componente de la lista de entrenamientos
 */
@Component({
  selector: 'app-entrenamiento-list',
  templateUrl: './entrenamiento-list.component.html'
})
export class EntrenamientoListComponent implements OnInit {

  /**
   * Constructor delcomponent
   * @param entrenamientoService el servicio del entrenamiento
   */
  constructor(private entrenamientoService: EntrenamientoService) { }
  /**
   * Atributos sobre la entrenamiento seleccionado
   */
  entrenamiento_id: number;
  selectedEntrenamiento: EntrenamientoDetail;
  /**
   * La lista de entrenamientos 
   */
  entrenamientos: Entrenamiento[];

  /**
   * Metodo que le pide al servicio que le actualice la lista de entrenamientos
   */
  getentrenamientos(): void {
    this.entrenamientoService.getEntrenamientos().subscribe(entrenamientos => this.entrenamientos = entrenamientos);
  }

  onSelected(entrenamiento_id: number): void {
  this.entrenamiento_id = entrenamiento_id;
  this.selectedEntrenamiento= new EntrenamientoDetail();
  this.entrenamientoService.getEntrenamientoDetail(entrenamiento_id).subscribe(o => this.selectedEntrenamiento = o);
  }



  /**
   * Este es el metodo que se llama cuando se inicia el componente
   */
  ngOnInit() {
  this.getentrenamientos();
  }

}