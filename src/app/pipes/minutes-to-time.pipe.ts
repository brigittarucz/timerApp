import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'minutesToTime'
})
export class MinutesToTimePipe implements PipeTransform {
	transform(value: number): string {
		let hours = value / 60;
		hours = Math.floor(hours);
		let minutes = value - hours * 60;
		let str = hours + ' h ' + minutes;
		return str;
	}
}
