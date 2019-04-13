/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';


import {PostService} from '../post.service';
import {PostDetail} from '../post-detail';


@Component({
    selector: 'app-post-edit',
    templateUrl: './post-edit.component.html',
    styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param postService The post's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private postService: PostService,
        private toastrService: ToastrService,
         private router: Router,
        private route: ActivatedRoute
    ) {}

 
    post:PostDetail;

    id:number;

    getPost(){
        this.postService.getPostDetail(this.id).subscribe(post => {
            
            this.post = post;
        });
    }

    updatePost(): void {
        this.postService.updatePost(this.post)
            .subscribe(() => {
                this.router.navigate(['/posts/list/']);
                this.toastrService.success("El post se edito correctamente", 'Post edition');
            });
    }

    cancelEdition(): void {
        this.toastrService.warning('El post no fue editado', 'Post edition');
        this.router.navigate(['/posts/list']);
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getPost();
    }
}