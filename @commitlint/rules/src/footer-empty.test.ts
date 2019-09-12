import parse from '@commitlint/parse';
import footerEmpty from './footer-empty';

const messages = {
	simple: 'test: subject',
	empty: 'test: subject\nbody',
	filled: 'test: subject\nBREAKING CHANGE: something important'
};

const parsed = {
	simple: parse(messages.simple),
	empty: parse(messages.empty),
	filled: parse(messages.filled)
};

test('with simple message should succeed for empty keyword', async () => {
	const [actual] = footerEmpty(await parsed.simple);
	expect(actual).toBeTruthy();
});

test('with simple message should fail for "never"', async () => {
	const [actual] = footerEmpty(await parsed.simple, 'never');
	expect(actual).toBeFalsy();
});

test('with simple message should succeed for "always"', async () => {
	const [actual] = footerEmpty(await parsed.simple, 'always');
	expect(actual).toBeTruthy();
});

test('with empty footer should succeed for empty keyword', async () => {
	const [actual] = footerEmpty(await parsed.empty);
	expect(actual).toBeTruthy();
});

test('with empty footer should fail for "never"', async () => {
	const [actual] = footerEmpty(await parsed.empty, 'never');
	expect(actual).toBeFalsy();
});

test('with empty footer should succeed for "always"', async () => {
	const [actual] = footerEmpty(await parsed.empty, 'always');
	expect(actual).toBeTruthy();
});

test('with footer should fail for empty keyword', async () => {
	const [actual] = footerEmpty(await parsed.filled);
	expect(actual).toBeFalsy();
});

test('with footer should succeed for "never"', async () => {
	const [actual] = footerEmpty(await parsed.filled, 'never');
	expect(actual).toBeTruthy();
});

test('with footer should fail for "always"', async () => {
	const [actual] = footerEmpty(await parsed.filled, 'always');
	expect(actual).toBeFalsy();
});
