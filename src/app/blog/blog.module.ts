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
 import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { BlogListComponent } from './blog-list/blog-list.component';
import {BlogService} from './blog.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {BlogCreateComponent} from './blog-create/blog-create.component';
import {BlogEditComponent} from './blog-edit/blog-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [BlogListComponent, BlogDetailComponent,BlogCreateComponent,BlogEditComponent],
    exports: [BlogListComponent],
    providers: [BlogService]
    
})
export class BlogModule {}