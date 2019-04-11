import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ClienteService } from '../cliente.service';
import { ClienteDetail } from '../cliente-detail';
import {Cliente} from '../cliente';

import {EquipoService} from '../../equipo/equipo.service';
import {Equipo} from '../../equipo/equipo';
@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css']
})
export class ClienteDetailComponent implements OnInit{

  

  constructor(private clienteService: ClienteService,
        private equipoService:EquipoService,
        private route: ActivatedRoute
        ){}

  clienteDetail: ClienteDetail;
  equipos: Equipo[];
  cliente_id:number;
  
  getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(clienteDetail => {
                this.clienteDetail = clienteDetail
            });
    }

    getEquiposCliente(){
        
        this.equipoService.getEquipos()
        .subscribe(equipos => {
            this.equipos = equipos;
            this.equipos = this.equipos.filter(equipo => equipo.representante.id == this.clienteDetail.id);
        });
    }

  ngOnInit() 
  {
    this.cliente_id = +this.route.snapshot.paramMap.get('id');
        this.clienteDetail = new ClienteDetail();
        this.getClienteDetail();
        this.getEquiposCliente();
  }
}