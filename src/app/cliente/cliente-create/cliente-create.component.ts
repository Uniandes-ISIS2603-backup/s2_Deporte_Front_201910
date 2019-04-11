import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {
  
  constructor(private clienteService: ClienteService,
              private toastrService: ToastrService,
              private router: Router) { }

  cliente:Cliente;

  cancelCreation(): void {
        this.toastrService.warning('The cliente wasn\'t created', 'Cliente creation');
        this.router.navigate(['/clientes/list']);
    }

    createCancha(): Cliente {
        this.clienteService.createCliente(this.cliente)
            .subscribe(cliente => {
                this.cliente.id = cliente.id;
                this.router.navigate(['/clientes/' + cliente.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.cliente;
    }

  ngOnInit() 
  {
     this.cliente = new Cliente();
  }

}