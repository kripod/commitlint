import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const typeMaxLength: Rule<number> = (parsed, when = 'always', value = 0) => {
	const input = parsed.type;

	if (!input) {
		return [true];
	}

	return [
		maxLength(input, value),
		`type must not be longer than ${value} characters`
	];
};

export default typeMaxLength;
