import { Injectable } from '@angular/core';
import { TaskEntry } from '../../models/taskEntryModel';
import { Observable, Subject } from 'rxjs';
import { ConnectedUser } from 'src/app/models/connectedUserModel';

@Injectable({
	providedIn: 'root'
})
export class UserHistoryService {
	historyStorageMap = new Map<number, any>();

	userTaskHistorySubject = new Subject<any>();

	currentMonth = 1;

	mockCheckInOut = [];

	mockTasks1: Array<TaskEntry> = [
		{
			date: new Date(),
			department: 'SEO',
			category: 'category',
			client: 'client',
			project: 'project',
			timeSpent: 23432443
		},
		{
			date: new Date(),
			department: 'Analytics',
			category: 'category',
			client: 'client',
			project: 'project',
			timeSpent: 233232323
		},
		{
			date: new Date(),
			department: 'Development',
			category: 'category',
			client: 'client',
			project: 'project',
			timeSpent: 234232
		},
		{
			date: new Date(),
			department: 'Finance',
			category: 'category',
			client: 'client',
			project: 'project',
			timeSpent: 102232
		}
	];
	mockTasks2: Array<TaskEntry> = [
		{
			date: new Date(),
			department: 'Finance',
			category: 'category',
			client: 'client',
			project: 'project',
			timeSpent: 102232
		},
		{
			date: new Date(),
			department: 'Development',
			category: 'category',
			client: 'client',
			project: 'project',
			timeSpent: 234232
		},
		{
			date: new Date(),
			department: 'Analytics',
			category: 'category',
			client: 'client',
			project: 'project',
			timeSpent: 233232323
		},
		{
			date: new Date(),
			department: 'SEO',
			category: 'category',
			client: 'client',
			project: 'project',
			timeSpent: 23432443
		}
	];

	mockHistory = [
		{
			name: 'January',
			year: 2019,
			entries: {
				checkInOut: [],
				tasks: [ ...this.mockTasks1 ]
			}
		},
		{
			name: 'February',
			year: 2019,
			entries: {
				checkInOut: [],
				tasks: [ ...this.mockTasks2 ]
			}
		},
		{}
	];

	constructor() {
		this.mockHistory.forEach((value, key) => {
			this.historyStorageMap.set(key + 1, value);
		});
	}

	mockConnectedUsers: ConnectedUser[] = [
		{ office: 'copenhagen', name: 'Damian G', title: 'Developer' },
		{ office: 'copenhagen', name: 'Sarah T', title: 'Technical Intern' },
		{ office: 'copenhagen', name: 'Damian G', title: 'Developer' },
		{ office: 'copenhagen', name: 'Damian G', title: 'Developer' },
		{ office: 'copenhagen', name: 'Sarah T', title: 'Technical Intern' },
		{ office: 'copenhagen', name: 'Damian G', title: 'Developer' },
		{ office: 'budapest', name: 'Sarah T', title: 'Technical Intern' },
		{ office: 'budapest', name: 'Damian G', title: 'Developer' },
		{ office: 'budapest', name: 'Sarah T', title: 'Technical Intern' },
		{ office: 'new-york', name: 'Damian G', title: 'Developer' },
		{ office: 'new-york', name: 'Sarah T', title: 'Technical Intern' }
	];

	doGetConnectedUsers(office: string) {
		let officeUsers: ConnectedUser[] = [];
		this.mockConnectedUsers.forEach((user) => {
			if (user.office === office) {
				officeUsers.push(user);
			}
		});
		return officeUsers;
	}

	doGetUserTaskHistoryForMonth(monthIndex: number) {
		try {
			this.userTaskHistorySubject.next(this.historyStorageMap.get(monthIndex));
		} catch (e) {
			console.error(e);
		}
	}

	doListenForUserTaskHistory(): Observable<any> {
		return this.userTaskHistorySubject.asObservable();
	}
}
