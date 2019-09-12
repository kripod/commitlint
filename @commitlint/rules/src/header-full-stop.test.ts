import parse from '@commitlint/parse';
import check from './header-full-stop';

const messages = {
	with: `header.\n`,
	without: `header\n`
};

const parsed = {
	with: parse(messages.with),
	without: parse(messages.without)
};

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
