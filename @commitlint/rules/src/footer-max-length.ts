import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const footerMaxLength: Rule<number> = (parsed, when = 'always', value = 0) => {
	const input = parsed.footer;

	if (!input) {
		return [true];
	}

	return [
		maxLength(input, value),
		`footer must not be longer than ${value} characters`
	];
};

export default footerMaxLength;
