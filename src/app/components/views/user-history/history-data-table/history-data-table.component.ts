import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserHistoryService} from "../../../../services/user-history/user-history.service";
import {TaskEntry} from "../../../../models/taskEntryModel";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-history-data-table',
  templateUrl: './history-data-table.component.html',
  styleUrls: ['./history-data-table.component.scss']
})
export class HistoryDataTableComponent implements OnInit, OnDestroy {

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

  // ************************************


  buttonState = true;

  animState = {
    btn1: true,
    btn2: false,
    currentAnim: "",
    play: false,
  };

  onToggleButton() {
    this.buttonState = !this.buttonState;
    if(this.buttonState) {
      this.animState.btn1 = true;
      this.animState.btn2 = false;

      this.animState.currentAnim = 'btn-switcher__animate__reverse';
      // console.log('Check in got clicked');
    } else {
      this.animState.btn1 = false;
      this.animState.btn2 = true;

      this.animState.currentAnim = 'btn-switcher__animate';
      // console.log('Tasks got clicked')
    }

    this.animState.play = true;
  }
}




