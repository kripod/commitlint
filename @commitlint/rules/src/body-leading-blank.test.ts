import parse from '@commitlint/parse';
import bodyLeadingBlank from './body-leading-blank';

const messages = {
	simple: 'test: subject',
	without: 'test: subject\nbody',
	with: 'test: subject\n\nbody'
};

const parsed = {
	simple: parse(messages.simple),
	without: parse(messages.without),
	with: parse(messages.with)
};

test('with simple message should succeed for empty keyword', async () => {
	const [actual] = bodyLeadingBlank(await parsed.simple);
	expect(actual).toBeTruthy();
});

test('with simple message should succeed for "never"', async () => {
	const [actual] = bodyLeadingBlank(await parsed.simple, 'never');
	expect(actual).toBeTruthy();
});

test('with simple message should succeed for "always"', async () => {
	const [actual] = bodyLeadingBlank(await parsed.simple, 'always');
	expect(actual).toBeTruthy();
});

test('without blank line before body should fail for empty keyword', async () => {
	const [actual] = bodyLeadingBlank(await parsed.without);
	expect(actual).toBeFalsy();
});

test('without blank line before body should succeed for "never"', async () => {
	const [actual] = bodyLeadingBlank(await parsed.without, 'never');
	expect(actual).toBeTruthy();
});

test('without blank line before body should fail for "always"', async () => {
	const [actual] = bodyLeadingBlank(await parsed.without, 'always');
	expect(actual).toBeFalsy();
});

test('with blank line before body should succeed for empty keyword', async () => {
	const [actual] = bodyLeadingBlank(await parsed.with);
	expect(actual).toBeTruthy();
});

test('with blank line before body should fail for "never"', async () => {
	const [actual] = bodyLeadingBlank(await parsed.with, 'never');
	expect(actual).toBeFalsy();
});

test('with blank line before body should succeed for "always"', async () => {
	const [actual] = bodyLeadingBlank(await parsed.with, 'always');
	expect(actual).toBeTruthy();
});
