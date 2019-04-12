import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { CanchaService } from '../cancha.service';
import { PropietarioService } from '../../propietario/propietario.service';
import { CanchaDetail } from '../cancha-detail';
import { Propietario } from '../../propietario/propietario';


@Component({
    selector: 'app-cancha-edit',
    templateUrl: './cancha-edit.component.html',
    styleUrls: ['./cancha-edit.component.css']
})
export class CanchaEditComponent implements OnInit {

    constructor(
        private canchaService: CanchaService,
        private propietarioService: PropietarioService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    /**
     * Cancha que se va a mostrar
     */
    cancha:CanchaDetail;

    /**
     * Id de la cancha que se va a mostrar
     */
    id:number;

    /**
     * Propietario dueño de la cancha
     */
    propietario:Propietario;

    /**
     * Metodo en el que se llama al servicio para encontrar la cancha
     */
    getCancha(){
        this.canchaService.getCanchaDetail(this.id).subscribe(cancha => {
            
            this.cancha = cancha;
            this.propietario = cancha.propietario;
        });
    }

    /**
     * Metodo que llama al servicio para editar una cancha
     */
    updateCancha(): void {
        this.canchaService.updateCancha(this.cancha)
            .subscribe(() => {
                this.router.navigate(['/canchas/' + this.id]);
                this.toastrService.success("La cancha se edito correctamente", 'Cancha edition');
            });
    }
    
    /**
     * Metodo que se llama cuando se cancela la edicion
     */
    cancelEdition(): void {
        this.toastrService.warning('La cancha no fue editada', 'Cancha edition');
        this.router.navigate(['/canchas/list']);
    }

    /**
     * Metodo que se llama al mostrar el HTML
     */
   ngOnInit() {
       this.id = +this.route.snapshot.paramMap.get('id');
       this.getCancha();
   }
}