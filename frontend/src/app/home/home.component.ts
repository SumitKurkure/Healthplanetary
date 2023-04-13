import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public header: any;

  constructor() { }

  ngOnInit(): void {
  }

  searchBar() {

  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    this.header = document.querySelector("#myHeader");
    console.log(this.header.offsetTop);
    
    var sticky = this.header?.offsetTop || 0;
    if (window.pageYOffset > sticky) {
      this.header?.classList.add("sticky");
    } else {
      this.header?.classList.remove("sticky");
    }
  }
}
