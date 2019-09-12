import {minLength} from '@commitlint/ensure';
import {Rule} from './types';

const bodyMinLength: Rule<number> = (parsed, when = 'always', value = 0) => {
	if (!parsed.body) {
		return [true];
	}

	return [
		minLength(parsed.body, value),
		`body must not be shorter than ${value} characters`
	];
};

export default bodyMinLength;
