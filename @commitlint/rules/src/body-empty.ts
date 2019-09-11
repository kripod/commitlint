import * as ensure from '@commitlint/ensure';
import message from '@commitlint/message';
import {Rule} from './types';

const bodyEmpty: Rule = (parsed, when) => {
	const negated = when === 'never';
	const notEmpty = ensure.notEmpty(parsed.body || '');

	return [
		negated ? notEmpty : !notEmpty,
		message(['body', negated ? 'may not' : 'must', 'be empty'])
	];
};

export default bodyEmpty;
