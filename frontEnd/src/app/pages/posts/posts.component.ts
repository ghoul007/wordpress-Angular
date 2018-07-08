import { Component, OnInit } from '@angular/core';
import { WpService } from '../../services/wp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any = [];
  constructor(private wpService: WpService, public router: Router) { }

  ngOnInit() {
    this.wpService.getPosts().subscribe(res => this.posts = Object.values(JSON.parse(res['_body'])));
  }


  singlePost(id: number) {
    console.log(id);
    this.router.navigate(['', id])
  }
}
