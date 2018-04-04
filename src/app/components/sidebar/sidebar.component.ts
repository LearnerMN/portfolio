import { Component, OnInit } from '@angular/core';


declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'about', title: 'About',  icon: 'person', class: '' },
    { path: 'experience', title: 'Experience',  icon: 'center_focus_strong', class: '' },
    { path: 'projects', title: 'Projects',  icon: 'dashboard', class: '' },
    { path: 'skills', title: 'Skills',  icon: 'flash_on', class: '' },
    { path: 'awards', title: 'Awards',  icon: 'grade', class: '' },
    { path: 'education', title: 'Education',  icon: 'school', class: '' },
    // { path: 'contact', title: 'Contact',  icon: 'contacts', class: '' }
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
