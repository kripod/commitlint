import {minLength} from '@commitlint/ensure';
import {Rule} from './types';

const scopeMinLength: Rule<number> = (parsed, when = undefined, value = 0) => {
	if (!parsed.scope) {
		return [true];
	}

	return [
		minLength(parsed.scope, value),
		`scope must not be shorter than ${value} characters`
	];
};

export default scopeMinLength;
