import message from '@commitlint/message';
import {Rule} from './types';

const subjectFullStop: Rule<string> = (
	parsed,
	when = 'always',
	value = '.'
) => {
	if (!parsed.subject) {
		return [true];
	}

	const negated = when === 'never';
	const hasStop = parsed.subject[parsed.subject.length - 1] === value;

	return [
		negated ? !hasStop : hasStop,
		message(['subject', negated ? 'may not' : 'must', 'end with full stop'])
	];
};

export default subjectFullStop;
