

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { FranjaService } from '../franja.service';
import { Franja } from '../franja';
import { AgendaDetail } from '../../agenda/agenda-detail';
import { AgendaService } from '../../agenda/agenda.service';


@Component({
    selector: 'app-franja-create',
    templateUrl: './franja-create.component.html',
    styleUrls: ['./franja-create.component.css'],
    providers: [DatePipe]
})
export class FranjaCreateComponent implements OnInit{

    constructor(
        private franjaService: FranjaService,
        private agendaService: AgendaService,
        private route: ActivatedRoute,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    franja:Franja;

    agenda:AgendaDetail;

    id_c:number;

      /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
   @Output() cancel = new EventEmitter();

   /**
   * The output which tells the parent component
   * that the user created a new editorial
   */
   @Output() create = new EventEmitter();

    cancelCreation(): void {
        this.cancel.emit();
    }

    createFranja(): Franja {
        this.getAgendaDetail();
        
        return this.franja;
    }

    getAgendaDetail(){
        
        this.agendaService.getAgendaDetail(this.id_c)
            .subscribe(agenda => {
                this.agenda = agenda;
                this.franja.agenda = agenda;
                this.franja.dia = agenda.dia;
                this.franja.ocupada = false;
                this.franjaService.createFranja(this.franja)
                .subscribe(franja => {
                    this.franja = franja;
                    this.agenda.franjas.push(franja);
                    this.agendaService.updateAgenda(this.agenda)
                    .subscribe(agenda1 => {
                        this.create.emit();
                        this.toastrService.success("The franja was created", "Franja creation");
                        this.router.navigate(['/agendas/' + this.id_c]);
                    })
                }, err => {
                    this.toastrService.error(err, 'Error');
                });
            })
    }

    ngOnInit() {
        this.id_c = +this.route.snapshot.paramMap.get('id');
    franja:Franja:
        this.franja = new Franja();
    }
    
}
