import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Franja} from '../franja';
import {FranjaService} from '../franja.service';

@Component({
    selector: 'app-franja-list',
    templateUrl: './franja-list.component.html',
    styleUrls: ['./franja-list.component.css']
})

export class FranjaListComponent implements OnInit {

    /**
    * The list of agendas to display
    */
    franjas: Franja[];

    /**
    * The component's constructor
    */
    constructor(private franjaService: FranjaService) {}

    alfranjas: string = 'no';

    /**
    * This method retrieves all the agendas in the cancha to show them in the list
    */
    geFranjas(): void {
        this.franjaService.getFranjas()
            .subscribe(franjas => {
                this.franjas = franjas;
            });
            
            
            
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
       this.geFranjas();
    }
}