import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {EquipoDetailComponent} from './equipo-detail/equipo-detail.component';
import {EquipoCreateComponent} from './equipo-create/equipo-create.component';
import {EquipoEditComponent} from './equipo-edit/equipo-edit.component';
import {EquipoListComponent} from './equipo-list/equipo-list.component';
import {EquipoService} from './equipo.service';

@NgModule({
  imports: [
    BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
  ],
  declarations: [
        EquipoListComponent, EquipoDetailComponent, EquipoCreateComponent, EquipoEditComponent],
  providers: [EquipoService]
})
export class EquipoModule { }