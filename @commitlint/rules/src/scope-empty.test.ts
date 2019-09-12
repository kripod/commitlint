import parse from '@commitlint/parse';
import scopeEmpty from './scope-empty';

const messages = {
	plain: 'foo(bar): baz',
	superfluous: 'foo(): baz',
	empty: 'foo: baz'
};

const parsed = {
	plain: parse(messages.plain),
	superfluous: parse(messages.superfluous),
	empty: parse(messages.empty)
};

test('with plain message it should succeed for empty keyword', async () => {
	const [actual] = scopeEmpty(await parsed.plain);
	expect(actual).toBeTruthy();
});

test('with plain message it should succeed for "never"', async () => {
	const [actual] = scopeEmpty(await parsed.plain, 'never');
	expect(actual).toBeTruthy();
});

test('with plain message it should fail for "always"', async () => {
	const [actual] = scopeEmpty(await parsed.plain, 'always');
	expect(actual).toBeFalsy();
});

test('with superfluous message it should fail for empty keyword', async () => {
	const [actual] = scopeEmpty(await parsed.superfluous);
	expect(actual).toBeFalsy();
});

test('with superfluous message it should fail for "never"', async () => {
	const [actual] = scopeEmpty(await parsed.superfluous, 'never');
	expect(actual).toBeFalsy();
});

test('with superfluous message it should fail for "always"', async () => {
	const [actual] = scopeEmpty(await parsed.superfluous, 'always');
	expect(actual).toBeTruthy();
});

test('with empty message it should fail for empty keyword', async () => {
	const [actual] = scopeEmpty(await parsed.empty);
	expect(actual).toBeFalsy();
});

test('with empty message it should fail for "never"', async () => {
	const [actual] = scopeEmpty(await parsed.empty, 'never');
	expect(actual).toBeFalsy();
});

test('with empty message it should fail for "always"', async () => {
	const [actual] = scopeEmpty(await parsed.empty, 'always');
	expect(actual).toBeTruthy();
});
