import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Agenda} from '../agenda';
import {AgendaService} from '../agenda.service';

@Component({
    selector: 'app-agenda-list',
    templateUrl: './agenda-list.component.html',
    styleUrls: ['./agenda-list.component.css']
})

export class AgendaListComponent implements OnInit {

    /**
    * The list of agendas to display
    */
    agendas: Agenda[];

    /**
    * The component's constructor
    */
    constructor(private agendaService: AgendaService) {}

    allcanchas: string = 'no';

    /**
    * This method retrieves all the agendas in the cancha to show them in the list
    */
    getAgendas(): void {
        this.agendaService.getAgendas()
            .subscribe(agendas => {
                this.agendas = agendas;
            });
            
            
            
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
       this.getAgendas();
    }
}