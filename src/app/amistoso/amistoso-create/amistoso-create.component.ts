import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { ToastrService } from 'ngx-toastr';

import { AmistosoService } from '../amistoso.service';
import { Amistoso } from '../amistoso';

@Component({
  selector: 'app-amistosocreate',
  templateUrl: './amistoso-create.component.html',
  styleUrls: ['./amistoso-create.component.css'],
  providers: [DatePipe]
})
export class AmistosoCreateComponent implements OnInit {
constructor(
        private amistosoService: AmistosoService,
        private toastrService: ToastrService,
        private router: Router
  ) { }
  
  amistoso:Amistoso;
  
  fecha: Date;

  cancelCreation(): void {
        this.toastrService.warning('The amistoso wasn\'t created', 'amistoso creation');
        this.router.navigate(['/amistosos/list']);
    }

    createAmistoso(): Amistoso{
        this.amistosoService.createAmistoso(this.amistoso)
            .subscribe(amistoso=> {
                this.amistoso.id = amistoso.id;
                this.amistoso.fecha = amistoso.fecha;
                this.router.navigate(['/amistosos/' + amistoso.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.amistoso;
    }

    ngOnInit() {
    amistoso: Amistoso;
        this.amistoso = new Amistoso();
    }
}