
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {FranjaListComponent} from './franja-list/franja-list.component';
import {FranjaDetailComponent} from './franja-detail/franja-detail.component';
import {FranjaService} from './franja.service';
import { FranjaCreateComponent } from './franja-create/franja-create.component';

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
        FranjaListComponent, FranjaDetailComponent, FranjaCreateComponent
    ],
    providers: [FranjaService],
    exports: [FranjaListComponent]
})
export class FranjaModule {
}


