import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/list-posts/post-list.component';
import { PostCreateComponent } from './posts/create-posts/posts-create.component';
import { SignInComponent } from './posts/auth/sign-in/sign-in-component';
import { SignUpComponent } from './posts/auth/sign-up/sign-up.component';
import { AuthRoutingGuardService } from './posts/auth/auth-routing-gaurd-servive';
import { PageNotFoundComponent } from 'src/page-not-found/page-not-found-component';

const routes:Routes=[
    {path:'',component:PostListComponent},
    {path:'create',canActivate:[AuthRoutingGuardService],component:PostCreateComponent},
    {path:'edit/:id',canActivate:[AuthRoutingGuardService],component:PostCreateComponent},
    {path:'sign-in',component:SignInComponent},
    {path:'sign-up',component:SignUpComponent},
    {path:'**',component:PageNotFoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
    providers:[AuthRoutingGuardService]
})
export class AppRoutingModule{

}