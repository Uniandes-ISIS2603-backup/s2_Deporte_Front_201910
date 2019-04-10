import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {ClienteDetail} from '../cliente-detail';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private modalDialogService: ModalDialogService,
              private viewRef: ViewContainerRef,
              private toastrService: ToastrService) { }

  ngOnInit() {
  }

}