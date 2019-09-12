import parse from '@commitlint/parse';
import scopeEnum from './scope-enum';

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

test('scope-enum with plain message and always should succeed empty enum', async () => {
	const [actual] = scopeEnum(await parsed.plain, 'always', []);
	expect(actual).toBeTruthy();
});

test('scope-enum with plain message and never should error empty enum', async () => {
	const [actual] = scopeEnum(await parsed.plain, 'never', []);
	expect(actual).toBeFalsy();
});

test('with plain message should succeed correct enum', async () => {
	const [actual] = scopeEnum(await parsed.plain, 'always', ['bar']);
	expect(actual).toBeTruthy();
});

test('scope-enum with plain message should error false enum', async () => {
	const [actual] = scopeEnum(await parsed.plain, 'always', ['foo']);
	expect(actual).toBeFalsy();
});

test('scope-enum with plain message should error forbidden enum', async () => {
	const [actual] = scopeEnum(await parsed.plain, 'never', ['bar']);
	expect(actual).toBeFalsy();
});

test('scope-enum with plain message should succeed forbidden enum', async () => {
	const [actual] = scopeEnum(await parsed.plain, 'never', ['foo']);
	expect(actual).toBeTruthy();
});

test('scope-enum with superfluous scope should succeed enum', async () => {
	const [actual] = scopeEnum(await parsed.superfluous, 'always', ['bar']);
	expect(actual).toBeTruthy();
});

test('scope-enum with superfluous scope and "never" should succeed', async () => {
	const [actual] = scopeEnum(await parsed.superfluous, 'never', ['bar']);
	expect(actual).toBeTruthy();
});

test('scope-enum with superfluous scope and always should succeed empty enum', async () => {
	const [actual] = scopeEnum(await parsed.superfluous, 'always', []);
	expect(actual).toBeTruthy();
});

test('scope-enum with superfluous scope and never should succeed empty enum', async () => {
	const [actual] = scopeEnum(await parsed.superfluous, 'never', []);
	expect(actual).toBeTruthy();
});

test('scope-enum with empty scope and always should succeed empty enum', async () => {
	const [actual] = scopeEnum(await parsed.superfluous, 'always', []);
	expect(actual).toBeTruthy();
});

test('scope-enum with empty scope and always should succeed filled enum', async () => {
	const [actual] = scopeEnum(await parsed.superfluous, 'always', ['foo']);
	expect(actual).toBeTruthy();
});

test('scope-enum with empty scope and never should succeed empty enum', async () => {
	const [actual] = scopeEnum(await parsed.superfluous, 'never', []);
	expect(actual).toBeTruthy();
});
