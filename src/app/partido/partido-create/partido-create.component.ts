import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {DatePipe} from '@angular/common';

import { PartidoService } from '../partido.service';
import { Partido } from '../partido';
import { Equipo } from '../../equipo/equipo';

@Component({
  selector: 'app-partido-create',
  templateUrl: './partido-create.component.html',
  styleUrls: ['./partido-create.component.css'],
  providers: [DatePipe]
})
export class PartidoCreateComponent implements OnInit {
constructor(
        private partidoService: PartidoService,
        private toastrService: ToastrService,
        private router: Router
  ) { }
  
  partido:Partido;
  
  equipos:Equipo[];
  
  fecha: Date;

  cancelCreation(): void {
        this.toastrService.warning('The partido wasn\'t created', 'Partido creation');
        this.router.navigate(['/partidos/list']);
    }

    createPartido(): Partido{
        this.partidoService.createPartido(this.partido)
            .subscribe(partido => {
                this.partido.id = partido.id;
                this.partido.fecha = partido.fecha;
                this.partido.puntaje = partido.puntaje;
                this.router.navigate(['/partidos/' + partido.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.partido;
    }

    ngOnInit() {
    partido:Partido;
        this.partido = new Partido();
    }
}