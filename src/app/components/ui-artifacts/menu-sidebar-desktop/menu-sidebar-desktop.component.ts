import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: "app-menu-sidebar-desktop",
  templateUrl: "./menu-sidebar-desktop.component.html",
  styleUrls: ["./menu-sidebar-desktop.component.scss"]
})
export class MenuSidebarDesktopComponent implements OnInit {
  itIsTrue = true;
  selectedButton;

  @Input() openAnimation;

  constructor() {}

  classesArr: Array<any> = [
    {
      user: [ 'icon_tracking', 'icon_user-history', 'icon_activity' ]
    },
    {
      projects: [ 'icon_project-history' ]
    },
    {
      admin: [ 'icon_form-setting', 'icon_users', 'icon_clients-projects', 'icon_user-access' ]
    }
  ];

  counter = 0;

  classesArr2 = [
    'icon_tracking',
    'icon_user-history',
    'icon_activity',
    'icon_project-history',
    'icon_form-setting',
    'icon_users',
    'icon_clients-projects',
    'icon_user-access'
  ];

  classesImgArr = [
    'tracking-icon',
    'userhistory-icon',
    'activity-icon',
    'projectshistory-icon',
    'taskformsettings-icon',
    'users-icon',
    'clients&projects-icon',
    'useraccess-icon'
  ];

  menuItemText = [
    'Tracking',
    'User History',
    'Activity',
    'Project History',
    'Form Settings',
    'Users',
    'Clients & Projects',
    'User Access'
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
    if (clicked.target.classList[1] === 'container-menu_text') {
      let num = Number(clicked.target.classList[0]);
      this.selectedButton = this.classesArr2[num];
    }
  }
}
