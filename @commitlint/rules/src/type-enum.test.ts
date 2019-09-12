import parse from '@commitlint/parse';
import check from './type-enum';

const messages = {
	empty: '(): \n',
	a: 'a(): \n',
	b: 'b(): \n'
};

const parsed = {
	empty: parse(messages.empty),
	a: parse(messages.a),
	b: parse(messages.b)
};

test('empty succeeds', async () => {
	const [actual] = check(await parsed.empty);
	expect(actual).toBeTruthy();
});

test('empty on "a" succeeds', async () => {
	const [actual] = check(await parsed.empty, 'always', ['a']);
	expect(actual).toBeTruthy();
});

test('empty on "always a" succeeds', async () => {
	const [actual] = check(await parsed.empty, 'always', ['a']);
	expect(actual).toBeTruthy();
});

test('empty on "never a" succeeds', async () => {
	const [actual] = check(await parsed.empty, 'never', ['a']);
	expect(actual).toBeTruthy();
});

test('empty on "always a, b" succeeds', async () => {
	const [actual] = check(await parsed.empty, 'always', ['a', 'b']);
	expect(actual).toBeTruthy();
});

test('empty on "never a, b" succeeds', async () => {
	const [actual] = check(await parsed.empty, 'never', ['a', 'b']);
	expect(actual).toBeTruthy();
});

test('a on "a" succeeds', async () => {
	const [actual] = check(await parsed.a, 'always', ['a']);
	expect(actual).toBeTruthy();
});

test('a on "always a" succeeds', async () => {
	const [actual] = check(await parsed.a, 'always', ['a']);
	expect(actual).toBeTruthy();
});

test('a on "never a" fails', async () => {
	const [actual] = check(await parsed.a, 'never', ['a']);
	expect(actual).toBeFalsy();
});

test('b on "b" succeeds', async () => {
	const [actual] = check(await parsed.b, 'always', ['b']);
	expect(actual).toBeTruthy();
});

test('b on "always b" succeeds', async () => {
	const [actual] = check(await parsed.b, 'always', ['b']);
	expect(actual).toBeTruthy();
});

test('b on "never b" fails', async () => {
	const [actual] = check(await parsed.b, 'never', ['b']);
	expect(actual).toBeFalsy();
});

test('a on "a, b" succeeds', async () => {
	const [actual] = check(await parsed.a, 'always', ['a', 'b']);
	expect(actual).toBeTruthy();
});

test('a on "always a, b" succeeds', async () => {
	const [actual] = check(await parsed.a, 'always', ['a', 'b']);
	expect(actual).toBeTruthy();
});

test('a on "never a, b" fails', async () => {
	const [actual] = check(await parsed.a, 'never', ['a', 'b']);
	expect(actual).toBeFalsy();
});

test('b on "a, b" succeeds', async () => {
	const [actual] = check(await parsed.b, 'always', ['a', 'b']);
	expect(actual).toBeTruthy();
});

test('b on "always a, b" succeeds', async () => {
	const [actual] = check(await parsed.b, 'always', ['a', 'b']);
	expect(actual).toBeTruthy();
});

test('b on "never a, b" fails', async () => {
	const [actual] = check(await parsed.b, 'never', ['a', 'b']);
	expect(actual).toBeFalsy();
});
