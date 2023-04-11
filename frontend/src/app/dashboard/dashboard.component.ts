import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../Service/app.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public sidebarData: any = [
    {
      label: 'New Post',
      value: 'new',
      route: 'dashboard/post/new'
    },
    {
      label: 'Edit Post',
      value: 'edit',
      route: 'dashboard/post/edit/2'
    },
    {
      label: 'All Post',
      value: 'all',
      route: 'dashboard/post/all'
    },
    {
      label: 'Logout',
      value: 'logout',
    }
  ];
  public newPostId: any;
  public editPostId: any;
  public activeSidebarTab: any = 'new';
  public allPostList: any;

  constructor(private router: Router, private activeRoute: ActivatedRoute, private appService: AppService) {
  }
  ngOnInit(): void {
    this.activeSidebarTab = this.activeRoute?.snapshot?.url[2].path;
    if (this.activeSidebarTab === 'all') {
      this.showAllPost();
    }
  }
  sidebarClick(item: any) {
    if (!item) {
      return;
    }
    this.activeSidebarTab = item.value;
    switch (item.value) {
      case 'new':
        this.autoPostIdGenerator(item);
        break;
      case 'edit':
        this.editPost(item);
        break;
      case 'all':
        this.showAllPost(item);
        break;
      case 'logout':
        this.logout();
    }
  }
  logout() {
    sessionStorage.clear();
    localStorage.clear();
    let route = {
      route: '/'
    }
    this.routeTo(route);
  }
  autoPostIdGenerator(route: any) {
    try {
      this.newPostId = (Math.random() * 1000).toFixed(0);
      this.newPostId = parseInt(this.newPostId);
      this.routeTo(route);
    } catch (error) {
      console.error(error);
    }
  }
  editPost(item: any) {
    try {
      this.routeTo(item);
    } catch (error) {
      console.error(error);
    }
  }
  showAllPost(item?: any) {
    try {
      this.appService.getAllPostData().subscribe((res) => {
        if (res.status === 'success') {
          this.allPostList = res.data;
          this.routeTo(item);
        }
      });
    } catch (error) {
      console.error(error);
    }
  }
  routeTo(route: any) {
    if (route) {
      if (route.value === 'new') {
        let url = route.route + '/' + this.newPostId;
        this.router.navigate([url]);
        return;
      }
      this.router.navigate([route.route]);
    }
  }
}
