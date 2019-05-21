import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  
   /** The output which tells the parent component
    * that the user no longer wants to create an post
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new post
    */
    @Output() create = new EventEmitter();

  cancelCreation(): void {
            this.cancel.emit();

    }

    createPartido(): Partido{
       this.partidoService.createPartido(this.partido)
        .subscribe((post) => {
            this.partido = post;
            this.create.emit();
            this.toastrService.success("The partido was created", "Partido creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.partido;
    }

    ngOnInit() {
        this.partido = new Partido();
    }
}