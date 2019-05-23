
import { ReservaService } from './reserva.service';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReservaUpdateComponent } from './reserva-update/reserva-update.component';
 import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import {NgxPermissionsModule} from 'ngx-permissions';

@NgModule({
  imports: [
      BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
                        NgxPermissionsModule.forRoot()

  ],
  declarations: [ReservaListComponent, ReservaDetailComponent, ReservaCreateComponent, ReservaUpdateComponent],

  providers: [ReservaService],

  exports:[ReservaListComponent, ReservaDetailComponent, ReservaCreateComponent, ReservaUpdateComponent]
})
export class ReservaModule { }