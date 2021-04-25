import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postId = 0;
  post: any;
  post$: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService
  ) {
    this.loadId();
  }

  ngOnInit(): void {
    this.loadPost(this.postId);
  }

  loadId(): void {
    this.post$ = this.route.params.subscribe((param) => {
      this.postId = +param.id;
    });
    console.log(this.postId);
  }

  loadPost(id: number): void {
    this.post = this.postService.getPostById(id);
    console.log(this.post);
  }
}
