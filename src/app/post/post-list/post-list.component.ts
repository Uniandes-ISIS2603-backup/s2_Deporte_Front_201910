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
import {Component, OnInit, ViewContainerRef,Input} from '@angular/core';
import {Post} from '../post';
import {PostService} from '../post.service';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';
 import {Router} from '@angular/router';

/**
 * The component for the list of posts in the BookStore
 */
@Component({
    selector: 'app-post',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

    /**
     * Constructor for the component
     * @param postService The author's services provider
     */
    constructor(private postService: PostService,private router: Router,private modalDialogService: ModalDialogService,private viewRef: ViewContainerRef,private toastrService: ToastrService) {}

    /**
     * The list of posts wahich belong to the BookStore
     */
   @Input() posts: Post[];
    
    showCreate: boolean;
    
    showEdit: boolean;
    
    post_edit_id: number;

    /**
     * Asks the service to update the list of posts
     */
    getPosts(): void {
        this.postService.getPosts()
            .subscribe(posts => this.posts = posts);
    }

    /**
     * This will initialize the component by retrieving the list of posts from the service
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
     showHideEdit(post_id: number): void {
         if (!this.showEdit || (this.showEdit && post_id != this.post_edit_id)) {
            this.showCreate = false;
            this.showEdit = true;
            this.post_edit_id = post_id;
        }
        else {
            this.showEdit = false;
        }
    }
    
     deletePost(postId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a campeonato',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this post?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.postService.deletePost(postId).subscribe(() => {
                            this.toastrService.error("The post was successfully deleted", "Post deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }
}




