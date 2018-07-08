import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WpService } from '../../services/wp.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: any  ;
  postID: number;
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private wpService: WpService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {

      this.postID = res['id'];
      this.wpService.getPost(this.postID ).subscribe(res => this.post = Object.values(JSON.parse(res['_body'])));
    })
  }

}
