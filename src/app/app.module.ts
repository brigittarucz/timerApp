import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { ProfileQuickviewComponent } from './profile-quickview/profile-quickview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MenuSidebarComponent,
    ProfileQuickviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
