

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
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
export class FranjaCreateComponent implements OnInit {

    constructor(
        private franjaService: FranjaService,
        private agendaService: AgendaService,
        private route: ActivatedRoute,
        private toastrService: ToastrService,
        private router: Router
    ) { }

    franja: Franja;
    showCreate: Boolean;
    agenda: AgendaDetail;

    intervalo: number;
    inicioIntervalo: number;
    numFranjas: number;
    diaInicio: number;
    diaFin: number;
    diaMax: number;
    llego: boolean;
    franjas: Franja[] = new Array();

    id_c: number;

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
        this.router.navigate(['/agendas/' + this.id_c]);
    }

    createFranja(): Franja {
        
        this.franja.dia = this.agenda.dia;
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

        return this.franja;
    }

    createFranjaAvanzada(): void {
        this.intervalo = parseInt((<HTMLInputElement>document.getElementById("intervalo")).value);

        this.inicioIntervalo = parseInt((<HTMLInputElement>document.getElementById("inicioIntervalo")).value);

        this.numFranjas = parseInt((<HTMLInputElement>document.getElementById("numFranjas")).value);

        this.diaInicio = parseInt((<HTMLInputElement>document.getElementById("diaMin")).value);
        
        this.diaFin = parseInt((<HTMLInputElement>document.getElementById("diaMax")).value);
        
        if(this.diaFin > this.diaMax){
            this.diaFin = this.diaMax;
        }

        this.franjas = new Array();
        for (let j = this.diaInicio; j <= this.diaFin; j++) {
            for (let i = 0; i < this.numFranjas; i++) {
                let f:Franja = new Franja;
                f.agenda = this.agenda;
                f.ocupada = false;
                f.horaInicio = (this.intervalo * i) + this.inicioIntervalo;
                f.horaFin = f.horaInicio + this.intervalo;
                f.setDia(j);
                this.franjas.push(f);
            }

        }


        for(let i = 0; i < this.franjas.length - 1; i++){
            this.franjaService.createFranja(this.franjas[i])
                .subscribe(fran => {
                    this.franjas[i] = fran;
                    this.agenda.franjas.push(this.franjas[i]);
                }, err => {
                    this.toastrService.error(err, 'Error');
                });
        }

        this.franjaService.createFranja(this.franjas[this.franjas.length-1])
        .subscribe(f => {
            this.franjas[this.franjas.length-1] = f;
            this.agenda.franjas.push(this.franjas[this.franjas.length-1]);
            this.agendaService.updateAgenda(this.agenda)
            .subscribe( agenda1 => {
                this.create.emit();
                console.log(agenda1);
                this.router.navigate(['/agendas/' + this.id_c]);
            })
        })
    }

    showHideCreate(): void {
        this.showCreate = !this.showCreate!
    }





    getAgendaDetail() {
        this.agendaService.getAgendaDetail(this.id_c)
            .subscribe(agenda => {
                this.agenda = agenda;
                this.franja.agenda = agenda;
                this.franja.ocupada = false;
                switch (agenda.mes) {
                    case 1: {
                        this.diaMax = 31;
                        break;
                    }
                    case 2: {
                        this.diaMax = 28;
                        break;
                    }
                    case 3: {
                        this.diaMax = 31;
                        break;
                    }
                    case 4: {
                        this.diaMax = 30;
                        break;
                    }
                    case 5: {
                        this.diaMax = 31;
                        break;
                    }
                    case 6: {
                        this.diaMax = 30;
                        break;
                    }
                    case 7: {
                        this.diaMax = 31;
                        break;
                    }
                    case 8: {
                        this.diaMax = 31;
                        break;
                    }
                    case 9: {
                        this.diaMax = 30;
                        break;
                    }
                    case 10: {
                        this.diaMax = 30;
                        break;
                    }
                    case 11: {
                        this.diaMax = 30;
                        break;
                    }
                    case 12: {
                        this.diaMax = 31;
                        break;
                    }
                }
            })
    }

    ngOnInit() {
        this.id_c = +this.route.snapshot.paramMap.get('id');
        franja: Franja:
        this.getAgendaDetail();
        this.franja = new Franja();
        this.showCreate = false;
    }

}
