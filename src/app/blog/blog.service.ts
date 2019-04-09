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

const API_URL = "../../assets/";
const blogs = '/blogs.json';

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
    
     getBlogDetail(blogName): Observable<BlogDetailComponent> {
        return this.http.get<BlogDetailComponent>(API_URL + "data-" + blogName+".json");
    }

 createBlog(blog): Observable<BlogDetailComponent> {
        return this.http.post<BlogDetailComponent>(API_URL + blogs, blog);
    }
}