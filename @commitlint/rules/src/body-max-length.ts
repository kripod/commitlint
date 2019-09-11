import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const bodyMaxLength: Rule<number> = (parsed, when, value) => {
	const input = parsed.body;

	if (!input || value == undefined) {
		return [true];
	}

	return [
		maxLength(input, value),
		`body must not be longer than ${value} characters`
	];
};

export default bodyMaxLength;
