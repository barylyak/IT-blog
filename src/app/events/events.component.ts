import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/services/posts.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private postsService: PostsService ) { }

  postlist = [] as any;
  ngOnInit(): void {
    this.postlist = this.postsService.getEvents();
  }




}
