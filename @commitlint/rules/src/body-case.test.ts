import parse from '@commitlint/parse';
import bodyCase from './body-case';

const messages = {
	empty: 'test: subject',
	lowercase: 'test: subject\nbody',
	mixedcase: 'test: subject\nBody',
	uppercase: 'test: subject\nBODY'
};

const parsed = {
	empty: parse(messages.empty),
	lowercase: parse(messages.lowercase),
	mixedcase: parse(messages.mixedcase),
	uppercase: parse(messages.uppercase)
};

test('with empty body should succeed for "never lowercase"', async () => {
	const [actual] = bodyCase(await parsed.empty, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with empty body should succeed for "always lowercase"', async () => {
	const [actual] = bodyCase(await parsed.empty, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with empty body should succeed for "never uppercase"', async () => {
	const [actual] = bodyCase(await parsed.empty, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with empty body should succeed for "always uppercase"', async () => {
	const [actual] = bodyCase(await parsed.empty, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with lowercase body should fail for "never lowercase"', async () => {
	const [actual] = bodyCase(await parsed.lowercase, 'never', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with lowercase body should succeed for "always lowercase"', async () => {
	const [actual] = bodyCase(await parsed.lowercase, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase body should succeed for "never lowercase"', async () => {
	const [actual] = bodyCase(await parsed.mixedcase, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase body should fail for "always lowercase"', async () => {
	const [actual] = bodyCase(await parsed.mixedcase, 'always', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with mixedcase body should succeed for "never uppercase"', async () => {
	const [actual] = bodyCase(await parsed.mixedcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase body should fail for "always uppercase"', async () => {
	const [actual] = bodyCase(await parsed.mixedcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with uppercase body should fail for "never uppercase"', async () => {
	const [actual] = bodyCase(await parsed.uppercase, 'never', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with lowercase body should succeed for "always uppercase"', async () => {
	const [actual] = bodyCase(await parsed.uppercase, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});
