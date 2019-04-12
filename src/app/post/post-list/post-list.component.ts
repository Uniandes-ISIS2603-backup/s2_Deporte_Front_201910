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
import {Post} from '../post';
import {PostService} from '../post.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
 import {Router} from '@angular/router';

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
    constructor(private postService: PostService,private router: Router,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService) {}

    /**
     * The list of editorials wahich belong to the BookStore
     */
    posts: Post[];
    
    showCreate: boolean;
    
    showEdit: boolean;
    
    post_edit_id: number;

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
        this.showCreate = false;
        this.showEdit = false;
         this.getPosts();
    }    
    updatePost(): void {
        this.showEdit = false;
    }
    showHideCreate(): void {
        this.showEdit = false;
        this.showCreate = !this.showCreate!
    }
     showHideEdit(editorial_id: number): void {
         if (!this.showEdit || (this.showEdit && editorial_id != this.post_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.post_edit_id = editorial_id;
        }
        else {
            this.showEdit = false;
        }
    }
}




