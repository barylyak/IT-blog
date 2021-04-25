import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerComponent } from './burger/burger.component';
import { ContentComponent } from './content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { InterviewComponent } from './interview/interview.component';
import { UpdatesComponent } from './updates/updates.component';
import { EventsComponent } from './events/events.component';
import { SidebarModule } from 'ng-sidebar';
import { PostsService } from './shared/services/posts.service';
import { PostUpdateComponent } from './post-update/post-update.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

const material = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatOptionModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    BurgerComponent,
    ContentComponent,
    InterviewComponent,
    UpdatesComponent,
    EventsComponent,
    PostUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    SidebarModule.forRoot(),
    ReactiveFormsModule,
    ...material
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
