import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo';
import { Cliente } from '../../cliente/cliente';
@Component({
  selector: 'app-equipo-create',
  templateUrl: './equipo-create.component.html',
  styleUrls: ['./equipo-create.component.css']
})
export class EquipoCreateComponent implements OnInit {

  constructor(private equipoService: EquipoService,
              private toastrService: ToastrService,
              private router: Router) { }

  equipo:Equipo;

  representante: Cliente;
  
  cancelCreation(): void {
        this.toastrService.warning('The book wasn\'t created', 'Book creation');
        this.router.navigate(['/books/list']);
    }

    createEquipo(): Equipo {
        this.equipoService.createEquipo(this.equipo)
            .subscribe(equipo => {
                this.equipo.id = equipo.id;
                this.equipo.nombre = equipo.nombre;
                this.equipo.representante = equipo.representante;
                this.router.navigate(['/equipos/' + equipo.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.equipo;
    }

    ngOnInit() {
        equipo:Equipo;
        this.equipo = new Equipo();
    }


}