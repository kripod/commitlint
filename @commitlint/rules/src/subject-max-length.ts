import {maxLength} from '@commitlint/ensure';
import {Rule} from './types';

const subjectMaxLength: Rule<number> = (
	parsed,
	when = undefined,
	value = 0
) => {
	if (!parsed.subject) {
		return [true];
	}

	return [
		maxLength(parsed.subject, value),
		`subject must not be longer than ${value} characters`
	];
};

export default subjectMaxLength;
