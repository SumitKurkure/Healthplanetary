import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';



@NgModule({
  declarations: [
    NewPostComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
