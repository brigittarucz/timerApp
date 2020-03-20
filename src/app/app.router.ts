import { TrackingComponent } from './components/views/tracking/tracking.component';
import { UserHistoryComponent } from './components/views/user-history/user-history.component';
import { ActivityComponent } from './components/views/activity/activity.component';
import { ProjectHistoryComponent } from './components/views/project-history/project-history.component';
import { FormSettingComponent } from './components/ui-artifacts/form-setting/form-setting.component';
import { UsersComponent } from './components/views/users/users.component';
import { ClientsProjectsComponent } from './components/views/clients-projects/clients-projects.component';
import { UserAccessComponent } from './components/views/user-access/user-access.component';
import { AddTaskTrackingComponent } from './components/ui-artifacts/add-task-tracking/add-task-tracking.component';
import { Routes } from '@angular/router';

export const RouterPaths: Routes = [
	{ path: '', component: TrackingComponent },
	{ path: 'user-history', component: UserHistoryComponent },
	{ path: 'activity', component: ActivityComponent },
	{ path: 'project-history', component: ProjectHistoryComponent },
	{ path: 'form-setting', component: FormSettingComponent },
	{ path: 'users', component: UsersComponent },
	{ path: 'clients-projects', component: ClientsProjectsComponent },
	{ path: 'user-access', component: UserAccessComponent },
	{ path: 'add-task', component: AddTaskTrackingComponent }
];
