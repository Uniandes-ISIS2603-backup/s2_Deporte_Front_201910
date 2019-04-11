    
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

    cancha:Cancha;

    propietario:Propietario;

    id_p:number;

    cancelCreation(): void {
        this.toastrService.warning('The book wasn\'t created', 'Book creation');
        this.router.navigate(['/canchas/list']);
    }

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

    getPropietario(){
        this.porpietarioService.getPropietarioDetail(this.id_p)
            .subscribe(propietario => {
                this.propietario = propietario;
            })
    }

    ngOnInit() {
        this.id_p = +this.route.snapshot.paramMap.get('id');
    cancha:Cancha;
        this.cancha = new Cancha();
        this.cancha.reservada=false;
        this.getPropietario();
    }
    
}