import { NgModule } from '@angular/core';

import { AppComponent } from './components/root-view/app.component';
import { Components, EntryComponents } from './app.components';
import { Imports } from './app.imports';
import { Providers } from './app.providers';
import { Pipes } from './app.pipes';
import { SelectOptionsComponent } from './components/ui-artifacts/select-options/select-options.component';

@NgModule({
	declarations: [
		...Components,
		...Pipes,
		SelectOptionsComponent,
	],
	imports: [ ...Imports ],
	providers: [ ...Providers ],
	bootstrap: [ AppComponent ],
	entryComponents: [ ...EntryComponents ]
})
export class AppModule {}
