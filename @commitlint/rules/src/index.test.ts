import path from 'path';
import globby from 'globby';
import {values} from 'lodash';
import rules from '.';

test('exports all rules', async () => {
	const expected = (await glob('*.ts')).sort();
	const actual = Object.keys(rules).sort();
	expect(actual).toMatchObject(expected);
});

test('rules export functions', () => {
	const actual = values(rules);
	expect(actual.every(rule => typeof rule === 'function')).toBeTruthy();
});

async function glob(pattern: string) {
	const files = await globby([path.join(__dirname, pattern)], {
		ignore: ['**/index.ts', '**/types.ts', '**/*.test.ts'],
		cwd: __dirname
	});
	return files.map(relative).map(toExport);
}

function relative(filePath: string) {
	return path.relative(__dirname, filePath);
}

function toExport(fileName: string) {
	return path.basename(fileName, path.extname(fileName));
}
