import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

import { EntrenamientoService } from '../entrenamiento.service';
import { Entrenamiento } from '../entrenamiento';

@Component({
  selector: 'app-entrenamientocreate',
  templateUrl: './entrenamiento-create.component.html',
  styleUrls: ['./entrenamiento-create.component.css'],
  providers: [DatePipe]
})
export class EntrenamientoCreateComponent implements OnInit {
constructor(
        private entrenamientoService: EntrenamientoService,
        private toastrService: ToastrService,
        private router: Router
  ) { }
  
  entrenamiento:Entrenamiento;
  
  fecha: Date;

  cancelCreation(): void {
        this.toastrService.warning('The entrenamiento wasn\'t created', 'entrenamiento creation');
        this.router.navigate(['/entrenamientos/list']);
    }

    createEntrenamiento(): Entrenamiento{
        this.entrenamientoService.createEntrenamiento(this.entrenamiento)
            .subscribe(entrenamiento=> {
                this.entrenamiento.id = entrenamiento.id;
                this.entrenamiento.fecha = entrenamiento.fecha;
                this.router.navigate(['/entrenamientos/' + entrenamiento.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.entrenamiento;
    }

    ngOnInit() {
    entrenamiento: Entrenamiento;
        this.entrenamiento = new Entrenamiento();
    }
}