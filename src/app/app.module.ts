import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { ProfileQuickviewComponent } from './profile-quickview/profile-quickview.component';
import { MenuSidebarDesktopComponent } from './menu-sidebar-desktop/menu-sidebar-desktop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuSidebarComponent,
    ProfileQuickviewComponent,
    MenuSidebarDesktopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
