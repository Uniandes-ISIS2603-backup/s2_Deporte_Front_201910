/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { CampeonatoListComponent } from './campeonato-list/campeonato-list.component';
import {CampeonatoService} from './campeonato.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import { CampeonatoDetailComponent } from './campeonato-detail/campeonato-detail.component';
import {CampeonatoCreateComponent} from './campeonato-create/campeonato-create.component';


@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [CampeonatoListComponent, CampeonatoDetailComponent, CampeonatoCreateComponent],
    exports: [CampeonatoListComponent],
    providers: [CampeonatoService]
    
})
export class CampeonatoModule {}


