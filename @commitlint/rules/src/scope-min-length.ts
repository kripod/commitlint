import {minLength} from '@commitlint/ensure';
import {Rule} from './types';

const scopeMinLength: Rule<number> = (parsed, when = 'always', value = 0) => {
	const input = parsed.scope;
	if (!input) {
		return [true];
	}
	return [
		minLength(input, value),
		`scope must not be shorter than ${value} characters`
	];
};

export default scopeMinLength;
