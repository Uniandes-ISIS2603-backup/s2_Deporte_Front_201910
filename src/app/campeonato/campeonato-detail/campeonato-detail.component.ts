/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CampeonatoService } from '../campeonato.service';
import { Campeonato } from '../campeonato';
import { CampeonatoDetail } from '../campeonato-detail';

@Component({
  selector: 'app-campeonato-detail',
  templateUrl: './campeonato-detail.component.html',
  styleUrls: ['./campeonato-detail.component.css']
})
export class CampeonatoDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param campeonatoService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private campeonatoService: CampeonatoService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
   campeonatoDetail: CampeonatoDetail;



  /**
  * The editorial's id retrieved from the address
  */
  @Input() campeonato_name: string;
  
  loader: any;

  /**
  * The method which retrieves the books of an editorial
  */
//  getCampeonatoDetail(): void {
//    this.campeonatoService.getCampeonatoDetail(this.campeonato_name)
//      .subscribe(o => {
//        this.campeonatoDetail = o
//      });
//  }

onLoad(params) {

//    this.campeonato_name = parseInt(params['name']);
    console.log(" en detail " + this.campeonato_name);
    this.campeonatoDetail = new CampeonatoDetail();
//    this.getCampeonatoDetail();
  }
  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
 ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}

