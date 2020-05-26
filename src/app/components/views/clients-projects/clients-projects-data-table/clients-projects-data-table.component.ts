import {Component, OnDestroy, OnInit} from '@angular/core';
import {TaskEntry} from "../../../../models/taskEntryModel";
import {Subscription} from "rxjs";
import {UserHistoryService} from "../../../../services/user-history/user-history.service";

@Component({
  selector: 'app-clients-projects-data-table',
  templateUrl: './clients-projects-data-table.component.html',
  styleUrls: ['./clients-projects-data-table.component.scss']
})
export class ClientsProjectsDataTableComponent implements OnInit, OnDestroy {

  tasks: Array<TaskEntry> = [];
  currentMonthName: string = new Date().toLocaleString('default', { month: 'long' });
  taskDataSubscription: Subscription;

  totalWorkedTime: number = 0;

  stateContainer = {
    rowId: null,
  };

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

//  SHOW DROPDOWN - TABLE INCEPTION

  doToggleCollapsible(rowIndex) {
    const rowContent = document.getElementById(`dropDown-${rowIndex}`);
    const row = document.getElementById(`rowInception-${rowIndex}`);
    if(row && rowContent) {
      if(this.stateContainer.rowId === rowIndex) {
        this.doClose(rowIndex);
        return;
      }
      this.doCloseOpenRow();

      row.classList.add('row-active');
      row.classList.remove('row-inactive');
      rowContent.classList.add('open');

      this.stateContainer.rowId = rowIndex;
    }
  }

  doCloseOpenRow() {
    if(this.stateContainer.rowId || this.stateContainer.rowId === 0) {
      this.doClose(this.stateContainer.rowId);
    }
  }

  doClose(rowId) {
    const rowContent = document.getElementById(`dropDown-${rowId}`);
    const row = document.getElementById(`rowInception-${rowId}`);

    if(row && rowContent) {
      row.classList.remove('row-active');
      row.classList.add('row-inactive');
      rowContent.classList.remove('open');

      this.stateContainer.rowId = null;
    }
  }
}
