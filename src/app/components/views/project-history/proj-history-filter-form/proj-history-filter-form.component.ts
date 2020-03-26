import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-history-filter-form',
  templateUrl: './proj-history-filter-form.component.html',
  styleUrls: ['./proj-history-filter-form.component.scss']
})
export class ProjHistoryFilterFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  dropdownState: Boolean = false;

  toggleDropdown() {
    this.dropdownState = !this.dropdownState;
  }
}
