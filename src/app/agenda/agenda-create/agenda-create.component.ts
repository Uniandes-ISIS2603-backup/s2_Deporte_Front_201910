  import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import { AgendaService } from '../agenda.service';
import { Agenda } from '../agenda';
import { Cancha } from '../../cancha/cancha';
import { CanchaService } from '../../cancha/cancha.service';


@Component({
    selector: 'app-agenda-create',
    templateUrl: './agenda-create.component.html',
    styleUrls: ['./agenda-create.component.css'],
    providers: [DatePipe]
})
export class AgendaCreateComponent implements OnInit{

    constructor(
        private agendaService: AgendaService,
        private canchaService: CanchaService,
        private route: ActivatedRoute,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    agenda:Agenda;

    cancha:Cancha;

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

    createAgenda(): Agenda {
        this.getCancha();
        this.agendaService.createAgenda(this.agenda)
            .subscribe(agenda => {
                this.agenda = agenda;
                console.log("agenda que regreso:");
                console.log(agenda);
                this.create.emit();
                this.toastrService.success("The agenda was created", "Agenda creation");
                this.router.navigate(['/agendas/' + agenda.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.agenda;

        
    }

    getCancha(){
        
        console.log("obteniendo Cancha:")
        this.canchaService.getCanchaDetail(this.id_c)
            .subscribe(cancha => {
                
                console.log("Cancha obtenida")
                this.cancha = cancha;
                console.log(cancha);
                this.agenda.cancha = cancha;
                console.log("Agenda con cancha:")
                console.log(this.agenda);
            })
    }

    ngOnInit() {
        this.id_c = +this.route.snapshot.paramMap.get('id');
    agenda:Agenda:
        this.agenda = new Agenda();
        this.getCancha();
    }
    
}