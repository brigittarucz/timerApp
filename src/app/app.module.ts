import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import {Components, EntryComponents} from './app.components';
import {Imports} from './app.imports';
import {Providers} from "./app.providers";
import {Pipes} from "./app.pipes";


@NgModule({
  declarations: [
    ...Components,
    ...Pipes,
  ],
  imports: [ ...Imports ],
  providers: [ ...Providers],
  bootstrap: [AppComponent],
  entryComponents: [ ...EntryComponents ]
})
export class AppModule {}
