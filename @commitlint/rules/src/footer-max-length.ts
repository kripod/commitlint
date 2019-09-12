import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const footerMaxLength: Rule<number> = (parsed, when = undefined, value = 0) => {
	if (!parsed.footer) {
		return [true];
	}

	return [
		maxLength(parsed.footer, value),
		`footer must not be longer than ${value} characters`
	];
};

export default footerMaxLength;
