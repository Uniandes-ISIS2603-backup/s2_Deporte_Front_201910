import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {PartidoService} from '../partido.service';
import {Partido} from '../partido';

@Component({
  selector: 'app-partido-create',
  templateUrl: './partido-create.component.html',
  styleUrls: ['./partido-create.component.css']
})
export class PartidoCreateComponent implements OnInit {
constructor(private partidoService: PartidoService,
              private toastrService: ToastrService) { }

  partido:Partido;

  @Output() cancel = new EventEmitter();

  @Output() create = new EventEmitter();
  
  createPartido(): Partido{
    console.log(this.partido);
    this.partidoService.createPartido(this.partido)
      .subscribe((partido) => {
        this.partido = partido;
        this.create.emit();
        this.toastrService.success("The equipo was created", "equipo creation");
      });
    return this.partido;
  }

  cancelCreation(): void {
        this.cancel.emit();
  }

  ngOnInit() 
  {
     this.partido = new Partido();
  }
}