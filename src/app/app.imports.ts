import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {RouterPaths} from './app.router';

export const Imports = [
  BrowserModule,
  RouterModule.forRoot(RouterPaths),
  BrowserAnimationsModule,
  MatButtonToggleModule,
];
