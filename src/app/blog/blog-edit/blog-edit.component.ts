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
import {Component, OnInit, Input, Output, EventEmitter, OnChanges} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router, ActivatedRoute} from '@angular/router';

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
        private toastrService: ToastrService,
         private router: Router,
        private route: ActivatedRoute
    ) {}

 //Blog a editar
    blog:BlogDetail;
//id del blog
    id:number;

//obtener el blog a editar
    getBlog(){
        this.blogService.getBlogDetail(this.id).subscribe(blog => {
            
            this.blog = blog;
        });
    }

//Actualizar el blog
    updateBlog(): void {
        this.blogService.updateBlog(this.blog)
            .subscribe(() => {
                this.router.navigate(['/blogs/list/']);
                this.toastrService.success("El blog se edito correctamente", 'Blog edition');
            });
    }

//Cancela la edicion del blog
    cancelEdition(): void {
        this.toastrService.warning('El blog no fue editado', 'Blog edition');
        this.router.navigate(['/blogs/list']);
    }

    ngOnInit() {
        this.id = +this.route.snapshot.paramMap.get('id');
        this.getBlog();
    }
}





