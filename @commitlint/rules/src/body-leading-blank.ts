import toLines from '@commitlint/to-lines';
import message from '@commitlint/message';
import {Rule} from './types';

const bodyLeadingBlank: Rule = (parsed, when = 'always') => {
	// Flunk if no body is found
	if (!parsed.body) {
		return [true];
	}

	const negated = when === 'never';
	const [leading] = toLines(parsed.raw).slice(1);

	// Check if the first line of body is empty
	const succeeds = leading === '';

	return [
		negated ? !succeeds : succeeds,
		message(['body', negated ? 'may not' : 'must', 'have leading blank line'])
	];
};

export default bodyLeadingBlank;
