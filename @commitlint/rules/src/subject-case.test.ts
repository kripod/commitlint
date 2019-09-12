import parse from '@commitlint/parse';
import subjectCase from './subject-case';

const messages = {
	empty: 'test:\n',
	numeric: 'test: 1.0.0',
	lowercase: 'test: subject',
	mixedcase: 'test: sUbJeCt',
	uppercase: 'test: SUBJECT',
	camelcase: 'test: subJect',
	kebabcase: 'test: sub-ject',
	pascalcase: 'test: SubJect',
	snakecase: 'test: sub_ject',
	startcase: 'test: Sub Ject'
};

const parsed = {
	empty: parse(messages.empty),
	numeric: parse(messages.numeric),
	lowercase: parse(messages.lowercase),
	mixedcase: parse(messages.mixedcase),
	uppercase: parse(messages.uppercase),
	camelcase: parse(messages.camelcase),
	kebabcase: parse(messages.kebabcase),
	pascalcase: parse(messages.pascalcase),
	snakecase: parse(messages.snakecase),
	startcase: parse(messages.startcase)
};

test('with empty subject should succeed for "never lowercase"', async () => {
	const [actual] = subjectCase(await parsed.empty, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with empty subject should succeed for "always lowercase"', async () => {
	const [actual] = subjectCase(await parsed.empty, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with empty subject should succeed for "never uppercase"', async () => {
	const [actual] = subjectCase(await parsed.empty, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with empty subject should succeed for "always uppercase"', async () => {
	const [actual] = subjectCase(await parsed.empty, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with lowercase subject should fail for "never lowercase"', async () => {
	const [actual] = subjectCase(await parsed.lowercase, 'never', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with lowercase subject should succeed for "always lowercase"', async () => {
	const [actual] = subjectCase(await parsed.lowercase, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase subject should succeed for "never lowercase"', async () => {
	const [actual] = subjectCase(await parsed.mixedcase, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase subject should fail for "always lowercase"', async () => {
	const [actual] = subjectCase(await parsed.mixedcase, 'always', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with mixedcase subject should succeed for "never uppercase"', async () => {
	const [actual] = subjectCase(await parsed.mixedcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase subject should fail for "always uppercase"', async () => {
	const [actual] = subjectCase(await parsed.mixedcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with uppercase subject should fail for "never uppercase"', async () => {
	const [actual] = subjectCase(await parsed.uppercase, 'never', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with lowercase subject should succeed for "always uppercase"', async () => {
	const [actual] = subjectCase(await parsed.uppercase, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with camelcase subject should fail for "always uppercase"', async () => {
	const [actual] = subjectCase(await parsed.camelcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with camelcase subject should succeed for "never uppercase"', async () => {
	const [actual] = subjectCase(await parsed.camelcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with camelcase subject should fail for "always pascalcase"', async () => {
	const [actual] = subjectCase(await parsed.camelcase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with camelcase subject should fail for "always kebabcase"', async () => {
	const [actual] = subjectCase(await parsed.camelcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with camelcase subject should fail for "always snakecase"', async () => {
	const [actual] = subjectCase(await parsed.camelcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with camelcase subject should succeed for "always camelcase"', async () => {
	const [actual] = subjectCase(await parsed.camelcase, 'always', 'camel-case');
	expect(actual).toBeTruthy();
});

test('with pascalcase subject should fail for "always uppercase"', async () => {
	const [actual] = subjectCase(await parsed.pascalcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with pascalcase subject should succeed for "never uppercase"', async () => {
	const [actual] = subjectCase(await parsed.pascalcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with pascalcase subject should succeed for "always pascalcase"', async () => {
	const [actual] = subjectCase(
		await parsed.pascalcase,
		'always',
		'pascal-case'
	);
	expect(actual).toBeTruthy();
});

test('with pascalcase subject should fail for "always kebabcase"', async () => {
	const [actual] = subjectCase(await parsed.pascalcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase subject should fail for "always snakecase"', async () => {
	const [actual] = subjectCase(await parsed.pascalcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase subject should fail for "always camelcase"', async () => {
	const [actual] = subjectCase(await parsed.pascalcase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with snakecase subject should fail for "always uppercase"', async () => {
	const [actual] = subjectCase(await parsed.snakecase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with snakecase subject should succeed for "never uppercase"', async () => {
	const [actual] = subjectCase(await parsed.snakecase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with snakecase subject should fail for "always pascalcase"', async () => {
	const [actual] = subjectCase(await parsed.snakecase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with snakecase subject should fail for "always kebabcase"', async () => {
	const [actual] = subjectCase(await parsed.snakecase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with snakecase subject should succeed for "always snakecase"', async () => {
	const [actual] = subjectCase(await parsed.snakecase, 'always', 'snake-case');
	expect(actual).toBeTruthy();
});

test('with snakecase subject should fail for "always camelcase"', async () => {
	const [actual] = subjectCase(await parsed.snakecase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with startcase subject should fail for "always uppercase"', async () => {
	const [actual] = subjectCase(await parsed.startcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with startcase subject should succeed for "never uppercase"', async () => {
	const [actual] = subjectCase(await parsed.startcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with startcase subject should fail for "always pascalcase"', async () => {
	const [actual] = subjectCase(await parsed.startcase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with startcase subject should fail for "always kebabcase"', async () => {
	const [actual] = subjectCase(await parsed.startcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with startcase subject should fail for "always snakecase"', async () => {
	const [actual] = subjectCase(await parsed.startcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with startcase subject should fail for "always camelcase"', async () => {
	const [actual] = subjectCase(await parsed.startcase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with startcase subject should succeed for "always startcase"', async () => {
	const [actual] = subjectCase(await parsed.startcase, 'always', 'start-case');
	expect(actual).toBeTruthy();
});

test('should use expected message with "always"', async () => {
	const [, message] = subjectCase(
		await parsed.uppercase,
		'always',
		'lower-case'
	);
	expect(message).toMatch('must be lower-case');
});

test('should use expected message with "never"', async () => {
	const [, message] = subjectCase(
		await parsed.uppercase,
		'never',
		'upper-case'
	);
	expect(message).toMatch('must not be upper-case');
});

test('with uppercase scope should succeed for "always [uppercase, lowercase]"', async () => {
	const [actual] = subjectCase(await parsed.uppercase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with lowercase subject should succeed for "always [uppercase, lowercase]"', async () => {
	const [actual] = subjectCase(await parsed.lowercase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with mixedcase subject should fail for "always [uppercase, lowercase]"', async () => {
	const [actual] = subjectCase(await parsed.mixedcase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeFalsy();
});

test('with mixedcase subject should pass for "always [uppercase, lowercase, camel-case]"', async () => {
	const [actual] = subjectCase(await parsed.mixedcase, 'always', [
		'uppercase',
		'lowercase',
		'camel-case'
	]);
	expect(actual).toBeTruthy();
});

test('with mixedcase scope should pass for "never [uppercase, lowercase]"', async () => {
	const [actual] = subjectCase(await parsed.mixedcase, 'never', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with uppercase scope should fail for "never [uppercase, lowercase]"', async () => {
	const [actual] = subjectCase(await parsed.uppercase, 'never', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeFalsy();
});

test('with numeric subject should succeed for "never lowercase"', async () => {
	const [actual] = subjectCase(await parsed.numeric, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with numeric subject should succeed for "always lowercase"', async () => {
	const [actual] = subjectCase(await parsed.numeric, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with numeric subject should succeed for "never uppercase"', async () => {
	const [actual] = subjectCase(await parsed.numeric, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with numeric subject should succeed for "always uppercase"', async () => {
	const [actual] = subjectCase(await parsed.numeric, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});
