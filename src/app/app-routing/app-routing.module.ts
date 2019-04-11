import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { CanchaListComponent } from '../cancha/cancha-list/cancha-list.component';
import { PropietarioListComponent } from '../propietario/propietario-list/propietario-list.component';
import { CanchaDetailComponent } from '../cancha/cancha-detail/cancha-detail.component';
import {CampeonatoListComponent} from '../campeonato/campeonato-list/campeonato-list.component';
import {BlogListComponent} from '../blog/blog-list/blog-list.component';
import {PostListComponent} from '../post/post-list/post-list.component';
import {CampeonatoCreateComponent} from '../campeonato/campeonato-create/campeonato-create.component';
import {BlogCreateComponent} from '../blog/blog-create/blog-create.component';
//import {CampeonatoDetailComponent} from '../campeonato/campeonato-detail/campeonato-detail.component';
import { PropietarioDetailComponent } from '../propietario/propietario-detail/propietario-detail.component';
import { CanchaCreateComponent } from '../cancha/cancha-create/cancha-create.component';
import { CanchaEditComponent } from '../cancha/cancha-edit/cancha-edit.component';
import { PropietarioCreateComponent } from '../propietario/propietario-create/propietario-create.component';
import { PropietarioEditComponent } from '../propietario/propietario-edit/propietario-edit.component';

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
                path: 'create/:id',
                component: CanchaCreateComponent
            },
            {
                path: 'edit/:id',
                component: CanchaEditComponent
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
            },
            {
                path: 'create',
                component: PropietarioCreateComponent
            },
            {
                path: 'edit/:id',
                component: PropietarioEditComponent
            },
            {
                path: ':id',
                component: PropietarioDetailComponent
            }
        ]
    },
     {
        path: 'posts',
        children:[
            {
                path: 'list',
                component: PostListComponent
            }
        ]
    },
     {
        path: 'blogs',
        children:[
            {
                path: 'list',
                component: BlogListComponent
            },
             {
                path: 'add',
                component: BlogCreateComponent,
                runGuardsAndResolvers: 'always'
            },
        ]
    },
     {
        path: 'campeonatos',
        children:[
            {
                path: 'list',
                component: CampeonatoListComponent
            },
            {
                path: 'add',
                component: CampeonatoCreateComponent,
                runGuardsAndResolvers: 'always'
            },
//            {
//                path: 'detail',
//                component: CampeonatoDetailComponent,
//            },
        ]
    },
    
    {
        path: 'home',
        component: AuthLoginComponent
    },
    {
        path: '**',
        redirectTo: 'home',
    },
    
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
