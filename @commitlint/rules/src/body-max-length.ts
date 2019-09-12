import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const bodyMaxLength: Rule<number> = (parsed, when = undefined, value = 0) => {
	if (!parsed.body) {
		return [true];
	}

	return [
		maxLength(parsed.body, value),
		`body must not be longer than ${value} characters`
	];
};

export default bodyMaxLength;
