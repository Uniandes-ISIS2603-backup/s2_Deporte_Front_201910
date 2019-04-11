

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AmistosoService } from '../amistoso.service';
import { Amistoso } from '../amistoso';
import { AmistosoDetail } from '../amistoso-detail';

@Component({
  selector: 'app-amistoso-detail',
  templateUrl: './amistoso-detail.component.html',
})
export class AmistosoDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param editorialService The editorial's service
  * @param route The route element which helps to obtain the editorial's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private amistosoService: AmistosoService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  @Input() amistosoDetail: AmistosoDetail;



  /**
  * The editorial's id retrieved from the address
  */
  amistoso_id: number;

  /**
  * The method which retrieves the books of an editorial
  */
  getAmistosoDetail(): void {
    this.amistosoService.getAmistosoDetail(this.amistoso_id)
      .subscribe(amistosoDetail => {
        this.amistosoDetail = amistosoDetail
      });
  }

  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
  ngOnInit() {
    this.amistoso_id = +this.route.snapshot.paramMap.get('id');
    if (this.amistoso_id) {
      this.amistosoDetail = new AmistosoDetail();
      this.getAmistosoDetail();
    }

  }
}