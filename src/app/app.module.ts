import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import { Components, EntryComponents } from './app.components';
import { Imports } from './app.imports';
import { Providers } from './app.providers';
import { Pipes } from './app.pipes';
import { FormSettingTableDataComponent } from './components/views/form-setting/form-setting-table-data/form-setting-table-data.component';
import { FormSettingNavigationComponent } from './components/views/form-setting/form-setting-navigation/form-setting-navigation.component';
import { UsersFilterFormComponent } from './components/views/users/users-filter-form/users-filter-form.component';
import { UsersDataTableComponent } from './components/views/users/users-data-table/users-data-table.component';
import { StopTaskTrackingModalComponent } from './components/ui-artifacts/stop-task-tracking-modal/stop-task-tracking-modal.component';
import { SecondsConverterPipe } from './pipes/seconds-converter.pipe';
import { TaskOptionFormatterPipe } from './pipes/task-option-formatter.pipe';
import { FormatCountryPipe } from './pipes/format-country.pipe';
import { UserAccessDataTableComponent } from './components/views/user-access/user-access-data-table/user-access-data-table.component';
import { ClientsProjectsFilterFormComponent } from './components/views/clients-projects/clients-projects-filter-form/clients-projects-filter-form.component';
import { ClientsProjectsDataTableComponent } from './components/views/clients-projects/clients-projects-data-table/clients-projects-data-table.component';
import { AddTaskUserHistoryModalComponent } from './components/ui-artifacts/add-task-user-history-modal/add-task-user-history-modal.component';
import { StopBeforeCheckoutModalComponent } from './components/ui-artifacts/stop-before-checkout-modal/stop-before-checkout-modal.component';
import { MinutesToTimePipe } from './pipes/minutes-to-time.pipe';
import { TaskFormModalComponent } from './components/ui-artifacts/task-form-modal/task-form-modal.component';
import { ClientsProjectsModalComponent } from './components/ui-artifacts/clients-projects-modal/clients-projects-modal.component';
import { UserAccessModalComponent } from './components/ui-artifacts/user-access-modal/user-access-modal.component';

@NgModule({
	declarations: [
		...Components,
		...Pipes,
		FormSettingTableDataComponent,
		FormSettingNavigationComponent,
		UsersFilterFormComponent,
		UsersDataTableComponent,
		StopTaskTrackingModalComponent,
		SecondsConverterPipe,
		TaskOptionFormatterPipe,
		FormatCountryPipe,
		UserAccessDataTableComponent,
		ClientsProjectsFilterFormComponent,
		ClientsProjectsDataTableComponent,
		AddTaskUserHistoryModalComponent,
		StopBeforeCheckoutModalComponent,
		MinutesToTimePipe,
		TaskFormModalComponent,
		ClientsProjectsModalComponent,
		UserAccessModalComponent
	],
	imports: [ ...Imports ],
	providers: [ ...Providers ],
	bootstrap: [ AppComponent ],
	entryComponents: [ ...EntryComponents ]
})
export class AppModule {}
