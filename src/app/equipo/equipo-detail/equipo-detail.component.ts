import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../equipo.service';
import { EquipoDetail } from '../equipo-detail';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {
  @Input() equipoDetail: EquipoDetail;

  constructor(private route: ActivatedRoute,
               private equipoService: EquipoService) { }

  equipo_id: number;

  getPartidoDetail(): void {
        this.equipoService.getEquipoDetail(this.equipo_id)
            .subscribe(equipoDetail => {
                this.equipoDetail = equipoDetail
            });
    }

  ngOnInit() 
  {
    this.equipo_id = +this.route.snapshot.paramMap.get('id');
    if (this.equipo_id)
    {
      this.equipoDetail = new EquipoDetail();
      this.getPartidoDetail();
    }
  }
}