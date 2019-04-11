import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Equipo} from '../../equipo/equipo';
import {EquipoService} from '../../equipo/equipo.service';

@Component({
  selector: 'app-equipo-list',
  templateUrl: './equipo-list.component.html',
  styleUrls: ['./equipo-list.component.css']
})
export class EquipoListComponent implements OnInit {
  @Input() equipos: Equipo[];
  constructor(private equipoService: EquipoService, private route: ActivatedRoute) { }
  allequipos: String = 'no';
  getEquipos(): void {
        this.equipoService.getEquipos()
            .subscribe(equipos => {
                this.equipos = equipos;
            });
  }
  ngOnInit() {
      this.getEquipos();
  }

}