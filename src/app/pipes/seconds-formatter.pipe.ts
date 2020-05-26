import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'secondsFormatter'
})
export class SecondsFormatterPipe implements PipeTransform {
	transform(value: any): any {
		if (value.toString(10).charAt(1) === '') {
			value = '0' + value;
			return value;
		} else {
			return value;
		}
	}
}
