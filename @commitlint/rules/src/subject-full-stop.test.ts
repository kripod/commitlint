import parse from '@commitlint/parse';
import check from './subject-full-stop';

const messages = {
	empty: 'test:\n',
	with: `test: subject.\n`,
	without: `test: subject\n`
};

const parsed = {
	empty: parse(messages.empty),
	with: parse(messages.with),
	without: parse(messages.without)
};

test('empty against "always" should succeed', async () => {
	const [actual] = check(await parsed.empty, 'always', '.');
	expect(actual).toBeTruthy();
});

test('empty against "never ." should succeed', async () => {
	const [actual] = check(await parsed.empty, 'never', '.');
	expect(actual).toBeTruthy();
});

test('with against "always ." should succeed', async () => {
	const [actual] = check(await parsed.with, 'always', '.');
	expect(actual).toBeTruthy();
});

test('with against "never ." should fail', async () => {
	const [actual] = check(await parsed.with, 'never', '.');
	expect(actual).toBeFalsy();
});

test('without against "always ." should fail', async () => {
	const [actual] = check(await parsed.without, 'always', '.');
	expect(actual).toBeFalsy();
});

test('without against "never ." should succeed', async () => {
	const [actual] = check(await parsed.without, 'never', '.');
	expect(actual).toBeTruthy();
});
