import {AppComponent} from './components/root-view/app.component';
import {NavigationBarComponent} from './components/ui-artifacts/navigation-bar/navigation-bar.component';
import {MenuSidebarComponent} from './components/ui-artifacts/menu-sidebar/menu-sidebar.component';
import {ProfileQuickviewComponent} from './components/ui-artifacts/profile-quickview/profile-quickview.component';
import {MenuSidebarDesktopComponent} from './components/ui-artifacts/menu-sidebar-desktop/menu-sidebar-desktop.component';
import {TrackingComponent} from './components/views/tracking/tracking.component';
import {UserHistoryComponent} from './components/views/user-history/user-history.component';
import {ActivityComponent} from './components/views/activity/activity.component';
import {ProjectHistoryComponent} from './components/views/project-history/project-history.component';
import {FormSettingComponent} from './components/ui-artifacts/form-setting/form-setting.component';
import {UsersComponent} from './components/views/users/users.component';
import {ClientsProjectsComponent} from './components/views/clients-projects/clients-projects.component';
import {UserAccessComponent} from './components/views/user-access/user-access.component';
import {HistoryDataTableComponent} from './components/views/user-history/history-data-table/history-data-table.component';
import {HistoryFilterFormComponent} from './components/views/user-history/history-filter-form/history-filter-form.component';
import {TimerVisualComponent} from "./components/views/tracking/timer-visual/timer-visual.component";
import {ModalTrackingComponent} from "./components/ui-artifacts/modal-tracking/modal-tracking.component";
import {TimerCounterComponent} from "./components/views/tracking/timer-counter/timer-counter.component";
import {TasksDoneComponent} from "./components/views/tracking/tasks-done/tasks-done.component";
import {AddTaskFieldComponent} from "./components/ui-artifacts/add-task-tracking/add-task-field/add-task-field.component";
import {AddTaskTrackingComponent} from "./components/ui-artifacts/add-task-tracking/add-task-tracking.component";
import { ActivityFilterFormComponent } from './components/views/activity/activity-filter-form/activity-filter-form.component';
import { ActivityDataTableComponent } from './components/views/activity/activity-data-table/activity-data-table.component';

export const Components = [
  AppComponent,
  NavigationBarComponent,
  MenuSidebarComponent,
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
];


export const EntryComponents = [
  ModalTrackingComponent,
];
