import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formatCountry'
})
export class FormatCountryPipe implements PipeTransform {
	transform(value: string): string {
		value = value.replace('-', ' ');
		value = value.toUpperCase();
		return value;
	}
}
