import parse from '@commitlint/parse';
import headerCase from './header-case';

const messages = {
	numeric: '1.0.0\n',
	lowercase: 'header\n',
	mixedcase: 'hEaDeR\n',
	uppercase: 'HEADER\n',
	camelcase: 'heaDer\n',
	kebabcase: 'hea-der\n',
	pascalcase: 'HeaDer\n',
	snakecase: 'hea_der\n',
	startcase: 'Hea Der\n'
};

const parsed = {
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

test('with lowercase header should fail for "never lowercase"', async () => {
	const [actual] = headerCase(await parsed.lowercase, 'never', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with lowercase header should succeed for "always lowercase"', async () => {
	const [actual] = headerCase(await parsed.lowercase, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase header should succeed for "never lowercase"', async () => {
	const [actual] = headerCase(await parsed.mixedcase, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase header should fail for "always lowercase"', async () => {
	const [actual] = headerCase(await parsed.mixedcase, 'always', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with mixedcase header should succeed for "never uppercase"', async () => {
	const [actual] = headerCase(await parsed.mixedcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase header should fail for "always uppercase"', async () => {
	const [actual] = headerCase(await parsed.mixedcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with uppercase header should fail for "never uppercase"', async () => {
	const [actual] = headerCase(await parsed.uppercase, 'never', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with lowercase header should succeed for "always uppercase"', async () => {
	const [actual] = headerCase(await parsed.uppercase, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with camelcase header should fail for "always uppercase"', async () => {
	const [actual] = headerCase(await parsed.camelcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with camelcase header should succeed for "never uppercase"', async () => {
	const [actual] = headerCase(await parsed.camelcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with camelcase header should fail for "always pascalcase"', async () => {
	const [actual] = headerCase(await parsed.camelcase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with camelcase header should fail for "always kebabcase"', async () => {
	const [actual] = headerCase(await parsed.camelcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with camelcase header should fail for "always snakecase"', async () => {
	const [actual] = headerCase(await parsed.camelcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with camelcase header should succeed for "always camelcase"', async () => {
	const [actual] = headerCase(await parsed.camelcase, 'always', 'camel-case');
	expect(actual).toBeTruthy();
});

test('with pascalcase header should fail for "always uppercase"', async () => {
	const [actual] = headerCase(await parsed.pascalcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with pascalcase header should succeed for "never uppercase"', async () => {
	const [actual] = headerCase(await parsed.pascalcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with pascalcase header should succeed for "always pascalcase"', async () => {
	const [actual] = headerCase(await parsed.pascalcase, 'always', 'pascal-case');
	expect(actual).toBeTruthy();
});

test('with pascalcase header should fail for "always kebabcase"', async () => {
	const [actual] = headerCase(await parsed.pascalcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase header should fail for "always snakecase"', async () => {
	const [actual] = headerCase(await parsed.pascalcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase header should fail for "always camelcase"', async () => {
	const [actual] = headerCase(await parsed.pascalcase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with snakecase header should fail for "always uppercase"', async () => {
	const [actual] = headerCase(await parsed.snakecase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with snakecase header should succeed for "never uppercase"', async () => {
	const [actual] = headerCase(await parsed.snakecase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with snakecase header should fail for "always pascalcase"', async () => {
	const [actual] = headerCase(await parsed.snakecase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with snakecase header should fail for "always kebabcase"', async () => {
	const [actual] = headerCase(await parsed.snakecase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with snakecase header should succeed for "always snakecase"', async () => {
	const [actual] = headerCase(await parsed.snakecase, 'always', 'snake-case');
	expect(actual).toBeTruthy();
});

test('with snakecase header should fail for "always camelcase"', async () => {
	const [actual] = headerCase(await parsed.snakecase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with startcase header should fail for "always uppercase"', async () => {
	const [actual] = headerCase(await parsed.startcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with startcase header should succeed for "never uppercase"', async () => {
	const [actual] = headerCase(await parsed.startcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with startcase header should fail for "always pascalcase"', async () => {
	const [actual] = headerCase(await parsed.startcase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with startcase header should fail for "always kebabcase"', async () => {
	const [actual] = headerCase(await parsed.startcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with startcase header should fail for "always snakecase"', async () => {
	const [actual] = headerCase(await parsed.startcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with startcase header should fail for "always camelcase"', async () => {
	const [actual] = headerCase(await parsed.startcase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with startcase header should succeed for "always startcase"', async () => {
	const [actual] = headerCase(await parsed.startcase, 'always', 'start-case');
	expect(actual).toBeTruthy();
});

test('should use expected message with "always"', async () => {
	const [, message] = headerCase(
		await parsed.uppercase,
		'always',
		'lower-case'
	);
	expect(message).toMatch('must be lower-case');
});

test('should use expected message with "never"', async () => {
	const [, message] = headerCase(await parsed.uppercase, 'never', 'upper-case');
	expect(message).toMatch('must not be upper-case');
});

test('with uppercase scope should succeed for "always [uppercase, lowercase]"', async () => {
	const [actual] = headerCase(await parsed.uppercase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with lowercase header should succeed for "always [uppercase, lowercase]"', async () => {
	const [actual] = headerCase(await parsed.lowercase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with mixedcase header should fail for "always [uppercase, lowercase]"', async () => {
	const [actual] = headerCase(await parsed.mixedcase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeFalsy();
});

test('with mixedcase header should pass for "always [uppercase, lowercase, camel-case]"', async () => {
	const [actual] = headerCase(await parsed.mixedcase, 'always', [
		'uppercase',
		'lowercase',
		'camel-case'
	]);
	expect(actual).toBeTruthy();
});

test('with mixedcase scope should pass for "never [uppercase, lowercase]"', async () => {
	const [actual] = headerCase(await parsed.mixedcase, 'never', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with uppercase scope should fail for "never [uppercase, lowercase]"', async () => {
	const [actual] = headerCase(await parsed.uppercase, 'never', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeFalsy();
});

test('with numeric header should succeed for "never lowercase"', async () => {
	const [actual] = headerCase(await parsed.numeric, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with numeric header should succeed for "always lowercase"', async () => {
	const [actual] = headerCase(await parsed.numeric, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with numeric header should succeed for "never uppercase"', async () => {
	const [actual] = headerCase(await parsed.numeric, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with numeric header should succeed for "always uppercase"', async () => {
	const [actual] = headerCase(await parsed.numeric, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});
