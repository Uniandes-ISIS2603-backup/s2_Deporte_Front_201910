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

import {PostListComponent } from './post-list/post-list.component';
import {PostService} from './post.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {PostDetailComponent} from './post-detail/post-detail.component';
import {PostCreateComponent} from './post-create/post-create.component';
import {PostEditComponent} from './post-edit/post-edit.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule
    ],
    declarations: [PostListComponent,PostDetailComponent,PostCreateComponent,PostEditComponent],
    exports: [PostListComponent],
    providers: [PostService]
})
export class PostModule {}





