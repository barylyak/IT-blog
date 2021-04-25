import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InterviewComponent} from './interview/interview.component';
import {UpdatesComponent} from './updates/updates.component';
import {EventsComponent} from './events/events.component';
import {ContentComponent} from './content/content.component';

const routes: Routes = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: 'interview',
    component: InterviewComponent
  },
  {
    path: 'updates',
    component: UpdatesComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./post/post.module').then(m => m.PostModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
