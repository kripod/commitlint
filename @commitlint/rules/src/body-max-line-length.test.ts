import parse from '@commitlint/parse';
import check from './body-max-line-length';

const short = 'a';
const long = 'ab';

const value = short.length;

const messages = {
	empty: 'test: subject',
	short: `test: subject\n${short}`,
	long: `test: subject\n${long}`,
	shortMultipleLines: `test:subject\n${short}\n${short}\n${short}`,
	longMultipleLines: `test:subject\n${short}\n${long}\n${short}`
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

test('with short should succeed', async () => {
	const [actual] = check(await parsed.short, 'always', value);
	expect(actual).toBeTruthy();
});

test('with long should fail', async () => {
	const [actual] = check(await parsed.long, 'always', value);
	expect(actual).toBeFalsy();
});

test('with short with multiple lines should succeed', async () => {
	const [actual] = check(await parsed.short, 'always', value);
	expect(actual).toBeTruthy();
});

test('with long with multiple lines should fail', async () => {
	const [actual] = check(await parsed.long, 'always', value);
	expect(actual).toBeFalsy();
});
