import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const typeMaxLength: Rule<number> = (parsed, when = undefined, value = 0) => {
	if (!parsed.type) {
		return [true];
	}

	return [
		maxLength(parsed.type, value),
		`type must not be longer than ${value} characters`
	];
};

export default typeMaxLength;
