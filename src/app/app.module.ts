import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import {Components} from './app.components';
import {Imports} from './app.imports';


@NgModule({
  declarations: [
    ...Components
  ],
  imports: [ ...Imports ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
