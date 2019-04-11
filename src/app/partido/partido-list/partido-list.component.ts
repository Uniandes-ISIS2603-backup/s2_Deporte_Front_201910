import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Partido} from '../../partido/partido';
import {PartidoService} from '../../partido/partido.service';

@Component({
  selector: 'app-partido-list',
  templateUrl: './partido-list.component.html',
  styleUrls: ['./partido-list.component.css'],
  
})
export class PartidoListComponent implements OnInit {
    @Input() partidos: Partido[];
  constructor(
        private partidoService: PartidoService,
        private route:ActivatedRoute
  ) { }
    allpartidos: String = 'no';
    getPartidos(): void {
        this.partidoService.getPartidos()
            .subscribe(partidos => {
                this.partidos = partidos;
            });          
    }
    ngOnInit() {
        this.getPartidos();
    }

}