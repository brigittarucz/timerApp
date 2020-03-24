import {Component, HostListener, OnInit} from '@angular/core';

@Component({
	selector: 'app-offices-overview',
	templateUrl: './offices-overview.component.html',
	styleUrls: [ './offices-overview.component.scss' ]
})
export class OfficesOverviewComponent implements OnInit {
  dropdownState1: boolean = false;

  constructor() {}

  public isDesktop = false;
  public isMobile = false;
  ngOnInit() {
    this.doCheckDeviceType();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.doCheckDeviceType();
  }

  doCheckDeviceType() {
    const windowWidth = window.innerWidth;

    if(windowWidth < 800) {
      this.isDesktop = false;
      this.isMobile = true;
    } else {
      this.isDesktop = true;
      this.isMobile = false;
    }
  }

  toggleDropdown1() {}
}

