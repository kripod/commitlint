import * as ensure from '@commitlint/ensure';
import message from '@commitlint/message';
import {Rule} from './types';

const bodyCase: Rule<ensure.TargetCaseType> = (
	parsed,
	when = 'always',
	value = undefined
) => {
	const {body} = parsed;

	if (!body) {
		return [true];
	}

	const negated = when === 'never';
	const result = ensure.case(body, value);

	return [
		negated ? !result : result,
		message([`body must`, negated ? `not` : null, `be ${value}`])
	];
};

export default bodyCase;
