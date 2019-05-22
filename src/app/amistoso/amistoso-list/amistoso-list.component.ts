import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
import { Amistoso } from '../amistoso';
import { AmistosoDetail } from '../amistoso-detail';
import { AmistosoService } from '../amistoso.service';

/**
 * El componente de la lista de amistosos
 */
@Component({
  selector: 'app-amistoso-list',
  templateUrl: './amistoso-list.component.html'
})
export class AmistosoListComponent implements OnInit {

  /**
   * Constructor delcomponent
   * @param amistosoService el servicio del amistoso
   */
  constructor(private amistosoService: AmistosoService,private route: ActivatedRoute) { }
  /**
   * Atributos sobre el amistoso seleccionado
   */
  amistoso_id: number;
  selectedAmistoso: AmistosoDetail;
  /**
   * La lista de amistosos a mostrar
   */
  amistosos: Amistoso[];

  /**
   * Metodo que le pide al servicio que le actualice la lista de amistosos
   */
  getAmistosos(): void {
    this.amistosoService.getAmistosos().subscribe(amistosos => this.amistosos = amistosos);
  }

  onSelected(amistoso_id: number): void {
  this.amistoso_id = amistoso_id;
  this.selectedAmistoso = new AmistosoDetail();
  this.amistosoService.getAmistosoDetail(amistoso_id).subscribe(o => this.selectedAmistoso = o);
  }



  /**
   * Este es el metodo que se llama cuando se inicia el componente
   */
  ngOnInit() {
  this.getAmistosos();
  }

}