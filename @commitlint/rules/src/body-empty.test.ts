import parse from '@commitlint/parse';
import bodyEmpty from './body-empty';

const messages = {
	empty: 'test: subject',
	filled: 'test: subject\nbody'
};

const parsed = {
	empty: parse(messages.empty),
	filled: parse(messages.filled)
};

test('with empty body should succeed for empty keyword', async () => {
	const [actual] = bodyEmpty(await parsed.empty);
	expect(actual).toBeTruthy();
});

test('with empty body should fail for "never"', async () => {
	const [actual] = bodyEmpty(await parsed.empty, 'never');
	expect(actual).toBeFalsy();
});

test('with empty body should succeed for "always"', async () => {
	const [actual] = bodyEmpty(await parsed.empty, 'always');
	expect(actual).toBeTruthy();
});

test('with body should fail for empty keyword', async () => {
	const [actual] = bodyEmpty(await parsed.filled);
	expect(actual).toBeFalsy();
});

test('with body should succeed for "never"', async () => {
	const [actual] = bodyEmpty(await parsed.filled, 'never');
	expect(actual).toBeTruthy();
});

test('with body should fail for "always"', async () => {
	const [actual] = bodyEmpty(await parsed.filled, 'always');
	expect(actual).toBeFalsy();
});
