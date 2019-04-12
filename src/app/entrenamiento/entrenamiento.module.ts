import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntrenamientoService } from './entrenamiento.service';
import { EntrenamientoListComponent } from './entrenamiento-list/entrenamiento-list.component';
import { EntrenamientoDetailComponent } from './entrenamiento-detail/entrenamiento-detail.component';
import { EntrenamientoCreateComponent } from './entrenamiento-create/entrenamiento-create.component';
import { EntrenamientoUpdateComponent } from './entrenamiento-update/entrenamiento-update.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [EntrenamientoListComponent, 
  EntrenamientoDetailComponent, EntrenamientoCreateComponent, EntrenamientoUpdateComponent],

  exports:[EntrenamientoListComponent, 
  EntrenamientoDetailComponent, EntrenamientoCreateComponent, EntrenamientoUpdateComponent],

  providers: [EntrenamientoService]

})
export class EntrenamientoModule { }