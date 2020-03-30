import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'secondsConverter'
})
export class SecondsConverterPipe implements PipeTransform {
	transform(value: number): string {
		let h = value / 3600;
		let r = value % 3600;
		let min = r / 60;
		let str = Math.floor(h) + ' h ' + min;
		return str;
	}
}
