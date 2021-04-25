import { Component, OnInit } from '@angular/core';
import {PostsService} from '../shared/services/posts.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css']
})
export class UpdatesComponent implements OnInit {

  constructor(private postsService: PostsService ) { }

  postlist = [] as any;
  ngOnInit(): void {

    this.postlist = this.postsService.getUpdates();
  };


}
