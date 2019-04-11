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
import {PostDetail} from './post-detail';


import {Post} from './post';
import {environment} from '../../environments/environment';

const API_URL = environment.apiURL;
const posts = '/post';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class PostService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) {}

    /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
    getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(API_URL + posts);
}

getPostDetail(postName): Observable<PostDetail> {
    return this.http.get<PostDetail>(API_URL + posts + "/" + postName);
}

createPost(post): Observable<Post> {
    return this.http.post<Post>(API_URL + posts, post);
}

updatePost(post): Observable<PostDetail> {
        return this.http.put<PostDetail>(API_URL + posts + '/' + post.id, post);
    }

    deletePost(postId): Observable<PostDetail> {
        return this.http.delete<PostDetail>(API_URL + posts + '/' + postId);
    }

}