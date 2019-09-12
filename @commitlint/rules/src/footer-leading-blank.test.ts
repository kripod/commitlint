import parse from '@commitlint/parse';
import footerLeadingBlank from './footer-leading-blank';

const messages = {
	simple: 'test: subject',
	body: 'test: subject\nbody',
	trailing: 'test: subject\nbody\n\n',
	without: 'test: subject\nbody\nBREAKING CHANGE: something important',
	withoutBody:
		'feat(new-parser): introduces a new parsing library\n\nBREAKING CHANGE: new library does not support foo-construct',
	with: 'test: subject\nbody\n\nBREAKING CHANGE: something important',
	withMulitLine:
		'test: subject\nmulti\nline\nbody\n\nBREAKING CHANGE: something important',
	withDoubleNewLine: 'fix: some issue\n\ndetailed explanation\n\ncloses #123'
};

const parsed = {
	simple: parse(messages.simple),
	body: parse(messages.body),
	trailing: parse(messages.trailing),
	without: parse(messages.without),
	withoutBody: parse(messages.withoutBody),
	with: parse(messages.with),
	withMulitLine: parse(messages.withMulitLine),
	withDoubleNewLine: parse(messages.withDoubleNewLine)
};

test('with simple message should succeed for empty keyword', async () => {
	const [actual] = footerLeadingBlank(await parsed.simple);
	expect(actual).toBeTruthy();
});

test('with simple message should succeed for "never"', async () => {
	const [actual] = footerLeadingBlank(await parsed.simple, 'never');
	expect(actual).toBeTruthy();
});

test('with simple message should succeed for "always"', async () => {
	const [actual] = footerLeadingBlank(await parsed.simple, 'always');
	expect(actual).toBeTruthy();
});

test('with body message should succeed for empty keyword', async () => {
	const [actual] = footerLeadingBlank(await parsed.body);
	expect(actual).toBeTruthy();
});

test('with body message should succeed for "never"', async () => {
	const [actual] = footerLeadingBlank(await parsed.body, 'never');
	expect(actual).toBeTruthy();
});

test('with body message should succeed for "always"', async () => {
	const [actual] = footerLeadingBlank(await parsed.body, 'always');
	expect(actual).toBeTruthy();
});

test('with trailing message should succeed for empty keyword', async () => {
	const [actual] = footerLeadingBlank(await parsed.trailing);
	expect(actual).toBeTruthy();
});

test('with trailing message should succeed for "never"', async () => {
	const [actual] = footerLeadingBlank(await parsed.trailing, 'never');
	expect(actual).toBeTruthy();
});

test('with trailing message should succeed for "always"', async () => {
	const [actual] = footerLeadingBlank(await parsed.trailing, 'always');
	expect(actual).toBeTruthy();
});

test('without body should fail for "never"', async () => {
	const [actual] = footerLeadingBlank(await parsed.withoutBody, 'never');
	expect(actual).toBeFalsy();
});

test('without body should succeed for "always"', async () => {
	const [actual] = footerLeadingBlank(await parsed.withoutBody, 'always');
	expect(actual).toBeTruthy();
});

test('without blank line before footer should fail for empty keyword', async () => {
	const [actual] = footerLeadingBlank(await parsed.without);
	expect(actual).toBeFalsy();
});

test('without blank line before footer should succeed for "never"', async () => {
	const [actual] = footerLeadingBlank(await parsed.without, 'never');
	expect(actual).toBeTruthy();
});

test('without blank line before footer should fail for "always"', async () => {
	const [actual] = footerLeadingBlank(await parsed.without, 'always');
	expect(actual).toBeFalsy();
});

test('with blank line before footer should succeed for empty keyword', async () => {
	const [actual] = footerLeadingBlank(await parsed.with);
	expect(actual).toBeTruthy();
});

test('with blank line before footer should fail for "never"', async () => {
	const [actual] = footerLeadingBlank(await parsed.with, 'never');
	expect(actual).toBeFalsy();
});

test('with blank line before footer should succeed for "always"', async () => {
	const [actual] = footerLeadingBlank(await parsed.with, 'always');
	expect(actual).toBeTruthy();
});

test('with blank line before footer and multiline body should succeed for empty keyword', async () => {
	const [actual] = footerLeadingBlank(await parsed.withMulitLine);
	expect(actual).toBeTruthy();
});

test('with blank line before footer and multiline body should fail for "never"', async () => {
	const [actual] = footerLeadingBlank(await parsed.withMulitLine, 'never');
	expect(actual).toBeFalsy();
});

test('with blank line before footer and multiline body should succeed for "always"', async () => {
	const [actual] = footerLeadingBlank(await parsed.withMulitLine, 'always');
	expect(actual).toBeTruthy();
});

test('with double blank line before footer and double line in body should fail for "never"', async () => {
	const [actual] = footerLeadingBlank(await parsed.withDoubleNewLine, 'never');
	expect(actual).toBeFalsy();
});

test('with double blank line before footer and double line in body should succeed for "always"', async () => {
	const [actual] = footerLeadingBlank(await parsed.withDoubleNewLine, 'always');
	expect(actual).toBeTruthy();
});
