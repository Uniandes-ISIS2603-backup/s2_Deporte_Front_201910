import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {Router, ActivatedRoute} from '@angular/router';
import {EquipoService} from '../equipo.service';
import {EquipoDetail} from '../equipo-detail';

@Component({
  selector: 'app-equipo-edit',
  templateUrl: './equipo-edit.component.html',
  styleUrls: ['./equipo-edit.component.css']
})
export class EquipoEditComponent implements OnInit {

 constructor(
        private equipoService: EquipoService,
        private toastrService: ToastrService,
         private router: Router,
        private route: ActivatedRoute
    ) {}

    equipo:EquipoDetail;
    id:number;

  getEquipo(){
        this.equipoService.getEquipoDetail(this.id).subscribe(camp => {
            
            this.equipo = camp;
        });
    }
    
      updateEquipo(): void {
        this.equipoService.updateEquipo(this.equipo)
            .subscribe(() => {
                this.router.navigate(['/equipos/list/']);
                this.toastrService.success("El equipo se edito correctamente", 'Equipo edition');
            });
    }
    
     cancelEdition(): void {
        this.toastrService.warning('El equipo no fue editado', 'Equipo edition');
        this.router.navigate(['/equipos/list']);
    }
    
     ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getEquipo();
    }
  

}