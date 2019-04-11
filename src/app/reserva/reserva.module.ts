import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from './reserva.service';
import { ReservaListComponent } from './reserva-list/reserva-list.component';
import { ReservaDetailComponent } from './reserva-detail/reserva-detail.component';
import { ReservaCreateComponent } from './reserva-create/reserva-create.component';
import { ReservaUpdateComponent } from './reserva-update/reserva-update.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ReservaListComponent, ReservaDetailComponent, ReservaCreateComponent, ReservaUpdateComponent],

  providers: [ReservaService],

  exports:[ReservaListComponent, ReservaDetailComponent, ReservaCreateComponent, ReservaUpdateComponent]
})
export class ReservaModule { }