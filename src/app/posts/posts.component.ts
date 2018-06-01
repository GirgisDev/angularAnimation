import { PostsService } from './../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsService.getAll().subscribe(res => {
      this.posts = res;
    })
  }

  createPost(input: HTMLInputElement) {
    let post = { title: input.value }
    input.value = '';
    this.postsService.create(post)
      .subscribe(res => {
        post['id'] = res.id;
        this.posts.splice(0, 0, post);
      }, err => {
        console.error(err);
      })
  }

  navigateToLogin () {
    this.router.navigate(['/login'], {
      queryParams: {
        page: 1,
        order: 'newest'
      }
    });
  }

}
