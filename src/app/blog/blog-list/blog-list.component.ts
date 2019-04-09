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
 import {Component, OnInit} from '@angular/core';
import {Blog} from '../blog';
import {BlogService} from '../blog.service';

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
    constructor(private blogService: BlogService) {}

    /**
     * The list of editorials wahich belong to the BookStore
     */
    blogs: Blog[];

 /**
    * Shows or hides the create component
    */
    showCreate: boolean;

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
        this.showCreate = !this.showCreate!
    }
    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getBlogs();
        this.showCreate = false;
    }
}





