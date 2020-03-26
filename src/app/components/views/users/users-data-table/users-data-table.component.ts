import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskEntry} from "../../../../models/taskEntryModel";
import {Subscription} from "rxjs";
import {UserHistoryService} from "../../../../services/user-history/user-history.service";

@Component({
  selector: 'app-users-data-table',
  templateUrl: './users-data-table.component.html',
  styleUrls: ['./users-data-table.component.scss']
})
export class UsersDataTableComponent implements OnInit, OnDestroy {

  tasks: Array<TaskEntry> = [];
  currentMonthName: string = new Date().toLocaleString('default', { month: 'long' });
  taskDataSubscription: Subscription;

  totalWorkedTime: number = 0;

  constructor(private historyService: UserHistoryService) {
  }

  ngOnInit(): void {
    this.doGetTableData();
}

private doCountTotalWorkedTime() {
    this.totalWorkedTime = this.tasks.reduce((a, b) => a + (b.timeSpent || 0), 0);
  }

private doGetTableData() {
    this.taskDataSubscription = this.historyService.doListenForUserTaskHistory().subscribe(res => {
      if(res) {
        const { entries, name } = res;
        this.tasks = entries.tasks;
        this.currentMonthName = name;

        this.doCountTotalWorkedTime()
      }
    });

    this.historyService.doGetUserTaskHistoryForMonth(1);
  }

  ngOnDestroy(): void {
    this.taskDataSubscription.unsubscribe();
  }
}
