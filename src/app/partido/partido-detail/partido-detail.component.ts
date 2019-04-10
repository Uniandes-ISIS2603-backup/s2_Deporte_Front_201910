import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartidoService } from '../partido.service';
import { PartidoDetail } from '../partido-detail';


@Component({
  selector: 'app-partido-detail',
  templateUrl: './partido-detail.component.html',
  styleUrls: ['./partido-detail.component.css']
})
export class PartidoDetailComponent implements OnInit {
  @Input() partidoDetail: PartidoDetail;

  constructor(private route: ActivatedRoute,
               private partidoService: PartidoService) { }

  partido_id: number;

  getPartidoDetail(): void {
        this.partidoService.getPartidoDetail(this.partido_id)
            .subscribe(partidoDetail => {
                this.partidoDetail = partidoDetail
            });
    }

  ngOnInit() 
  {
    this.partido_id = +this.route.snapshot.paramMap.get('id');
    if (this.partido_id)
    {
      this.partidoDetail = new PartidoDetail();
      this.getPartidoDetail();
    }
  }
}