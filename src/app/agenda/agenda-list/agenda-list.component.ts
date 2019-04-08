import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Agenda} from '../../agenda/agenda';
import {AgendaService} from '../../agenda/agenda.service';

@Component({
    selector: 'app-agenda-list',
    templateUrl: './agenda-list.component.html',
    styleUrls: ['./agenda-list.component.css']
})

export class AgendaListComponent implements OnInit {

    /**
    * The list of agendas to display
    */
    @Input() agendas: Agenda[];

    /**
    * The component's constructor
    */
    constructor(private agendaService: AgendaService, private route: ActivatedRoute) {}


    /**
    * This method retrieves all the agendas in the cancha to show them in the list
    */
    getAgendas(): void {
        this.agendaService.getAgendas()
            .subscribe(canchas => {
                this.agendas = canchas;
            });
            
            
            
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
       this.getAgendas();
    }
}