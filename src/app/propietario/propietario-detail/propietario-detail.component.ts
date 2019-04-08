import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PropietarioService } from '../propietario.service';
import { Propietario } from '../propietario';
import { PropietarioDetail } from '../propietario-detail';
import { CanchaService } from 'src/app/cancha/cancha.service';
import { Cancha } from 'src/app/cancha/cancha';

@Component({
    selector: 'app-propietario-detail',
    templateUrl: './propietario-detail.component.html',
    styleUrls: ['./propietario-detail.component.css']
})

export class PropietarioDetailComponent implements OnInit {

    /**
    * The component's constructor
    * @param editorialService The editorial's service
    * @param route The route element which helps to obtain the editorial's id
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private propietarioService: PropietarioService,
        private canchaService: CanchaService,
        private route: ActivatedRoute
    ) { }

    /**
    * The editorial whose details we want to show
    */
   propietarioDetail: PropietarioDetail;



    /**
    * The editorial's id retrieved from the address
    */
    propietario_id: number;

    canchas: Cancha[];
    /**
    * The method which retrieves the books of an editorial
    */
    getPropietarioDetail(): void {
        this.propietarioService.getPropietarioDetail(this.propietario_id)
            .subscribe(propietarioDetail => {
                this.propietarioDetail = propietarioDetail
            });
    }

    getCanchasPropietario(){
        this.canchaService.getCanchas()
        .subscribe(canchas => {
            this.canchas = canchas;
           // this.canchas = this.canchas.filter(cancha => cancha.id this.canchaDetail.tipoCancha);
        });
    }

    /**
    * The method which initializes the component
    * We need to initialize the editorial so it is never considered as undefined
    */
    ngOnInit() {
        this.propietario_id = +this.route.snapshot.paramMap.get('id');
        this.propietarioDetail = new PropietarioDetail();
        this.getPropietarioDetail();
    }

}