import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import {AmistosoModule} from './amistoso/amistoso.module';
import {CanchaModule} from './cancha/cancha.module';
import {PropietarioModule} from './propietario/propietario.module';
import {CampeonatoModule} from './campeonato/campeonato.module';
import {PostModule} from './post/post.module';
import {BlogModule} from './blog/blog.module';
import {ClienteModule} from './cliente/cliente.module';
import {EquipoModule} from './equipo/equipo.module';
import {PartidoModule} from './partido/partido.module';
import {ReservaModule} from './reserva/reserva.module';
import {EntrenamientoModule} from './entrenamiento/entrenamiento.module';





@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        AmistosoModule,
        PropietarioModule,
        CanchaModule,
        CampeonatoModule,
        PostModule,
        BlogModule,
        PartidoModule,
        ClienteModule,
        EquipoModule,
        EntrenamientoModule,
        ReservaModule,
        FormsModule,
        NgxPermissionsModule.forRoot(),
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgbModule
            ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
