import {maxLineLength} from '@commitlint/ensure';
import {Rule} from './types';

const footerMaxLineLength: Rule<number> = (
	parsed,
	when = undefined,
	value = 0
) => {
	if (!parsed.footer) {
		return [true];
	}

	return [
		maxLineLength(parsed.footer, value),
		`footer's lines must not be longer than ${value} characters`
	];
};

export default footerMaxLineLength;
