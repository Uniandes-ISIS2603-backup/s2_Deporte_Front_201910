import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CanchaListComponent } from '../cancha/cancha-list/cancha-list.component';
import { PropietarioListComponent } from '../propietario/propietario-list/propietario-list.component';
import { CanchaDetailComponent } from '../cancha/cancha-detail/cancha-detail.component';

const routes: Routes = [

     {
        path: 'auth',
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path:'canchas',
        children:[
            {
                path: 'list',
                component: CanchaListComponent
            },
            {
                path: ':id',
                component: CanchaDetailComponent
            }
        ]
    },
    {
        path: 'propietarios',
        children:[
            {
                path: 'list',
                component: PropietarioListComponent
            }
        ]
    },
    
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
