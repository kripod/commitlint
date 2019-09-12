import * as ensure from '@commitlint/ensure';
import message from '@commitlint/message';
import {Rule} from './types';

const footerEmpty: Rule = (parsed, when = 'always') => {
	const negated = when === 'never';
	const notEmpty = ensure.notEmpty(parsed.footer || '');

	return [
		negated ? notEmpty : !notEmpty,
		message(['footer', negated ? 'may not' : 'must', 'be empty'])
	];
};

export default footerEmpty;
