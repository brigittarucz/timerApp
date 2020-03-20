import { Injectable } from '@angular/core';
import {TaskEntry} from "../../models/taskEntryModel";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserHistoryService {
  historyStorageMap = new Map<number, any>();

  userTaskHistorySubject = new Subject<any>();

  currentMonth = 1;

  mockCheckInOut = [

  ];

  mockTasks1: Array<TaskEntry> = [
    {
      date: new Date(),
      department: 'awdawd',
      category: 'awd',
      client: 'awdawd',
      project: 'awd',
      timeSpent: 23432443,
    },
    {
      date: new Date(),
      department: 'vdfvdfv',
      category: 'rd',
      client: '33',
      project: 'awd',
      timeSpent: 233232323,
    },
    {
      date: new Date(),
      department: '22',
      category: '33',
      client: 'aw',
      project: 'awd',
      timeSpent: 234232,
    },
    {
      date: new Date(),
      department: 'awdaqwd',
      category: 'a23wd',
      client: 'awdaw23d',
      project: 'awd',
      timeSpent: 102232,
    }
  ];
  mockTasks2: Array<TaskEntry> = [
    {
      date: new Date(),
      department: 'awdawd',
      category: 'awd',
      client: 'awdawd',
      project: 'awd',
      timeSpent: 10232,
    },
    {
      date: new Date(),
      department: 'awdawd',
      category: 'rd',
      client: '6sdr',
      project: 'awd',
      timeSpent: 10232,
    },
    {
      date: new Date(),
      department: '22',
      category: '33',
      client: 'aw',
      project: 'awd',
      timeSpent: 102332,
    },
    {
      date: new Date(),
      department: 'awdaqwd',
      category: 'a23wd',
      client: 'awdaw23d',
      project: 'awd',
      timeSpent: 102232,
    }
  ];

  mockHistory = [
    {
      name: 'January',
      year: 2019,
      entries: {
        checkInOut: [

        ],
        tasks: [
          ...this.mockTasks1
        ],
      }
    },
    {
      name: 'February',
      year: 2019,
      entries: {
        checkInOut: [

        ],
        tasks: [
          ...this.mockTasks2
        ],
      }
    },
    {},
  ];

  constructor() {
    this.mockHistory.forEach((value, key) => {
      this.historyStorageMap.set(
        key + 1,
        value
      )
    })
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
