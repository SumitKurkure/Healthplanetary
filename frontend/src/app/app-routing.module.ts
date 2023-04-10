import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { EditPostComponent } from './dashboard/edit-post/edit-post.component';
import { NewPostComponent } from './dashboard/new-post/new-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmptyComponent } from './empty/empty.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {path : ':category' , component: CategoryComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'post/new', component: NewPostComponent },
      { path: 'post/edit', component: EditPostComponent },
    ]
  },
  { path: 'post/:postId', component: ViewPostComponent },
  {path : '**' , component : EmptyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
