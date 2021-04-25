import { Injectable } from '@angular/core';
import {IPost} from '../interfaces/post.model';
import {Subject} from 'rxjs';
import {FAKE_POSTS_LIST} from '../constants/posts.constant';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public list: IPost[] = FAKE_POSTS_LIST;
  public postUpdated$ = new Subject();

  constructor() { }

  getPosts(): IPost[] {
    return this.list;
  }

  getInterview(): IPost[] {
    const postList: IPost[] = this.list.filter((ele) => {
      return ele.category === 'inteview';
    });

    return postList;
  }

  getUpdates(): any[] {
    const postList = [] = this.list.filter((ele) => {
      return ele.category === 'updates';
    });

    return postList;
  }

  getEvents(): IPost[] {
    const postList: IPost[] = this.list.filter((ele) => {
      return ele.category === 'events';
    });

    return postList;
  }

  getPostById(id: number): IPost {
    const postIndex: number = this.list.findIndex(elem => elem.id === id);
    console.log(postIndex);
    return this.list[postIndex];
  }

  create(post: IPost): void {
    post.id = 0;
    if (this.list.length > 0) {
      post.id = this.list.slice(-1)[0].id + 1;
    }
    this.list.push(post);
    this.postUpdated$.next('updated');
  }
}
