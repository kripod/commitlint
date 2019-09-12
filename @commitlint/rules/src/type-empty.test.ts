import parse from '@commitlint/parse';
import typeEmpty from './type-empty';

const messages = {
	empty: '(scope):',
	filled: 'type: subject'
};

const parsed = {
	empty: parse(messages.empty),
	filled: parse(messages.filled)
};

test('without type should succeed for empty keyword', async () => {
	const [actual] = typeEmpty(await parsed.empty);
	expect(actual).toBeTruthy();
});

test('without type should fail for "never"', async () => {
	const [actual] = typeEmpty(await parsed.empty, 'never');
	expect(actual).toBeFalsy();
});

test('without type should succeed for "always"', async () => {
	const [actual] = typeEmpty(await parsed.empty, 'always');
	expect(actual).toBeTruthy();
});

test('with type fail for empty keyword', async () => {
	const [actual] = typeEmpty(await parsed.filled);
	expect(actual).toBeFalsy();
});

test('with type succeed for "never"', async () => {
	const [actual] = typeEmpty(await parsed.filled, 'never');
	expect(actual).toBeTruthy();
});

test('with type fail for "always"', async () => {
	const [actual] = typeEmpty(await parsed.filled, 'always');
	expect(actual).toBeFalsy();
});
