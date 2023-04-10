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
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', redirectTo: '/dashboard/post/all', pathMatch: 'full' },
  { path: 'dashboard/post/new/:newPostId', component: DashboardComponent },
  { path: 'dashboard/post/edit/:editPostId', component: DashboardComponent },
  { path: 'dashboard/post/all', component: DashboardComponent },
  { path: ':category', component: CategoryComponent },
  { path: ':category/:subCategory', component: CategoryComponent },
  { path: '**', component: EmptyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
