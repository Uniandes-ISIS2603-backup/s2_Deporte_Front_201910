    
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {CanchaListComponent} from './cancha-list/cancha-list.component';
import {CanchaDetailComponent} from './cancha-detail/cancha-detail.component';

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
        BookListComponent, BookDetailComponent, BookReviewComponent, BookCreateComponent, BookAddReviewComponent, BookEditComponent
    ],
    providers: [BookService],
    exports: [CanchaListComponent, CanchaEditComponent]
})
export class CanchaModule {}