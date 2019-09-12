import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const scopeMaxLength: Rule<number> = (parsed, when = undefined, value = 0) => {
	if (!parsed.scope) {
		return [true];
	}

	return [
		maxLength(parsed.scope, value),
		`scope must not be longer than ${value} characters`
	];
};

export default scopeMaxLength;
