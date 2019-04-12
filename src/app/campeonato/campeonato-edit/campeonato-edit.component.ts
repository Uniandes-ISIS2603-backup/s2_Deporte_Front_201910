import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {CampeonatoService} from '../campeonato.service';
import {CampeonatoDetail} from '../campeonato-detail';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-campeonato-edit',
    templateUrl: './campeonato-edit.component.html',
    styleUrls: ['./campeonato-edit.component.css']
})
export class CampeonatoEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param campeonatoService The campeonato's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private campeonatoService: CampeonatoService,
        private toastrService: ToastrService,
         private router: Router,
        private route: ActivatedRoute
    ) {}

 
    campeonato:CampeonatoDetail;

    id:number;

    getCampeonato(){
        this.campeonatoService.getCampeonatoDetail(this.id).subscribe(camp => {
            
            this.campeonato = camp;
        });
    }

    updateCampeonato(): void {
        this.campeonatoService.updateCampeonato(this.campeonato)
            .subscribe(() => {
                this.router.navigate(['/campeonatos/detail/' + this.id]);
                this.toastrService.success("El campeonato se edito correctamente", 'Campeonato edition');
            });
    }

    cancelEdition(): void {
        this.toastrService.warning('El campeonato no fue editado', 'Campeonato edition');
        this.router.navigate(['/campeonatos/list']);
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getCampeonato();
    }

    
}