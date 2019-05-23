/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { PostDetail } from '../post-detail';
import { Blog } from '../../blog/blog';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  /**
  * The component's constructor
  * @param postServise The post's service
  * @param route The route element which helps to obtain the post's id
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ) { }

  /**
  * The post whose details we want to show
  */
   postDetail: PostDetail;

blog:Blog;

  /**
  * The post's id retrieved from the address
  */
  @Input() blog_id: number;
  
  loader: any;

  /**
  * The method which retrieves the books of an post
  */
  getPostDetail(): void {
    this.postService.getPostDetail(this.blog_id)
      .subscribe(o => {
        this.postDetail = o
      });
  }

onLoad(params) {

    this.blog_id = parseInt(params['id']);
    console.log(" en detail " + this.blog_id);
    this.postDetail = new PostDetail();
    this.getPostDetail();
  }
  /**
  * The method which initializes the component
  * We need to initialize the post so it is never considered as undefined
  */
 ngOnInit() {
  this.blog_id = +this.route.snapshot.paramMap.get('id');

    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }
}


