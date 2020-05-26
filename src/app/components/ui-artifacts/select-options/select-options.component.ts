import {Component, Input, OnInit} from '@angular/core';
class optionType { name: string; id?: string | any }

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss']
})
export class SelectOptionsComponent implements OnInit {
  @Input() labelText: string;
  @Input() options: Array<optionType>;
  @Input() placeholderText: string;

  ID: string;

  isVisible = false;

  constructor() { }

  ngOnInit(): void {
    this.ID = String(this.labelText.toLowerCase() + (Math.round(Math.random() * 10000)))
  }

  public doHideSuggestions(event): void {
    try {
      if(event) event.preventDefault();
      this.isVisible = false;
    } catch (e) {
      throw e;
    }
  }

  public doTriggerSuggestions(event): void {
    try {
      if(event) event.preventDefault();
      this.isVisible = true;
    } catch (e) {
      throw e;
    }
  }

}
