import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';

import {Cancha} from '../../cancha/cancha';
import {CanchaService} from '../../cancha/cancha.service';
@Component({
    selector: 'app-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})

export class CanchaListComponent implements OnInit {

    /**
    * The list of books to display
    */
    @Input() canchas: Cancha[];

    /**
    * The component's constructor
    */
    constructor(private canchaService: CanchaService, private route: ActivatedRoute) {}

    allcanchas: string = 'no';
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getCanchas(): void {
        this.canchaService.getCanchas()
            .subscribe(canchas => {
                this.canchas = canchas;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allcanchas)
            .subscribe(params => {
                console.log(params);

                this.allcanchas = params.allcanchas;
                console.log(this.allcanchas);
            });
        if (this.allcanchas == 'yes') {
            console.log("allcanchas");

            this.getCanchas();
        }
    }
}
