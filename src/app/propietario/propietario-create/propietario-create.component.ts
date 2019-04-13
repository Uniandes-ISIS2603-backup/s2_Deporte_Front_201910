    
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import { PropietarioService } from '../propietario.service';
import { Propietario } from '../propietario';

@Component({
    selector: 'app-propietario-create',
    templateUrl: './propietario-create.component.html',
    styleUrls: ['./propietario-create.component.css']
})
export class PropietarioCreateComponent implements OnInit{

    constructor(
        private propietarioService: PropietarioService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
     * Propietario que se va a crear
     */
    propietario:Propietario;

    /**
     * Metodo que se llama cuando se cancela la creacion
     */
    cancelCreation(): void {
        this.toastrService.warning('The book wasn\'t created', 'Book creation');
        this.router.navigate(['/books/list']);
    }

    /**
     * Metodo que llama el servicio para efectuar la creacion del propietario
     */
    createPropietatio(): Propietario {
        console.log(this.propietario);
        this.propietarioService.createPropietario(this.propietario)
            .subscribe(propietario => {
                console.log(propietario);
                this.propietario.id = propietario.id;
                this.router.navigate(['/propietarios/' + propietario.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.propietario;
    }

    /**
     * Metodo que se llama cuando se muestra el HTML
     */
    ngOnInit() {
        propietario:Propietario;
            this.propietario = new Propietario();
            this.propietario.numCanchas = 0;
    }
}