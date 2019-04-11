import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {EquipoService} from '../equipo.service';
import {Equipo} from '../equipo';
@Component({
  selector: 'app-equipo-create',
  templateUrl: './equipo-create.component.html',
  styleUrls: ['./equipo-create.component.css']
})
export class EquipoCreateComponent implements OnInit {

  constructor(private equipoService: EquipoService,
              private toastrService: ToastrService) { }

  equipo:Equipo;

  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();
  
  createEquipo(): Equipo{
    console.log(this.equipo);
    this.equipoService.createEquipo(this.equipo)
      .subscribe((equipo) => {
        this.equipo = equipo;
        this.create.emit();
        this.toastrService.success("The equipo was created", "equipo creation");
      });
    return this.equipo;
  }

  cancelCreation(): void {
        this.cancel.emit();
  }

  ngOnInit() 
  {
     this.equipo = new Equipo();
  }


}