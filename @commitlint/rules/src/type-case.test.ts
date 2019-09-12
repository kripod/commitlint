import parse from '@commitlint/parse';
import typeCase from './type-case';

const messages = {
	empty: '(scope): subject',
	lowercase: 'type: subject',
	mixedcase: 'tYpE: subject',
	uppercase: 'TYPE: subject',
	camelcase: 'tyPe: subject',
	pascalcase: 'TyPe: subject',
	snakecase: 'ty_pe: subject',
	kebabcase: 'ty-pe: subject',
	startcase: 'Ty Pe: subject'
};

const parsed = {
	empty: parse(messages.empty),
	lowercase: parse(messages.lowercase),
	mixedcase: parse(messages.mixedcase),
	uppercase: parse(messages.uppercase),
	camelcase: parse(messages.camelcase),
	pascalcase: parse(messages.pascalcase),
	snakecase: parse(messages.snakecase),
	kebabcase: parse(messages.kebabcase),
	startcase: parse(messages.startcase, undefined, {
		headerPattern: /^(.*): (.*)$/,
		headerCorrespondence: ['type', 'subject']
	})
};

test('with empty type should succeed for "never lowercase"', async () => {
	const [actual] = typeCase(await parsed.empty, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with empty type should succeed for "always lowercase"', async () => {
	const [actual] = typeCase(await parsed.empty, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with empty type should succeed for "never uppercase"', async () => {
	const [actual] = typeCase(await parsed.empty, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with empty type should succeed for "always uppercase"', async () => {
	const [actual] = typeCase(await parsed.empty, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with lowercase type should fail for "never lowercase"', async () => {
	const [actual] = typeCase(await parsed.lowercase, 'never', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with lowercase type should succeed for "always lowercase"', async () => {
	const [actual] = typeCase(await parsed.lowercase, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase type should succeed for "never lowercase"', async () => {
	const [actual] = typeCase(await parsed.mixedcase, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase type should fail for "always lowercase"', async () => {
	const [actual] = typeCase(await parsed.mixedcase, 'always', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with mixedcase type should succeed for "never uppercase"', async () => {
	const [actual] = typeCase(await parsed.mixedcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase type should fail for "always uppercase"', async () => {
	const [actual] = typeCase(await parsed.mixedcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with uppercase type should fail for "never uppercase"', async () => {
	const [actual] = typeCase(await parsed.uppercase, 'never', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with lowercase type should succeed for "always uppercase"', async () => {
	const [actual] = typeCase(await parsed.uppercase, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with camelcase type should fail for "always uppercase"', async () => {
	const [actual] = typeCase(await parsed.camelcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with camelcase type should succeed for "never uppercase"', async () => {
	const [actual] = typeCase(await parsed.camelcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with camelcase type should fail for "always pascalcase"', async () => {
	const [actual] = typeCase(await parsed.camelcase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with camelcase type should fail for "always kebabcase"', async () => {
	const [actual] = typeCase(await parsed.camelcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with camelcase type should fail for "always snakecase"', async () => {
	const [actual] = typeCase(await parsed.camelcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with camelcase type should fail for "always startcase"', async () => {
	const [actual] = typeCase(await parsed.camelcase, 'always', 'start-case');
	expect(actual).toBeFalsy();
});

test('with camelcase type should succeed for "always camelcase"', async () => {
	const [actual] = typeCase(await parsed.camelcase, 'always', 'camel-case');
	expect(actual).toBeTruthy();
});

test('with pascalcase type should fail for "always uppercase"', async () => {
	const [actual] = typeCase(await parsed.pascalcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with pascalcase type should succeed for "never uppercase"', async () => {
	const [actual] = typeCase(await parsed.pascalcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with pascalcase type should fail for "always camelcase"', async () => {
	const [actual] = typeCase(await parsed.pascalcase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase type should fail for "always kebabcase"', async () => {
	const [actual] = typeCase(await parsed.pascalcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase type should fail for "always snakecase"', async () => {
	const [actual] = typeCase(await parsed.pascalcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase type should fail for "always startcase"', async () => {
	const [actual] = typeCase(await parsed.pascalcase, 'always', 'start-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase type should succeed for "always pascalcase"', async () => {
	const [actual] = typeCase(await parsed.pascalcase, 'always', 'pascal-case');
	expect(actual).toBeTruthy();
});

test('with snakecase type should fail for "always uppercase"', async () => {
	const [actual] = typeCase(await parsed.snakecase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with snakecase type should succeed for "never uppercase"', async () => {
	const [actual] = typeCase(await parsed.snakecase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with snakecase type should fail for "always camelcase"', async () => {
	const [actual] = typeCase(await parsed.snakecase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with snakecase type should fail for "always kebabcase"', async () => {
	const [actual] = typeCase(await parsed.snakecase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with snakecase type should succeed for "always snakecase"', async () => {
	const [actual] = typeCase(await parsed.snakecase, 'always', 'snake-case');
	expect(actual).toBeTruthy();
});

test('with snakecase type should fail for "always pascalcase"', async () => {
	const [actual] = typeCase(await parsed.snakecase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with snakecase type should fail for "always start case"', async () => {
	const [actual] = typeCase(await parsed.snakecase, 'always', 'start-case');
	expect(actual).toBeFalsy();
});

test('with startcase type should fail for "always uppercase"', async () => {
	const [actual] = typeCase(await parsed.startcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with startcase type should succeed for "never uppercase"', async () => {
	const [actual] = typeCase(await parsed.startcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with startcase type should fail for "always camelcase"', async () => {
	const [actual] = typeCase(await parsed.startcase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with startcase type should fail for "always kebabcase"', async () => {
	const [actual] = typeCase(await parsed.startcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with startcase type should fail for "always snakecase"', async () => {
	const [actual] = typeCase(await parsed.startcase, 'always', 'snake-case');
	expect(actual).toBeFalsy();
});

test('with startcase type should fail for "always pascalcase"', async () => {
	const [actual] = typeCase(await parsed.startcase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with startcase type should succeed for "always startcase"', async () => {
	const [actual] = typeCase(await parsed.startcase, 'always', 'start-case');
	expect(actual).toBeTruthy();
});

test('with uppercase scope should succeed for "always [uppercase, lowercase]"', async () => {
	const [actual] = typeCase(await parsed.uppercase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with lowercase subject should succeed for "always [uppercase, lowercase]"', async () => {
	const [actual] = typeCase(await parsed.lowercase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with mixedcase subject should fail for "always [uppercase, lowercase]"', async () => {
	const [actual] = typeCase(await parsed.mixedcase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeFalsy();
});

test('with mixedcase subject should pass for "always [uppercase, lowercase, camel-case]"', async () => {
	const [actual] = typeCase(await parsed.mixedcase, 'always', [
		'uppercase',
		'lowercase',
		'camel-case'
	]);
	expect(actual).toBeTruthy();
});

test('with mixedcase scope should pass for "never [uppercase, lowercase]"', async () => {
	const [actual] = typeCase(await parsed.mixedcase, 'never', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with uppercase scope should fail for "never [uppercase, lowercase]"', async () => {
	const [actual] = typeCase(await parsed.uppercase, 'never', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeFalsy();
});
