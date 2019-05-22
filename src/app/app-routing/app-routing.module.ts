import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';
import {NgxPermissionsModule} from 'ngx-permissions';

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
import {CampeonatoDetailComponent} from '../campeonato/campeonato-detail/campeonato-detail.component';
import { PropietarioDetailComponent } from '../propietario/propietario-detail/propietario-detail.component';
import { CanchaCreateComponent } from '../cancha/cancha-create/cancha-create.component';
import { CanchaEditComponent } from '../cancha/cancha-edit/cancha-edit.component';
import { PropietarioCreateComponent } from '../propietario/propietario-create/propietario-create.component';
import { PropietarioEditComponent } from '../propietario/propietario-edit/propietario-edit.component';
import { BlogDetailComponent } from '../blog/blog-detail/blog-detail.component';
import {CampeonatoEditComponent} from '../campeonato/campeonato-edit/campeonato-edit.component';
import {BlogEditComponent} from '../blog/blog-edit/blog-edit.component';
import {PostDetailComponent} from '../post/post-detail/post-detail.component';
import {PostCreateComponent} from '../post/post-create/post-create.component';
import {PostEditComponent} from '../post/post-edit/post-edit.component';

import {ClienteListComponent} from '../cliente/cliente-list/cliente-list.component';
import {ClienteCreateComponent} from '../cliente/cliente-create/cliente-create.component';
import {ClienteDetailComponent} from '../cliente/cliente-detail/cliente-detail.component';
import {ClienteEditComponent} from '../cliente/cliente-edit/cliente-edit.component';

import {EquipoListComponent} from '../equipo/equipo-list/equipo-list.component';
import {EquipoCreateComponent} from '../equipo/equipo-create/equipo-create.component';
import {EquipoDetailComponent} from '../equipo/equipo-detail/equipo-detail.component';
import {EquipoEditComponent} from '../equipo/equipo-edit/equipo-edit.component';

import {PartidoListComponent} from '../partido/partido-list/partido-list.component';
import {PartidoCreateComponent} from '../partido/partido-create/partido-create.component';
import {PartidoDetailComponent} from '../partido/partido-detail/partido-detail.component';
import {PartidoEditComponent} from '../partido/partido-edit/partido-edit.component';

import {AmistosoListComponent} from '../amistoso/amistoso-list/amistoso-list.component';
import {AmistosoCreateComponent} from '../amistoso/amistoso-create/amistoso-create.component';
import {AmistosoDetailComponent} from '../amistoso/amistoso-detail/amistoso-detail.component';

import {ReservaListComponent} from '../reserva/reserva-list/reserva-list.component';
import {ReservaCreateComponent} from '../reserva/reserva-create/reserva-create.component';
import {ReservaDetailComponent} from '../reserva/reserva-detail/reserva-detail.component';

import {EntrenamientoListComponent} from '../entrenamiento/entrenamiento-list/entrenamiento-list.component';
import {EntrenamientoCreateComponent} from '../entrenamiento/entrenamiento-create/entrenamiento-create.component';
import {EntrenamientoDetailComponent} from '../entrenamiento/entrenamiento-detail/entrenamiento-detail.component';

import { AgendaDetailComponent } from '../agenda/agenda-detail/agenda-detail.component';
import { AgendaListComponent } from '../agenda/agenda-list/agenda-list.component';
import { AgendaCreateComponent } from '../agenda/agenda-create/agenda-create.component';
import { AgendaEditComponent } from '../agenda/agenda-edit/agenda-edit.component';

import { FranjaCreateComponent} from '../franja/franja-create/franja-create.component';


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
        path: 'agendas',
        children:[
            
            {
                path: 'list',
                component: AgendaListComponent
            },
            {
                path: 'edit/:id',
                component: AgendaEditComponent
            },
            {
                path: 'add/:id',
                component: AgendaCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: ':id',
                component: AgendaDetailComponent
            }
        ]
    },
    {
        path: 'franjas',
        children:[
            
            {
                path: 'add/:id',
                component: FranjaCreateComponent
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
            },
             {
                path: 'detail/:id',
                component: PostDetailComponent,
            },
            {
                path: 'add',
                component: PostCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
	                path: 'edit/:id',
	                component: PostEditComponent
	            },

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
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
            },
            {
                path: 'detail/:id',
                component: BlogDetailComponent,
            },
           {
                path: 'edit/:id',
                component: BlogEditComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['ADMIN']
                    }
                }
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
            {
                path: 'detail/:id',
                component: CampeonatoDetailComponent,
            },
             {
                path: 'edit/:id',
                component: CampeonatoEditComponent
            },
        ]
    },
    {
        path: 'clientes',
        children:[
            {
                path: 'list',
                component: ClienteListComponent
            },
            {
                path: 'add',
                component: ClienteCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'id',
                component: ClienteDetailComponent,
            },
        ]
    },
    {
        path: 'partidos',
        children:[
            {
                path: 'list',
                component: PartidoListComponent
            },
            {
                path: 'add',
                component: PartidoCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'id',
                component: PartidoDetailComponent,
            },
        ]
    },
    {
        path: 'equipos',
        children:[
            {
                path: 'list',
                component: EquipoListComponent
            },
            {
                path: 'add',
                component: EquipoCreateComponent,
                runGuardsAndResolvers: 'always'
            },
            {
                path: 'id',
                component: EquipoDetailComponent,
            },
        ]
    },
    {
        path:'amistosos',
        children:[
            {
                path: 'list',
                component: AmistosoListComponent
            },
            {
                path: 'create',
                component: AmistosoCreateComponent
            },
            {
                path: ':id',
                component: AmistosoDetailComponent
            }
        ]
    },
    {
        path:'entrenamientos',
        children:[
            {
                path: 'list',
                component: EntrenamientoListComponent
            },
            {
                path: 'create',
                component: EntrenamientoCreateComponent
            },
            {
                path: ':id',
                component: EntrenamientoDetailComponent
            }
        ]
    },
    {
        path:'reservas',
        children:[
            {
                path: 'list',
                component: ReservaListComponent
            },
            {
                path: 'create',
                component: ReservaCreateComponent
            },
            {
                path: ':id',
                component: ReservaDetailComponent
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
