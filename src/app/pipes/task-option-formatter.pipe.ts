import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'taskOptionFormatter'
})
export class TaskOptionFormatterPipe implements PipeTransform {
	transform(value: string): string {
		let firstLetter = value.charAt(0);
		let secondLetter = value.charAt(1);
		if (firstLetter === value.charAt(0).toLowerCase()) {
			if (secondLetter === value.charAt(1).toUpperCase()) {
				return value;
			} else {
				let firstLetterUppercase = firstLetter.toUpperCase();
				if (value.indexOf('0') !== -1) {
					value = value.replace('0', ' ');
					return firstLetterUppercase + value.substring(1, value.length);
				} else {
					return firstLetterUppercase + value.substring(1, value.length);
				}
			}
		} else {
			return value;
		}
	}
}
