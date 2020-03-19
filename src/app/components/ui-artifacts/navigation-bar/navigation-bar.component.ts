import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-navigation-bar',
	templateUrl: './navigation-bar.component.html',
	styleUrls: [ './navigation-bar.component.scss' ]
})
export class NavigationBarComponent implements OnInit {
	toggleNav = false;
	displayNav = 'none';
	displayShadow = 'var(--soft-shadow)';

	// @Input() toggleClose;

	@Output() menuClick = new EventEmitter();
	toggleSide = false;

	constructor() {}

	toggleNavbar() {
		this.toggleNav = !this.toggleNav;
		if (this.toggleNav) {
			this.displayNav = 'block';
			this.displayShadow = 'none';
			if (window.innerWidth > 800) {
				this.displayShadow = 'var(--soft-shadow)';
			}
		} else {
			this.displayNav = 'none';
			this.displayShadow = 'var(--soft-shadow)';
		}
	}

	toggleSidebar(event) {
		this.toggleSide = !this.toggleSide;
		this.menuClick.emit(this.toggleSide);
		let navigIcon = event.target;
		if (this.toggleSide && window.innerWidth > 800) {
			navigIcon.setAttribute('src', '../../../../assets/cross-icon.png');
			navigIcon.setAttribute('height', '28');
			navigIcon.setAttribute('width', '28');
		} else {
			navigIcon.setAttribute('src', '../../../../assets/header/burgermenu-icon.png');
			navigIcon.setAttribute('width', '28');
			navigIcon.setAttribute('height', '22');
		}
	}

	ngOnInit(): void {}
}
