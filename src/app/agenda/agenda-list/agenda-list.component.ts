import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef, Input} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Agenda} from '../agenda';
import {AgendaService} from '../agenda.service';
//import { CanchaDetail } from 'src/app/cancha/cancha-detail';
import { convertPropertyBindingBuiltins } from '@angular/compiler/src/compiler_util/expression_converter';
import { AgendaDetail } from '../agenda-detail';
import { ModalDialogService } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

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

     canchaId: number;

     selected : AgendaDetail;
     
    /**
    * The component's constructor
    */
   constructor(
    private agendaService: AgendaService,
    private route: ActivatedRoute,
    private modalDialogService: ModalDialogService,
    private router: Router,
    private viewRef: ViewContainerRef,
    private toastrService: ToastrService
) {
    //This is added so we can refresh the view when one of the books in
    //the "Other books" list is clicked
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
        if (e instanceof NavigationEnd) {
            this.ngOnInit();
        }
    });
}

    navigationSubscription;

    /**
    * This method retrieves all the agendas in the cancha to show them in the list
    */
    getAgendas(canchaId: number): void {
        this.agendaService.getAgendas(canchaId)
            .subscribe(agendasList => {
                this.agendas = agendasList;
                this.agendas.forEach(agenda => 
                    {                          
                        switch(agenda.mes){
                            case 1:{
                                agenda.mesString = "Enero";
                                break;
                                }
                            case 2: {
                                agenda.mesString = "Febrero";
                                break;
                            }
                            case 3: {
                                agenda.mesString = "Marzo";
                                break;
                            }
                            case 4: {
                                agenda.mesString = "Abril";
                                break;
                            }
                            case 5: {
                                agenda.mesString = "Mayo";
                                break;
                            }
                            case 6: {
                                agenda.mesString = "Junio";
                                break;
                            }
                            case 7: {
                                agenda.mesString = "Julio";
                                break;
                            }
                            case 8: {
                                agenda.mesString = "Agosto";
                                break;
                            }
                            case 9: {
                                agenda.mesString = "Septiembre";
                                break;
                            }
                            case 10: {
                                agenda.mesString = "Octubre";
                                break;
                            }
                            case 11: {
                                agenda.mesString = "Noviembre";
                                break;
                            }
                            case 12: {
                                agenda.mesString = "Diciembre";
                                break;
                            }

                        }
                    })
            });
         };
            
    

    
    /**
    * The method which initializes the component
    */
    ngOnInit() {
       this.canchaId = +this.route.snapshot.paramMap.get('id');
       this.getAgendas(this.canchaId);
    }
}