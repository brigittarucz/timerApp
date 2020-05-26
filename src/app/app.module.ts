import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import { Components, EntryComponents } from './app.components';
import { Imports } from './app.imports';
import { Providers } from './app.providers';
import { Pipes } from './app.pipes';
import { InputDatepickerComponent } from './components/ui-artifacts/input-datepicker/input-datepicker.component';

@NgModule({
	declarations: [
		...Components,
		...Pipes,
		InputDatepickerComponent
	],
	imports: [ ...Imports ],
	providers: [ ...Providers ],
	bootstrap: [ AppComponent ],
	entryComponents: [ ...EntryComponents ]
})
export class AppModule {}
