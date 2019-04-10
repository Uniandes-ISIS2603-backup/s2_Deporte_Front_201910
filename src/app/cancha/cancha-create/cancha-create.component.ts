    
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { CanchaService } from '../cancha.service';
import { Cancha } from '../cancha';
import { Propietario } from '../../propietario/propietario';


@Component({
    selector: 'app-cancha-create',
    templateUrl: './cancha-create.component.html',
    styleUrls: ['./cancha-create.component.css'],
    providers: [DatePipe]
})
export class CanchaCreateComponent implements OnInit{

    constructor(
        private canchaService: CanchaService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    cancha:Cancha;

    propietario:Propietario;

    cancelCreation(): void {
        this.toastrService.warning('The book wasn\'t created', 'Book creation');
        this.router.navigate(['/books/list']);
    }

    createCancha(): Cancha {
        this.canchaService.createCancha(this.cancha)
            .subscribe(cancha => {
                this.cancha.id = cancha.id;
                this.router.navigate(['/books/' + cancha.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.cancha;
    }

    ngOnInit() {
    cancha:Cancha;
        this.cancha = new Cancha();
    }
}