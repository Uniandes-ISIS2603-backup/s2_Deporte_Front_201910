/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {AgendaListComponent} from './agenda-list/agenda-list.component';
import {AgendaDetailComponent} from './agenda-detail/agenda-detail.component';
import {AgendaService} from './agenda.service';

import {FranjaModule} from './../franja/franja.module';
import { AgendaCreateComponent } from './agenda-create/agenda-create.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule,
        FranjaModule
    ],
    declarations: [
        AgendaListComponent, AgendaDetailComponent, AgendaCreateComponent //,AgendaEditComponent
    ],
    providers: [AgendaService],
    exports: [AgendaListComponent]
})
export class AgendaModule {
}


