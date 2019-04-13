import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { EntrenamientoService } from '../entrenamiento.service';

import { EntrenamientoDetail } from '../entrenamiento-detail';


/**
 * Componente para editar un entrenamiento
 */
@Component({
    selector: 'app-entrenamiento-update',
    templateUrl: './entrenamiento-update.component.html'

})
export class EntrenamientoUpdateComponent implements OnInit {

    /**
     * Constructor del componente
     */
    constructor(
        private entrenamientoService: EntrenamientoService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    /**
     * entrenamiento y su id el cual se busca editar
     */
    entrenamiento:EntrenamientoDetail;

    id:number;

  /**
   * Consigue el detail del entrenamiento
   */
    getentrenamiento(){
        this.entrenamientoService.getEntrenamientoDetail(this.id).subscribe(entrenamiento => {
            
            this.entrenamiento = entrenamiento;
        });
    }

    /**
     * El metodo que cambia el entrenamiento
     */
    updateentrenamiento(): void {
        this.entrenamientoService.updateEntrenamiento(this.entrenamiento)
            .subscribe(() => {
                this.router.navigate(['/entrenamientos/' + this.id]);
                this.toastrService.success("La entrenamiento se edito correctamente", 'entrenamiento edition');
            });
    }
    
    /**
     * Metodo que avisa si no se edito el entrenamiento
     */
    cancelEdition(): void {
        this.toastrService.warning('La entrenamiento no fue editada', 'entrenamiento edition');
        this.router.navigate(['/entrenamientos/list']);
    }

  /**
   * Inicializacion
   */
   ngOnInit() {
       this.id = +this.route.snapshot.paramMap.get('id');
       this.getentrenamiento();
   }
}