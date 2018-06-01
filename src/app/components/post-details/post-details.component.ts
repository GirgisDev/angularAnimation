import { PostsService } from './../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postId;
  post;
  constructor(private route: ActivatedRoute, private postsService: PostsService) {
    
  }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.postId = params.get('id');
        this.postsService.getOne(this.postId)
          .subscribe(res => {
            this.post = res;
          })
      })
  }

}
