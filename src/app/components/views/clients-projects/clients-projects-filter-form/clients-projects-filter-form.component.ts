import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-projects-filter-form',
  templateUrl: './clients-projects-filter-form.component.html',
  styleUrls: ['./clients-projects-filter-form.component.scss']
})
export class ClientsProjectsFilterFormComponent implements OnInit {
  constructor() {}

  dropdownState: Boolean = false;

  toggleDropdown() {
    this.dropdownState = !this.dropdownState;
  }

  ngOnInit(): void {}
}
