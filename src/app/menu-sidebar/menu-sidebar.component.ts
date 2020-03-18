import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-menu-sidebar",
  templateUrl: "./menu-sidebar.component.html",
  styleUrls: ["./menu-sidebar.component.scss"]
})
export class MenuSidebarComponent implements OnInit {
  toggleNav = false;

  @Output() sidebarClick = new EventEmitter();

  displayNav = "none";

  @Input() boolVal;
  constructor() {}

  arrMenuItems = [
    {
      name: "User",
      arr: [
        ["Tracking", "icon_tracking", ""],
        ["User History", "icon_user-history", "/user-history"],
        ["Activity", "icon_activity", "/activity"]
      ]
    },
    {
      name: "Projects",
      arr: [["Project History", "icon_project-history", "/project-history"]]
    },
    {
      name: "Admin",
      arr: [
        ["Form Setting", "icon_form-setting", "/form-setting"],
        ["Users", "icon_users", "/users"],
        ["Clients & Projects", "icon_clients-projects", "/clients-projects"],
        ["User Access", "icon_user-access", "/user-access"]
      ]
    }
  ];

  arrMenuNames = ["User", "Projects", "Admin"];

  closeSidebar() {
    this.sidebarClick.emit(false);
  }

  toggleNavbar() {
    this.toggleNav = !this.toggleNav;
    if (this.toggleNav) {
      this.displayNav = "block";
    } else {
      this.displayNav = "none";
    }
  }

  ngOnInit(): void {}
}
