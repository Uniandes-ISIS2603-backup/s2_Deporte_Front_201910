import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Observable, Subject, merge} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';
import { CanchaService } from '../cancha.service';
import { PropietarioService } from '../../propietario/propietario.service';
import { CanchaDetail } from '../cancha-detail';
import { Propietario } from '../../propietario/propietario';


@Component({
    selector: 'app-cancha-edit',
    templateUrl: './cancha-edit.component.html',
    styleUrls: ['./cancha-edit.component.css']
})
export class CanchaEditComponent implements OnInit {

    constructor(
        private canchaService: CanchaService,
        private propietarioService: PropietarioService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    cancha:CanchaDetail;

    id:number;

    propietario:Propietario;

    getCancha(){
        this.canchaService.getCanchaDetail(this.id).subscribe(cancha => {
            
            this.cancha = cancha;
            this.propietario = cancha.propietario;
        });
    }

    updateCancha(): void {
        this.canchaService.updateCancha(this.cancha)
            .subscribe(() => {
                this.router.navigate(['/canchas/' + this.id]);
                this.toastrService.success("La cancha se edito correctamente", 'Cancha edition');
            });
    }
    
    cancelEdition(): void {
        this.toastrService.warning('La cancha no fue editada', 'Cancha edition');
        this.router.navigate(['/canchas/list']);
    }

   ngOnInit() {
       this.id = +this.route.snapshot.paramMap.get('id');
       this.getCancha();
   }
}