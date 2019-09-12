import * as ensure from '@commitlint/ensure';
import message from '@commitlint/message';
import {Rule} from './types';

const typeEmpty: Rule = (parsed, when = 'always') => {
	const negated = when === 'never';
	const notEmpty = ensure.notEmpty(parsed.type || '');

	return [
		negated ? notEmpty : !notEmpty,
		message(['type', negated ? 'may not' : 'must', 'be empty'])
	];
};

export default typeEmpty;
