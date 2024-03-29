import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { PropietarioService } from './propietario.service';
import { PropietarioDetailComponent } from './propietario-detail/propietario-detail.component';
import { PropietarioListComponent } from './propietario-list/propietario-list.component';
import { PropietarioCreateComponent } from './propietario-create/propietario-create.component';
import { PropietarioEditComponent } from './propietario-edit/propietario-edit.component';
import {NgxPermissionsModule} from 'ngx-permissions';

import { CanchaModule } from '../cancha/cancha.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        CanchaModule,
                                NgxPermissionsModule.forRoot()

    ],
    declarations: [PropietarioListComponent, PropietarioDetailComponent, PropietarioCreateComponent, PropietarioEditComponent],
    providers: [PropietarioService]
})

export class PropietarioModule { }