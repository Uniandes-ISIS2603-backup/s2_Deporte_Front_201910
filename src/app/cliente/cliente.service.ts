import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Cliente} from './cliente';
import {ClienteDetail} from './cliente-detail';
import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const clientes = '/clientes';

@Injectable()
export class ClienteService {

  constructor(private http:HttpClient) { }

  getClientes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>(API_URL + clientes);
  }

  getClienteDetail(clienteId): Observable<ClienteDetail> {
      console.log(clienteId+" "+API_URL + "cliente-" + clienteId+".json");
        return this.http.get<ClienteDetail>(API_URL + clientes+'/' + clienteId);
  }

  deleteCliente(clienteId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + clientes + '/' + clienteId);
  }

  updateCliente(cliente): Observable<ClienteDetail> {
        return this.http.put<ClienteDetail>(API_URL + clientes + '/' + cliente.id, cliente);
  }

  createCliente(cliente): Observable<Cliente> {
        return this.http.post<Cliente>(API_URL + clientes, cliente);
  }
}