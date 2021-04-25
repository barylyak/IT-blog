import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css']
})
export class InterviewComponent implements OnInit {

  constructor(private postsService: PostsService ) { }

  postlist = [] as any;

  ngOnInit(): void {
    this.initSubscription();
    this.loadList();
  }

  initSubscription(): void {
    this.postsService.postUpdated$.subscribe(isUpdated => {
      if (isUpdated) {
        this.loadList();
      }
    });
  }

  loadList(): void {
    this.postlist = this.postsService.getInterview();
  }
}
