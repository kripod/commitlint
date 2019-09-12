import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const scopeMaxLength: Rule<number> = (parsed, when = 'always', value = 0) => {
	const input = parsed.scope;

	if (!input) {
		return [true];
	}

	return [
		maxLength(input, value),
		`scope must not be longer than ${value} characters`
	];
};

export default scopeMaxLength;
