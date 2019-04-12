

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntrenamientoService } from '../entrenamiento.service';
import { Entrenamiento } from '../entrenamiento';
import { EntrenamientoDetail } from '../entrenamiento-detail';

@Component({
  selector: 'app-entrenamiento-detail',
  templateUrl: './entrenamiento-detail.component.html',
})
export class EntrenamientoDetailComponent implements OnInit {

  /**
  * el constructro del componente
  */
  constructor(
    private entrenamientoService: EntrenamientoService,
    private route: ActivatedRoute
  ) { }

  /**
  * la entrenamiento en detalle que se quiere mostrar
  */
  @Input() entrenamientoDetail: EntrenamientoDetail;



  /**
  * El id de la entrenamiento
  */
  entrenamiento_id: number;

  /**
  * Metodo que le pide al servicio el detail de entrenamiento
  */
  getentrenamientoDetail(): void {
    this.entrenamientoService.getEntrenamientoDetail(this.entrenamiento_id)
      .subscribe(entrenamientoDetail => {
        this.entrenamientoDetail = entrenamientoDetail
      });
  }

  /**
  * metodo que inicializa el componente, en este caso se crea vacio la entrenamiento en detalle
  */
  ngOnInit() {
    this.entrenamiento_id = +this.route.snapshot.paramMap.get('id');
    if (this.entrenamiento_id) {
      this.entrenamientoDetail = new EntrenamientoDetail();
      this.getentrenamientoDetail();
    }

  }
}