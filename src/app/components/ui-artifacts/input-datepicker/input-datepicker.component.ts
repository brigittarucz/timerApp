import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-datepicker',
  templateUrl: './input-datepicker.component.html',
  styleUrls: ['./input-datepicker.component.scss']
})
export class InputDatepickerComponent implements OnInit {
  @Input() labelText: string;

  constructor() {}

  ngOnInit(): void {
  }

}
