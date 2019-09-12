import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const headerMaxLength: Rule<number> = (parsed, when = undefined, value = 0) => {
	return [
		maxLength(parsed.header, value),
		`header must not be longer than ${value} characters, current length is ${
			parsed.header.length
		}`
	];
};

export default headerMaxLength;
