import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import {Components, EntryComponents} from './app.components';
import {Imports} from './app.imports';
import {Providers} from "./app.providers";
import {Pipes} from "./app.pipes";
import { FormSettingTableDataComponent } from './components/ui-artifacts/form-setting/form-setting-table-data/form-setting-table-data.component';
import { FormSettingNavigationComponent } from './components/ui-artifacts/form-setting/form-setting-navigation/form-setting-navigation.component';


@NgModule({
  declarations: [
    ...Components,
    ...Pipes,
    FormSettingTableDataComponent,
    FormSettingNavigationComponent,
  ],
  imports: [ ...Imports ],
  providers: [ ...Providers],
  bootstrap: [AppComponent],
  entryComponents: [ ...EntryComponents ]
})
export class AppModule {}
