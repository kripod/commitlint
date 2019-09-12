import * as ensure from '@commitlint/ensure';
import message from '@commitlint/message';
import {Rule} from './types';

const typeEnum: Rule<string[]> = (parsed, when = 'always', value = []) => {
	if (!parsed.type) {
		return [true];
	}

	const negated = when === 'never';
	const result = ensure.enum(parsed.type, value);

	return [
		negated ? !result : result,
		message([
			`type must`,
			negated ? `not` : null,
			`be one of [${value.join(', ')}]`
		])
	];
};

export default typeEnum;
