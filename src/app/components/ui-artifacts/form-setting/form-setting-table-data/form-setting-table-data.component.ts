import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskEntry} from "../../../../models/taskEntryModel";
import {Subscription} from "rxjs";
import {UserHistoryService} from "../../../../services/user-history/user-history.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-form-setting-table-data',
  templateUrl: './form-setting-table-data.component.html',
  styleUrls: ['./form-setting-table-data.component.scss']
})
export class FormSettingTableDataComponent implements OnInit, OnDestroy {

  tasks: Array<TaskEntry> = [];
  currentMonthName: string = new Date().toLocaleString('default', { month: 'long' });
  taskDataSubscription: Subscription;

  totalWorkedTime: number = 0;

  constructor(private historyService: UserHistoryService, private router: Router) {
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

  async doGoTo(path: string, id?: string) {
    if (path) {
      try {
        await this.router.navigate([path, {id: id || null}]);
      } catch(e) {

      }
    }
  }
}
