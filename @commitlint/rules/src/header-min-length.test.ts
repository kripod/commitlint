import parse from '@commitlint/parse';
import check from './header-min-length';

const short = 'BREAKING CHANGE: a';
const long = 'BREAKING CHANGE: ab';

const value = long.length;

const messages = {
	short,
	long
};

const parsed = {
	short: parse(messages.short),
	long: parse(messages.long)
};

test('with short should fail', async () => {
	const [actual] = check(await parsed.short, 'always', value);
	expect(actual).toBeFalsy();
});

test('with long should succeed', async () => {
	const [actual] = check(await parsed.long, 'always', value);
	expect(actual).toBeTruthy();
});
