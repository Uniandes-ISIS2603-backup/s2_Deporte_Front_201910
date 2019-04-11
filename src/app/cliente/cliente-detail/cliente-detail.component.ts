import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';
import {Equipo} from '../../equipo/equipo';
@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit {

  @Input() clienteDetail: ClienteDetail;

  constructor(private route: ActivatedRoute,
               private clienteService: ClienteService) { }

  cliente_id: number;

  getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail
            });
    }

  ngOnInit() 
  {
    this.cliente_id = +this.route.snapshot.paramMap.get('id');
    if (this.cliente_id)
    {
      this.clienteDetail = new ClienteDetail();
      this.getClienteDetail();
    }
  }
}