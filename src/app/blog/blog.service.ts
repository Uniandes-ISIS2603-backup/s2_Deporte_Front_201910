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
 import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {Blog} from './blog';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import { BlogDetail } from './blog-detail';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const blogs = '/blog';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class BlogService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
    getBlogs(): Observable<Blog[]> {
        return this.http.get<Blog[]>(API_URL + blogs);
    }
    
     getBlogDetail(blogName): Observable<BlogDetail> {
        return this.http.get<BlogDetail>(API_URL + blogs + "/" + blogName);    }

        createBlog(blog): Observable<Blog> {
            return this.http.post<Blog>(API_URL + blogs, blog);
        }
    updateBlog(blog): Observable<BlogDetail> {
        return this.http.put<BlogDetail>(API_URL + blogs + '/' + blog.id, blog);
    }
    deleteBlog(blogId): Observable<BlogDetail> {
        return this.http.delete<BlogDetail>(API_URL + blogs + '/' + blogId);
    }
}