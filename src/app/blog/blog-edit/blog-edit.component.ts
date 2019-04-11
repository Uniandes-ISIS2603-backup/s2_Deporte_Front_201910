/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
 import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {BlogService} from '../blog.service';
import {BlogDetail} from '../blog-detail';


@Component({
    selector: 'app-blog-edit',
    templateUrl: './blog-edit.component.html',
    styleUrls: ['./blog-edit.component.css']
})
export class BlogEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param blogService The editorial's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private blogService: BlogService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the editorial that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() blog_id: number;

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
    blog: BlogDetail;

    /**
    * Retrieves the information of the editorial
    */
    getBlog(): void {
        this.blogService.getBlogDetail(this.blog_id)
            .subscribe(o => {
                this.blog = o;
            });
    }

    /**
    * Updates the editorial's information
    */
    editBlog(): void {
        this.blogService.updateBlog(this.blog)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The blog's information was updated", "Blog edition");
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
        this.blog = new BlogDetail();
        this.getBlog();
    }

    /**
    * The function which is called every time the user chooses to edit a different editorial
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}





