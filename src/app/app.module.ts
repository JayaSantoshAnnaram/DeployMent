import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/create-posts/posts-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule, MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './posts/list-posts/post-list.component';
import { PostService } from './posts/post-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app.routing-module';
import { SignInComponent } from './posts/auth/sign-in/sign-in-component';
import { SignUpComponent } from './posts/auth/sign-up/sign-up.component';
import { AuthenticationInterceptor } from './posts/auth/auth-interceptor.service';
import { AlertComponent } from './alert.component';
import { SignUpAlertComponent } from './posts/auth/sign-up/sign-up-alert/sign-up-alert.component';



@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    SignInComponent,
    SignUpComponent,
    AlertComponent,
    SignUpAlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatDialogModule
    
  ],
  providers: [PostService,{provide:HTTP_INTERCEPTORS,useClass:AuthenticationInterceptor,multi:true}],
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent,SignUpAlertComponent
  ]
  
})
export class AppModule { }
