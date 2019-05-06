import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { AgendaService } from '../agenda.service';
import { PropietarioService } from '../../propietario/propietario.service';
import { AgendaDetail } from '../agenda-detail';
import { Cancha } from '../../cancha/cancha';

@Component({
    selector: 'app-agenda-edit',
    templateUrl: './agenda-edit.component.html',
    styleUrls: ['./agenda-edit.component.css']
})
export class AgendaEditComponent implements OnInit {

    constructor(
        private agendaService: AgendaService,
        private propietarioService: PropietarioService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    /**
     * Cancha que se va a mostrar
     */
    agenda : AgendaDetail;

    /**
     * Id de la cancha que se va a mostrar
     */
    id:number;

    /**
     * Propietario dueño de la cancha
     */
    cancha:Cancha;

    /**
     * Metodo en el que se llama al servicio para encontrar la cancha
     */
    getAgenda(){
        this.agendaService.getAgendaDetail(this.id).subscribe(agenda => {
            
            this.agenda = agenda;
            this.cancha = agenda.cancha;
        });
    }

    /**
     * Metodo que llama al servicio para editar una cancha
     */
    updateAgenda(): void {
        this.agendaService.updateAgenda(this.agenda)
            .subscribe(() => {
                this.router.navigate(['/agendas/' + this.agenda.id]);
                this.toastrService.success("La agenda se edito correctamente", 'Agenda edition');
            });
    }
    
    /**
     * Metodo que se llama cuando se cancela la edicion
     */
    cancelEdition(): void {
        this.toastrService.warning('La agenda no fue editada', 'Agenda edition');
        this.router.navigate(['/agendas/' + this.agenda.id]);
    }

    /**
     * Metodo que se llama al mostrar el HTML
     */
   ngOnInit() {
       this.id = +this.route.snapshot.paramMap.get('id');
       this.getAgenda();
   }
}