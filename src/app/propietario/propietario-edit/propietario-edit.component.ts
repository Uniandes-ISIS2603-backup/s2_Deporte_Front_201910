import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { PropietarioService } from '../propietario.service';
import { PropietarioDetail } from '../propietario-detail';

@Component({
    selector: 'app-propietario-edit',
    templateUrl: './propietario-edit.component.html',
    styleUrls: ['./propietario-edit.component.css']
})
export class PropietarioEditComponent implements OnInit {

    constructor(
        private propietarioService: PropietarioService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    /**
     * Propietario que se va a editar
     */
    propietario:PropietarioDetail;

    /**
     * Id del propietario que se va a editar
     */
    id:number;

    /**
     * Metodo que obtiene el propietario llamando al servicio
     */
    getPropietario(){
        this.propietarioService.getPropietarioDetail(this.id).subscribe(propietario => {
            
            this.propietario = propietario;
        });
    }

    /**
     * Metodo que llama el servicio para efectuar la edicion
     */
    updatePropietario(): void {
        this.propietarioService.updatePropietario(this.propietario)
            .subscribe(() => {
                this.router.navigate(['/propietarios/' + this.id]);
                this.toastrService.success("El propietario se edito correctamente", 'Propietario edition');
            });
    }

    /**
     * Metodo que se llama cuando se cancela la edicion
     */
    cancelEdition(): void {
        this.toastrService.warning('El propietario no fue editado', 'Propietario edition');
        this.router.navigate(['/propietario/list']);
    }

    /**
     * Metodo que se llama cuando se muestra el HTML
     */
    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getPropietario();
    }
}