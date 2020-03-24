import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: [ './activity.component.scss' ]
})
export class ActivityComponent implements OnInit {
  officeOverviewText: string = 'Offices Overview';
  officeOverview: boolean = false;

  constructor() {}

  ngOnInit(): void {
  }

  changeViewMain() {
    this.officeOverview = !this.officeOverview;
    if (this.officeOverview) {
      this.officeOverviewText = 'Back To The Table';
    } else {
      this.officeOverviewText = 'Offices Overview';
    }
  }


}
