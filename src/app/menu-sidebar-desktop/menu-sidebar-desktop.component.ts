import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu-sidebar-desktop",
  templateUrl: "./menu-sidebar-desktop.component.html",
  styleUrls: ["./menu-sidebar-desktop.component.css"]
})
export class MenuSidebarDesktopComponent implements OnInit {
  itIsTrue = true;
  selectedButton;

  constructor() {}

  classesArr = [
    "icon_tracking",
    "icon_user-history",
    "icon_activity",
    "icon_project-history",
    "icon_form-setting",
    "icon_users",
    "icon_clients-projects",
    "icon_user-access"
  ];

  classesImgArr = [
    "tracking-icon",
    "userhistory-icon",
    "activity-icon",
    "projectshistory-icon",
    "taskformsettings-icon",
    "users-icon",
    "clients&projects-icon",
    "useraccess-icon"
  ];

  routesArr = [
    "",
    "/user-history",
    "/activity",
    "/project-history",
    "/form-setting",
    "/users",
    "/clients-projects",
    "/user-access"
  ];

  ngOnInit(): void {}

  onSelect(clicked) {
    this.selectedButton = clicked.target.classList[1];
  }
}
