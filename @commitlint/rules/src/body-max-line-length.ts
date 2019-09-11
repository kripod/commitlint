import {maxLineLength} from '@commitlint/ensure';
import {Rule} from './types';

const bodyMaxLineLength: Rule<number> = (parsed, when, value) => {
	const input = parsed.body;

	if (!input || value === undefined) {
		return [true];
	}

	return [
		maxLineLength(input, value),
		`body's lines must not be longer than ${value} characters`
	];
};

export default bodyMaxLineLength;
