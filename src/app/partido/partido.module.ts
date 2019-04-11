import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {PartidoDetailComponent} from './partido-detail/partido-detail.component';
import {PartidoCreateComponent} from './partido-create/partido-create.component';
import {PartidoEditComponent} from './partido-edit/partido-edit.component';
import {PartidoListComponent} from './partido-list/partido-list.component';
import {PartidoService} from './partido.service';

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
        PartidoListComponent, PartidoDetailComponent, PartidoCreateComponent, PartidoEditComponent],
  providers: [PartidoService]
})
export class PartidoModule { }