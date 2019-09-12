import {minLength} from '@commitlint/ensure';
import {Rule} from './types';

const headerMinLength: Rule<number> = (parsed, when = undefined, value = 0) => {
	return [
		minLength(parsed.header, value),
		`header must not be shorter than ${value} characters, current length is ${
			parsed.header.length
		}`
	];
};

export default headerMinLength;
