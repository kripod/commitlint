import parse from '@commitlint/parse';
import scopeCase from './scope-case';

const messages = {
	empty: 'test: subject',
	lowercase: 'test(scope): subject',
	mixedcase: 'test(sCoPe): subject',
	uppercase: 'test(SCOPE): subject',
	camelcase: 'test(myScope): subject',
	kebabcase: 'test(my-scope): subject',
	pascalcase: 'test(MyScope): subject',
	snakecase: 'test(my_scope): subject',
	startcase: 'test(My Scope): subject'
};

const parsed = {
	empty: parse(messages.empty),
	lowercase: parse(messages.lowercase),
	mixedcase: parse(messages.mixedcase),
	uppercase: parse(messages.uppercase),
	camelcase: parse(messages.camelcase),
	kebabcase: parse(messages.kebabcase),
	pascalcase: parse(messages.pascalcase),
	snakecase: parse(messages.snakecase),
	startcase: parse(messages.startcase)
};

test('with empty scope should succeed for "never lowercase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "always lowercase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "never uppercase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "always uppercase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "never camelcase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'camel-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "always camelcase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'camel-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "never kebabcase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'kebab-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "always kebabcase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'kebab-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "never pascalcase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'pascal-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "always pascalcase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'pascal-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "never snakecase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'snake-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "always snakecase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'snake-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "never startcase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'start-case');
	expect(actual).toBeTruthy();
});

test('with empty scope should succeed for "always startcase"', async () => {
	const [actual] = scopeCase(await parsed.empty, 'never', 'start-case');
	expect(actual).toBeTruthy();
});

test('with lowercase scope should fail for "never lowercase"', async () => {
	const [actual] = scopeCase(await parsed.lowercase, 'never', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with lowercase scope should succeed for "always lowercase"', async () => {
	const [actual] = scopeCase(await parsed.lowercase, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase scope should succeed for "never lowercase"', async () => {
	const [actual] = scopeCase(await parsed.mixedcase, 'never', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with mixedcase scope should fail for "always lowercase"', async () => {
	const [actual] = scopeCase(await parsed.mixedcase, 'always', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with mixedcase scope should succeed for "never uppercase"', async () => {
	const [actual] = scopeCase(await parsed.mixedcase, 'never', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with kebabcase scope should succeed for "always lowercase"', async () => {
	const [actual] = scopeCase(await parsed.kebabcase, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with kebabcase scope should fail for "always camelcase"', async () => {
	const [actual] = scopeCase(await parsed.kebabcase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with kebabcase scope should fail for "always pascalcase"', async () => {
	const [actual] = scopeCase(await parsed.kebabcase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with kebabcase scope should succeed for "always kebabcase"', async () => {
	const [actual] = scopeCase(await parsed.kebabcase, 'always', 'kebab-case');
	expect(actual).toBeTruthy();
});

test('with snakecase scope should succeed for "always lowercase"', async () => {
	const [actual] = scopeCase(await parsed.snakecase, 'always', 'lowercase');
	expect(actual).toBeTruthy();
});

test('with snakecase scope should fail for "always camelcase"', async () => {
	const [actual] = scopeCase(await parsed.snakecase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with snakecase scope should fail for "always pascalcase"', async () => {
	const [actual] = scopeCase(await parsed.snakecase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with snakecase scope should succeed for "always snakecase"', async () => {
	const [actual] = scopeCase(await parsed.snakecase, 'always', 'snake-case');
	expect(actual).toBeTruthy();
});

test('with camelcase scope should fail for "always lowercase"', async () => {
	const [actual] = scopeCase(await parsed.camelcase, 'always', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with camelcase scope should succeed for "always camelcase"', async () => {
	const [actual] = scopeCase(await parsed.camelcase, 'always', 'camel-case');
	expect(actual).toBeTruthy();
});

test('with camelcase scope should fail for "always kebabcase"', async () => {
	const [actual] = scopeCase(await parsed.camelcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with camelcase scope should fail for "always pascalcase"', async () => {
	const [actual] = scopeCase(await parsed.camelcase, 'always', 'pascal-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase scope should fail for "always lowercase"', async () => {
	const [actual] = scopeCase(await parsed.pascalcase, 'always', 'lowercase');
	expect(actual).toBeFalsy();
});

test('with pascalcase scope should fail for "always kebabcase"', async () => {
	const [actual] = scopeCase(await parsed.pascalcase, 'always', 'kebab-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase scope should fail for "always camelcase"', async () => {
	const [actual] = scopeCase(await parsed.pascalcase, 'always', 'camel-case');
	expect(actual).toBeFalsy();
});

test('with pascalcase scope should succeed for "always pascalcase"', async () => {
	const [actual] = scopeCase(await parsed.pascalcase, 'always', 'pascal-case');
	expect(actual).toBeTruthy();
});

test('with mixedcase scope should fail for "always uppercase"', async () => {
	const [actual] = scopeCase(await parsed.mixedcase, 'always', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with uppercase scope should fail for "never uppercase"', async () => {
	const [actual] = scopeCase(await parsed.uppercase, 'never', 'uppercase');
	expect(actual).toBeFalsy();
});

test('with uppercase scope should succeed for "always uppercase"', async () => {
	const [actual] = scopeCase(await parsed.uppercase, 'always', 'uppercase');
	expect(actual).toBeTruthy();
});

test('with uppercase scope should succeed for "always [uppercase, lowercase]"', async () => {
	const [actual] = scopeCase(await parsed.uppercase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with lowercase scope should succeed for "always [uppercase, lowercase]"', async () => {
	const [actual] = scopeCase(await parsed.lowercase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with mixedcase scope should fail for "always [uppercase, lowercase]"', async () => {
	const [actual] = scopeCase(await parsed.mixedcase, 'always', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeFalsy();
});

test('with mixedcase scope should pass for "always [uppercase, lowercase, camel-case]"', async () => {
	const [actual] = scopeCase(await parsed.mixedcase, 'always', [
		'uppercase',
		'lowercase',
		'camel-case'
	]);
	expect(actual).toBeTruthy();
});

test('with mixedcase scope should pass for "never [uppercase, lowercase]"', async () => {
	const [actual] = scopeCase(await parsed.mixedcase, 'never', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeTruthy();
});

test('with uppercase scope should fail for "never [uppercase, lowercase]"', async () => {
	const [actual] = scopeCase(await parsed.uppercase, 'never', [
		'uppercase',
		'lowercase'
	]);
	expect(actual).toBeFalsy();
});

test('with slash in scope should succeed for "always pascal-case"', async () => {
	const commit = await parse('feat(Modules/Graph): add Pie Chart');
	const [actual] = scopeCase(commit, 'always', 'pascal-case');
	expect(actual).toBeTruthy();
});

test('with slash in subject should succeed for "always sentence case"', async () => {
	const commit = await parse('chore: Update @angular/core');
	const [actual] = scopeCase(commit, 'always', 'sentencecase');
	expect(actual).toBeTruthy();
});
