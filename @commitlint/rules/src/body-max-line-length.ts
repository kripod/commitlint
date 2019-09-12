import {maxLineLength} from '@commitlint/ensure';
import {Rule} from './types';

const bodyMaxLineLength: Rule<number> = (
	parsed,
	when = undefined,
	value = 0
) => {
	if (!parsed.body) {
		return [true];
	}

	return [
		maxLineLength(parsed.body, value),
		`body's lines must not be longer than ${value} characters`
	];
};

export default bodyMaxLineLength;
