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
import {Post} from '../post';
import {PostService} from '../post.service';

/**
 * The component for the list of editorials in the BookStore
 */
@Component({
    selector: 'app-post',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private postService: PostService) {}

    /**
     * The list of editorials wahich belong to the BookStore
     */
    posts: Post[];

    /**
     * Asks the service to update the list of editorials
     */
    getPosts(): void {
        this.postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getPosts();
    }
}




