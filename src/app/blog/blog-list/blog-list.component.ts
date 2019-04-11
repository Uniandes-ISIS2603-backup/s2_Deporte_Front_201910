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
import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';
import {ModalDialogService} from 'ngx-modal-dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
    selector: 'app-blog',
    templateUrl: './blog-list.component.html',
    styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private blogService: BlogService, private router: Router,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService) {}

    /**
     * The list of editorials wahich belong to the BookStore
     */
    blogs: Blog[];
    
    blog_edit_id: number;

 /**
    * Shows or hides the create component
    */
    showCreate: boolean;

    showEdit: boolean;

    /**
     * Asks the service to update the list of editorials
     */
    getBlogs(): void {
        this.blogService.getBlogs()
            .subscribe(blogs => this.blogs = blogs);
    }

 /**
    * Shows or hides the create component
    */
   showHideCreate(): void {
    this.showEdit = false;
    this.showCreate = !this.showCreate!
}

showHideEdit(editorial_id: number): void {
    if (!this.showEdit || (this.showEdit && editorial_id != this.blog_edit_id)) {
       this.showCreate = false;
       this.showEdit = true;
       this.blog_edit_id = editorial_id;
   }
   else {
       this.showEdit = false;
   }
}
    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.showCreate = false;
        this.showEdit = false;
         this.getBlogs();
    }    
}





