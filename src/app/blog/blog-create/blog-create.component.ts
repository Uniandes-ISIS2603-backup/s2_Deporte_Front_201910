/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

import { BlogService } from '../blog.service';

import { Blog } from '../blog';

@Component({
    selector: 'app-blog-create',
    templateUrl: './blog-create.component.html',
    styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param blogService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private blogService: BlogService,
        private toastrService: ToastrService
    ) { }

    /**
    * The new editorial
    */
    blog: Blog;

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
    createEditorial(): void {
        this.blogService.createBlog(this.blog)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The blog was created", "Blog creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
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
        this.blog = new Blog();
    }
}