import parse from '@commitlint/parse';
import check from './subject-min-length';

const short = 'a';
const long = 'ab';

const value = long.length;

const messages = {
	empty: 'test:\n',
	short: `test: ${short}\n`,
	long: `test: ${long}\n`
};

const parsed = {
	empty: parse(messages.empty),
	short: parse(messages.short),
	long: parse(messages.long)
};

test('with empty should succeed', async () => {
	const [actual] = check(await parsed.empty, 'always', value);
	expect(actual).toBeTruthy();
});

test('with short should fail', async () => {
	const [actual] = check(await parsed.short, 'always', value);
	expect(actual).toBeFalsy();
});

test('with long should succeed', async () => {
	const [actual] = check(await parsed.long, 'always', value);
	expect(actual).toBeTruthy();
});
