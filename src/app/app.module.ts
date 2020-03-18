import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { MenuSidebarComponent } from "./menu-sidebar/menu-sidebar.component";
import { ProfileQuickviewComponent } from "./profile-quickview/profile-quickview.component";
import { MenuSidebarDesktopComponent } from "./menu-sidebar-desktop/menu-sidebar-desktop.component";
import { TrackingComponent } from "./tracking/tracking.component";
import { UserHistoryComponent } from "./user-history/user-history.component";
import { ActivityComponent } from "./activity/activity.component";
import { ProjectHistoryComponent } from "./project-history/project-history.component";
import { FormSettingComponent } from "./form-setting/form-setting.component";
import { UsersComponent } from "./users/users.component";
import { ClientsProjectsComponent } from "./clients-projects/clients-projects.component";
import { UserAccessComponent } from "./user-access/user-access.component";
import { HistoryDataTableComponent } from './user-history/history-data-table/history-data-table.component';
import { HistoryFilterFormComponent } from './user-history/history-filter-form/history-filter-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

const appRoutes: Routes = [
  { path: "", component: TrackingComponent },
  { path: "user-history", component: UserHistoryComponent },
  { path: "activity", component: ActivityComponent },
  { path: "project-history", component: ProjectHistoryComponent },
  { path: "form-setting", component: FormSettingComponent },
  { path: "users", component: UsersComponent },
  { path: "clients-projects", component: ClientsProjectsComponent },
  { path: "user-access", component: UserAccessComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuSidebarComponent,
    ProfileQuickviewComponent,
    MenuSidebarDesktopComponent,
    TrackingComponent,
    UserHistoryComponent,
    ActivityComponent,
    ProjectHistoryComponent,
    FormSettingComponent,
    UsersComponent,
    ClientsProjectsComponent,
    UserAccessComponent,
    HistoryDataTableComponent,
    HistoryFilterFormComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), BrowserAnimationsModule, MatButtonToggleModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
