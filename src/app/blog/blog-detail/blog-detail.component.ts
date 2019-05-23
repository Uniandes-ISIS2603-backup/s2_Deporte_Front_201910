/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { BlogService } from '../blog.service';
import { Blog } from '../blog';
import { BlogDetail } from '../blog-detail';
import {PostService} from '../../post/post.service';
import { Post } from '../../post/post'
import { PostDetail } from '../../post/post-detail';
import {PostListComponent} from '../../post/post-list/post-list.component'


@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  constructor(private blogService: BlogService,
    private route: ActivatedRoute,
    private postService: PostService) { }

//Blog del detalle 
  blogDetail: BlogDetail;

  posts: Post[];

  @Input() blog_id: number;
  

  loader: any;
  
  
@ViewChild(PostListComponent) historiaComponent: PostListComponent;
  
  
  /**
  * The method which retrieves the books of an editorial
  */
  getBlogDetail(): void {

      this.blogService.getBlogDetail(this.blog_id)
      .subscribe(o => {
        this.blogDetail = o
      });
  }
  
  
  
//   getPostsBlog(){
//        this.postService.getPosts()
//        .subscribe(canchas => {
//            this.posts = canchas;
//            this.posts = this.posts.filter(post => post.blog.id == this.blogDetail.id)
//            
//        });
//    }

 
  /**
  * The method which initializes the component
  * We need to initialize the editorial so it is never considered as undefined
  */
 ngOnInit() {
  this.blog_id = +this.route.snapshot.paramMap.get('id');

     this.blogDetail = new BlogDetail;
     this.getBlogDetail();
//     this.getPostsBlog();
  }

 


}


