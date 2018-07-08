import { Injectable } from '@angular/core';
import { WpApiPosts } from 'wp-api-angular';
@Injectable({
  providedIn: 'root'
})
export class WpService {

  constructor(public wpPosts: WpApiPosts) { }


  getPosts() {
    return  this.wpPosts.getList() 
    // .map(res => Object.values(res)) ;
  }


  getPost(id) {
    return  this.wpPosts.get(id) 
    // .map(res => Object.values(res)) ;
  }
}
