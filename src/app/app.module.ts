import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import {Components, EntryComponents} from './app.components';
import {Imports} from './app.imports';
import {Providers} from "./app.providers";


@NgModule({
  declarations: [
    ...Components
  ],
  imports: [ ...Imports ],
  providers: [ ...Providers],
  bootstrap: [AppComponent],
  entryComponents: [ ...EntryComponents ]
})
export class AppModule {}
