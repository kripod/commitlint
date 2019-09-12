import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const bodyMaxLength: Rule<number> = (parsed, when = 'always', value = 0) => {
	const input = parsed.body;

	if (!input) {
		return [true];
	}

	return [
		maxLength(input, value),
		`body must not be longer than ${value} characters`
	];
};

export default bodyMaxLength;
