import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { AmistosoService } from '../amistoso.service';

import { AmistosoDetail } from '../amistoso-detail';


/**
 * Componente para editar un amistoso
 */
@Component({
    selector: 'app-amistoso-update',
    templateUrl: './amistoso-update.component.html'

})
export class AmistosoUpdateComponent implements OnInit {

    /**
     * Constructor del componente
     */
    constructor(
        private amistosoService: AmistosoService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    /**
     * Amistoso y su id el cual se busca editar
     */
    amistoso:AmistosoDetail;

    id:number;

  /**
   * Consigue el detail del amistoso
   */
    getAmistoso(){
        this.amistosoService.getAmistosoDetail(this.id).subscribe(amistoso => {
            
            this.amistoso = amistoso;
        });
    }

    /**
     * El metodo que cambia el amistoso
     */
    updateAmistoso(): void {
        this.amistosoService.updateAmistoso(this.amistoso)
            .subscribe(() => {
                this.router.navigate(['/amistosos/' + this.id]);
                this.toastrService.success("La amistoso se edito correctamente", 'amistoso edition');
            });
    }
    
    /**
     * Metodo que avisa si no se edito el amistoso
     */
    cancelEdition(): void {
        this.toastrService.warning('La amistoso no fue editada', 'amistoso edition');
        this.router.navigate(['/amistosos/list']);
    }

  /**
   * Inicializacion
   */
   ngOnInit() {
       this.id = +this.route.snapshot.paramMap.get('id');
       this.getAmistoso();
   }
}