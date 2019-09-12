import * as ensure from '@commitlint/ensure';
import message from '@commitlint/message';
import {Rule} from './types';

const bodyCase: Rule<ensure.TargetCaseType> = (
	parsed,
	when = 'always',
	value = undefined
) => {
	if (!parsed.body) {
		return [true];
	}

	const negated = when === 'never';
	const result = ensure.case(parsed.body, value);

	return [
		negated ? !result : result,
		message([`body must`, negated ? `not` : null, `be ${value}`])
	];
};

export default bodyCase;
