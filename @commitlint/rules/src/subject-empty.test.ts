import parse from '@commitlint/parse';
import subjectEmpty from './subject-empty';

const messages = {
	empty: 'test: \nbody',
	filled: 'test: subject\nbody'
};

const parsed = {
	empty: parse(messages.empty),
	filled: parse(messages.filled)
};

test('without subject should succeed for empty keyword', async () => {
	const [actual] = subjectEmpty(await parsed.empty);
	expect(actual).toBeTruthy();
});

test('without subject should fail for "never"', async () => {
	const [actual] = subjectEmpty(await parsed.empty, 'never');
	expect(actual).toBeFalsy();
});

test('without subject should succeed for "always"', async () => {
	const [actual] = subjectEmpty(await parsed.empty, 'always');
	expect(actual).toBeTruthy();
});

test('with subject fail for empty keyword', async () => {
	const [actual] = subjectEmpty(await parsed.filled);
	expect(actual).toBeFalsy();
});

test('with subject succeed for "never"', async () => {
	const [actual] = subjectEmpty(await parsed.filled, 'never');
	expect(actual).toBeTruthy();
});

test('with subject fail for "always"', async () => {
	const [actual] = subjectEmpty(await parsed.filled, 'always');
	expect(actual).toBeFalsy();
});
