import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-filter-form',
  templateUrl: './users-filter-form.component.html',
  styleUrls: ['./users-filter-form.component.scss']
})
export class UsersFilterFormComponent implements OnInit {
  constructor() {}

  dropdownState: Boolean = false;

  toggleDropdown() {
    this.dropdownState = !this.dropdownState;
  }

  ngOnInit(): void {}
}
