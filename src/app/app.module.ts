import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { ProfileQuickviewComponent } from './profile-quickview/profile-quickview.component';
import { MenuSidebarDesktopComponent } from './menu-sidebar-desktop/menu-sidebar-desktop.component';
import { TrackingComponent } from './tracking/tracking.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { ActivityComponent } from './activity/activity.component';
import { ProjectHistoryComponent } from './project-history/project-history.component';
import { FormSettingComponent } from './form-setting/form-setting.component';
import { UsersComponent } from './users/users.component';
import { ClientsProjectsComponent } from './clients-projects/clients-projects.component';
import { UserAccessComponent } from './user-access/user-access.component';

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
    UserAccessComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
