import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import { Components, EntryComponents } from './app.components';
import { Imports } from './app.imports';
import { Providers } from './app.providers';
import { Pipes } from './app.pipes';
import { FormSettingTableDataComponent } from './components/ui-artifacts/form-setting/form-setting-table-data/form-setting-table-data.component';
import { FormSettingNavigationComponent } from './components/ui-artifacts/form-setting/form-setting-navigation/form-setting-navigation.component';
import { UsersFilterFormComponent } from './components/views/users/users-filter-form/users-filter-form.component';
import { UsersDataTableComponent } from './components/views/users/users-data-table/users-data-table.component';
import { StopTaskModalComponent } from './components/ui-artifacts/stop-task-modal/stop-task-modal.component';
import { SecondsConverterPipe } from './pipes/seconds-converter.pipe';
import { TaskOptionFormatterPipe } from './pipes/task-option-formatter.pipe';
import { FormatCountryPipe } from './pipes/format-country.pipe';
import { UserAccessDataTableComponent } from './components/views/user-access/user-access-data-table/user-access-data-table.component';
import { ClientsProjectsFilterFormComponent } from './components/views/clients-projects/clients-projects-filter-form/clients-projects-filter-form.component';
import { ClientsProjectsDataTableComponent } from './components/views/clients-projects/clients-projects-data-table/clients-projects-data-table.component';
import { LoginComponent } from './components/views/login/login.component';

@NgModule({
	declarations: [
		...Components,
		...Pipes,
		FormSettingTableDataComponent,
		FormSettingNavigationComponent,
		UsersFilterFormComponent,
		UsersDataTableComponent,
		StopTaskModalComponent,
		SecondsConverterPipe,
		TaskOptionFormatterPipe,
		FormatCountryPipe,
		UserAccessDataTableComponent,
		ClientsProjectsFilterFormComponent,
		ClientsProjectsDataTableComponent,
		LoginComponent
	],
	imports: [ ...Imports ],
	providers: [ ...Providers ],
	bootstrap: [ AppComponent ],
	entryComponents: [ ...EntryComponents ]
})
export class AppModule {}
