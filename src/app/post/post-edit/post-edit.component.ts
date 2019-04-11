/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

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
    * @param postService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private postService: PostService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() post_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new editorial
    */
    @Output() update = new EventEmitter();

    /**
    * The editorial to edit
    */
    post: PostDetail;

    /**
    * Retrieves the information of the editorial
    */
    getPost(): void {
        this.postService.getPostDetail(this.post_id)
            .subscribe(post => {
                this.post = post;
            });
    }

    /**
    * Updates the editorial's information
    */
    editPost(): void {
        this.postService.updatePost(this.post)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The post's information was updated", "Post edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the editorial
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.post = new PostDetail();
        this.getPost();
    }

    /**
    * The function which is called every time the user chooses to edit a different editorial
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}