/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { BlogDetail } from '../blog-detail';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(private blogService: BlogService,
    private route: ActivatedRoute) { }

  blogDetail: BlogDetail;


  @Input() blog_id: number;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
  getBlogDetail(): void {

      this.blogService.getBlogDetail(this.blog_id)
      .subscribe(o => {
        this.blogDetail = o
      });
  }

  onLoad(params) {

    this.blog_id = parseInt(params['id']);
    console.log(" en detail " + this.blog_id);
    this.blogDetail = new BlogDetail();
    this.getBlogDetail();
  }
  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
 ngOnInit() {
  this.blog_id = +this.route.snapshot.paramMap.get('id');

    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}


