import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import { AmistosoService } from './amistoso.service';
import { AmistosoListComponent } from './amistoso-list/amistoso-list.component';
import { AmistosoDetailComponent } from './amistoso-detail/amistoso-detail.component';
import { AmistosoCreateComponent } from './amistoso-create/amistoso-create.component';
import { AmistosoUpdateComponent } from './amistoso-update/amistoso-update.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    NgxPermissionsModule,
  ],
  declarations: [AmistosoListComponent, AmistosoDetailComponent, AmistosoCreateComponent, AmistosoUpdateComponent],
  providers: [AmistosoService],
  exports: [AmistosoListComponent]
})
export class AmistosoModule { }