 import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an campeonato
    */
    @Output() cancel = new EventEmitter();
    
      /**
    * The output which tells the parent component
    * that the user created a new campeonato
    */
    @Output() create = new EventEmitter();
    
  cancelCreation(): void {
        this.toastrService.warning('The book wasn\'t created', 'Book creation');
        this.router.navigate(['/books/list']);
            this.cancel.emit();

    }

   /**
    * Creates a new campeonato
    */
   createEquipo(): Equipo {
    this.equipoService.createEquipo(this.equipo)
        .subscribe((campeonato) => {
            this.equipo = campeonato;
            this.create.emit();
            this.toastrService.success("The campeonato was created", "Campeonato creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.equipo;
}

     /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.equipo = new Equipo();
    }


}