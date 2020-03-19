import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-menu-sidebar",
  templateUrl: "./menu-sidebar.component.html",
  styleUrls: ["./menu-sidebar.component.scss"]
})
export class MenuSidebarComponent implements OnInit {
  toggleNav = false;

  @Output() sidebarClick = new EventEmitter();

  displayNav = 'none';

  @Input() boolVal;
  constructor() {}

  closeSidebar() {
    this.sidebarClick.emit(false);
  }

  toggleNavbar() {
    this.toggleNav = !this.toggleNav;
    if (this.toggleNav && window.innerWidth < 800) {
      this.displayNav = 'block';
    } else {
      this.displayNav = 'none';
    }
  }

  ngOnInit(): void {}
}
