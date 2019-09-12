import {minLength} from '@commitlint/ensure';
import {Rule} from './types';

const footerMinLength: Rule<number> = (parsed, when = 'always', value = 0) => {
	if (!parsed.footer) {
		return [true];
	}

	return [
		minLength(parsed.footer, value),
		`footer must not be shorter than ${value} characters`
	];
};

export default footerMinLength;
