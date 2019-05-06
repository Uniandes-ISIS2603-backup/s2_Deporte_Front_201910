    
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { CanchaService } from '../cancha.service';
import { Cancha } from '../cancha';
import { Propietario } from '../../propietario/propietario';
import { PropietarioService } from '../../propietario/propietario.service';


@Component({
    selector: 'app-cancha-create',
    templateUrl: './cancha-create.component.html',
    styleUrls: ['./cancha-create.component.css'],
    providers: [DatePipe]
})
export class CanchaCreateComponent implements OnInit{

    constructor(
        private canchaService: CanchaService,
        private porpietarioService: PropietarioService,
        private route: ActivatedRoute,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
     * Cancha que se va a crear
     */
    cancha:Cancha;

    /**
     * Propietario de la cancha que se va a crear
     */
    propietario:Propietario;

    /**
     * Id del propietario que se va a crear
     */
    id_p:number;

    /**
     * Metodo que se llama cuando se cancela la creacion
     */
    cancelCreation(): void {
        this.toastrService.warning('The book wasn\'t created', 'Book creation');
        this.router.navigate(['/canchas/list']);
    }

    /**
     * Metodo en el que se crea la cancha llamando al servicio
     */
    createCancha(): Cancha {
        this.cancha.propietario=this.propietario;
        console.log(this.cancha);
        this.canchaService.createCancha(this.cancha)
            .subscribe(cancha => {
                this.cancha.id = cancha.id;
                this.router.navigate(['/canchas/' + cancha.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.cancha;
    }

    /**
     * Se busca al propietario dueño da la nueva cancha
     */
    getPropietario(){
        this.porpietarioService.getPropietarioDetail(this.id_p)
            .subscribe(propietario => {
                this.propietario = propietario;
            })
    }

    /**
     * Metodo que se llama al mostrar el html
     */
    ngOnInit() {
        this.id_p = +this.route.snapshot.paramMap.get('id');
    cancha:Cancha;
        this.cancha = new Cancha();
        this.cancha.reservada=false;
        this.getPropietario();
    }
    
}