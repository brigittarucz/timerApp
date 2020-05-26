import { AppComponent } from './components/root-view/app.component';
import { NavigationBarComponent } from './components/ui-artifacts/navigation-bar/navigation-bar.component';
import { MenuSidebarMobileComponent } from './components/ui-artifacts/menu-sidebar-mobile/menu-sidebar-mobile.component';
import { ProfileQuickviewComponent } from './components/ui-artifacts/profile-quickview/profile-quickview.component';
import { MenuSidebarDesktopComponent } from './components/ui-artifacts/menu-sidebar-desktop/menu-sidebar-desktop.component';
import { TrackingComponent } from './components/views/tracking/tracking.component';
import { UserHistoryComponent } from './components/views/user-history/user-history.component';
import { ActivityComponent } from './components/views/activity/activity.component';
import { ProjectHistoryComponent } from './components/views/project-history/project-history.component';
import { FormSettingComponent } from './components/views/form-setting/form-setting.component';
import { UsersComponent } from './components/views/users/users.component';
import { ClientsProjectsComponent } from './components/views/clients-projects/clients-projects.component';
import { UserAccessComponent } from './components/views/user-access/user-access.component';
import { HistoryDataTableComponent } from './components/views/user-history/history-data-table/history-data-table.component';
import { HistoryFilterFormComponent } from './components/views/user-history/history-filter-form/history-filter-form.component';
import { TimerVisualComponent } from './components/views/tracking/timer-visual/timer-visual.component';
import { ModalTrackingComponent } from './components/ui-artifacts/modal-tracking/modal-tracking.component';
import { TimerCounterComponent } from './components/views/tracking/timer-counter/timer-counter.component';
import { TasksDoneComponent } from './components/views/tracking/tasks-done/tasks-done.component';
import { AddTaskFieldComponent } from './components/ui-artifacts/add-task-tracking/add-task-field/add-task-field.component';
import { AddTaskTrackingComponent } from './components/ui-artifacts/add-task-tracking/add-task-tracking.component';
import { ActivityFilterFormComponent } from './components/views/activity/activity-filter-form/activity-filter-form.component';
import { ActivityDataTableComponent } from './components/views/activity/activity-data-table/activity-data-table.component';
import { ProjHistoryFilterFormComponent } from './components/views/project-history/proj-history-filter-form/proj-history-filter-form.component';
import { ProjHistoryProjectComponent } from './components/views/project-history/proj-history-project/proj-history-project.component';
import { OfficesOverviewComponent } from './components/views/activity/offices-overview/offices-overview.component';
import { ActivityTableComponent } from './components/views/activity/activity-table/activity-table.component';
import {TaskFormModalComponent} from "./components/ui-artifacts/task-form-modal/task-form-modal.component";
import {ClientsProjectsModalComponent} from "./components/ui-artifacts/clients-projects-modal/clients-projects-modal.component";
import {UserAccessModalComponent} from "./components/ui-artifacts/user-access-modal/user-access-modal.component";
import {FormSettingTableDataComponent} from "./components/views/form-setting/form-setting-table-data/form-setting-table-data.component";
import {FormSettingNavigationComponent} from "./components/views/form-setting/form-setting-navigation/form-setting-navigation.component";
import {UsersFilterFormComponent} from "./components/views/users/users-filter-form/users-filter-form.component";
import {UsersDataTableComponent} from "./components/views/users/users-data-table/users-data-table.component";
import {StopTaskTrackingModalComponent} from "./components/ui-artifacts/stop-task-tracking-modal/stop-task-tracking-modal.component";
import {UserAccessDataTableComponent} from "./components/views/user-access/user-access-data-table/user-access-data-table.component";
import {ClientsProjectsFilterFormComponent} from "./components/views/clients-projects/clients-projects-filter-form/clients-projects-filter-form.component";
import {ClientsProjectsDataTableComponent} from "./components/views/clients-projects/clients-projects-data-table/clients-projects-data-table.component";
import {LoginComponent} from "./components/views/login/login.component";
import {AddTaskUserHistoryModalComponent} from "./components/ui-artifacts/add-task-user-history-modal/add-task-user-history-modal.component";
import {StopBeforeCheckoutModalComponent} from "./components/ui-artifacts/stop-before-checkout-modal/stop-before-checkout-modal.component";
import {SelectOptionsComponent} from "./components/ui-artifacts/select-options/select-options.component";

export const Components = [
	AppComponent,
	NavigationBarComponent,
	MenuSidebarMobileComponent,
	ProfileQuickviewComponent,
	MenuSidebarDesktopComponent,
	TrackingComponent,
	UserHistoryComponent,
	ActivityComponent,
	ProjectHistoryComponent,
	FormSettingComponent,
	UsersComponent,
	ClientsProjectsComponent,
	UserAccessComponent,
	HistoryDataTableComponent,
	HistoryFilterFormComponent,
	TimerCounterComponent,
	TasksDoneComponent,
	TimerVisualComponent,
	ModalTrackingComponent,
	AddTaskTrackingComponent,
	AddTaskFieldComponent,
	ActivityFilterFormComponent,
	ActivityDataTableComponent,
	ProjHistoryFilterFormComponent,
	ProjHistoryProjectComponent,
	OfficesOverviewComponent,
	ActivityTableComponent,
  TaskFormModalComponent,
  ClientsProjectsModalComponent,
  UserAccessModalComponent,
  FormSettingTableDataComponent,
  FormSettingNavigationComponent,
  UsersFilterFormComponent,
  UsersDataTableComponent,
  StopTaskTrackingModalComponent,
  UserAccessDataTableComponent,
  ClientsProjectsFilterFormComponent,
  ClientsProjectsDataTableComponent,
  LoginComponent,
  AddTaskUserHistoryModalComponent,
  StopBeforeCheckoutModalComponent,
  SelectOptionsComponent,
];

export const EntryComponents = [ ModalTrackingComponent ];
