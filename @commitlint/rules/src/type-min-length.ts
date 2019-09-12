import {minLength} from '@commitlint/ensure';
import {Rule} from './types';

const typeMinLength: Rule<number> = (parsed, when = undefined, value = 0) => {
	if (!parsed.type) {
		return [true];
	}

	return [
		minLength(parsed.type, value),
		`type must not be shorter than ${value} characters`
	];
};

export default typeMinLength;
