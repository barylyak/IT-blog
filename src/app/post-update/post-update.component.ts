import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../shared/services/posts.service';
import {MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {

  // @ts-ignore
  postForm: FormGroup;
  postCategories = [
    {
      id: 1,
      name: 'inteview'
    },
    {
      id: 2,
      name: 'updates'
    },
    {
      id: 3,
      name: 'events'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private postService: PostsService,
    public dialogRef: MatDialogRef<PostUpdateComponent>
  ) { }

  ngOnInit(): void {
    this.initPostForm();
  }

  initPostForm(): void {
    this.postForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      category: [null, Validators.required],
      img: [null, Validators.required]
    });
  }

  createPost(): void {
    const post = {
      ...this.postForm.value
    };
    console.log(post);
    this.postService.create(post);
    this.dialogRef.close();
  }

}
