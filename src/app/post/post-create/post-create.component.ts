/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { PostService } from '../post.service';

import { Post } from '../post';

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param postService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private postService: PostService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new editorial
    */
    post: Post;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new editorial
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new editorial
    */
   createPost():Post {
    this.postService.createPost(this.post)
        .subscribe((post) => {
            this.post = post;
            this.create.emit();
            this.toastrService.success("The post was created", "Post creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.post;
}
    

    /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
   cancelCreation(): void {
    this.cancel.emit();
}

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.post = new Post();
    }
}


