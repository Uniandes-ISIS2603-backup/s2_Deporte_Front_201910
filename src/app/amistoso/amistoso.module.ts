import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmistosoService } from './amistoso.service';
import { AmistosoListComponent } from './amistoso-list/amistoso-list.component';
import { AmistosoDetailComponent } from './amistoso-detail/amistoso-detail.component';
import { AmistosoCreateComponent } from './amistoso-create/amistoso-create.component';
import { AmistosoUpdateComponent } from './amistoso-update/amistoso-update.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AmistosoListComponent, AmistosoDetailComponent, AmistosoCreateComponent, AmistosoUpdateComponent],
  providers: [AmistosoService],
  exports: [AmistosoListComponent, AmistosoDetailComponent]
})
export class AmistosoModule { }