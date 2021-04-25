import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private postsService: PostsService ) { }

  postsList = [] as  any;
  ngOnInit(): void {
    this.postsList = this.postsService.getPosts();
  }
}
