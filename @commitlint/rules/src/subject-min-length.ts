import {minLength} from '@commitlint/ensure';
import {Rule} from './types';

const subjectMinLength: Rule<number> = (
	parsed,
	when = undefined,
	value = 0
) => {
	if (!parsed.subject) {
		return [true];
	}

	return [
		minLength(parsed.subject, value),
		`subject must not be shorter than ${value} characters`
	];
};

export default subjectMinLength;
