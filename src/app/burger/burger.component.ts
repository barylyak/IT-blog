import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {PostUpdateComponent} from '../post-update/post-update.component';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  opened = false;

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  toggleSidebar(): void {
    this.opened = !this.opened
  }

  openDialog(): void {
    this.dialog.open(PostUpdateComponent, {
      backdropClass: 'dialog-backdrop'
    });
  }
}
