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


  @Input() blog_name: string;

  loader: any;
  /**
  * The method which retrieves the books of an editorial
  */
//  getBlogDetail(): void {
//
//      this.blogService.getBlogDetail(this.blog_name)
//      .subscribe(o => {
//        this.blogDetail = o
//      });
//  }

  onLoad(params) {

//      this.blog_name = parseInt(params['name']);
      console.log(" en detail " + this.blog_name);
    this.blogDetail = new BlogDetail();
//    this.getBlogDetail();
  }

  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}


