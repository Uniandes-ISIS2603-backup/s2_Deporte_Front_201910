import { Component, OnInit } from '@angular/core';
import {Cliente} from './cliente';
import {ClienteDetail} from './cliente-detail';
import {ClienteDetailComponent} from './cliente-detail/cliente-detail.component';
import {ClienteEditComponent} from './cliente-edit/cliente-edit.component';
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}