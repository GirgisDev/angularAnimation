import { AppErrorHandler } from './common/app-error-handler';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SummaryPipe } from './pipes/summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { JunkComponent } from './junk/junk.component';
import { CoursesComponent } from './courses/courses.component';
import { PhoneFormatDirective } from './directives/phone-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

import { PostsService } from './services/posts.service';
import { DataService } from './services/data.service';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe,
    FavoriteComponent,
    BootstrapPanelComponent,
    JunkComponent,
    CoursesComponent,
    PhoneFormatDirective,
    ContactFormComponent,
    SignupFormComponent,
    LoginFormComponent,
    PostsComponent,
    NavbarComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, 
    RouterModule.forRoot([
      {
        path: '',
        component: PostsComponent
      },
      {
        path: 'post/:id',
        component: PostDetailsComponent
      },
      {
        path: 'login',
        component: LoginFormComponent
      }
    ])
  ],
  providers: [ 
    PostsService,
    DataService, {provide: 'API_BASE_URL', useValue: 'http://jsonplaceholder.typicode.com/'},
    { provide: ErrorHandler, useClass: AppErrorHandler } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
