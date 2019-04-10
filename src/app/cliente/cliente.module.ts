import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';
import {ClienteService} from './cliente.service';
import {ClienteListComponent} from './cliente-list/cliente-list.component';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ClienteDetailComponent} from './cliente-detail/cliente-detail.component';
import {ClienteCreateComponent} from './cliente-create/cliente-create.component';
import {ClienteEditComponent} from './cliente-edit/cliente-edit.component';
import {EquipoModule} from '../equipo/equipo.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPermissionsModule,
    FormsModule,
    EquipoModule,
    NgbModule
  ],
  declarations: [
        ClienteListComponent, ClienteDetailComponent, ClienteCreateComponent, ClienteEditComponent],
  providers: [ClienteService]
})
export class ClienteModule { }