import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-projects-filter-form',
  templateUrl: './clients-projects-filter-form.component.html',
  styleUrls: ['./clients-projects-filter-form.component.scss']
})
export class ClientsProjectsFilterFormComponent implements OnInit {
  constructor() {}


  testOptions = [
    {name: 'Wiredelta'},
    {name: 'PMI'},
    {name: 'Sennheiser'},
    {name: 'Super long name of a client'},
    {name: 'Pepsi'},
    {name: 'Bobs burgers'},
    {name: 'Adobe'},
    {name: 'Moms Spaghetti'}
  ];

  dropdownState: Boolean = false;

  toggleDropdown() {
    this.dropdownState = !this.dropdownState;
  }

  ngOnInit(): void {}
}
