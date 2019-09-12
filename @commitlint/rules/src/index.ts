const loadRule = (name: string) => {
	const rule = require(`./${name}`);
	return rule.default || rule;
};

export default {
	'body-case': loadRule('body-case'),
	'body-empty': loadRule('body-empty'),
	'body-leading-blank': loadRule('body-leading-blank'),
	'body-max-length': loadRule('body-max-length'),
	'body-max-line-length': loadRule('body-max-line-length'),
	'body-min-length': loadRule('body-min-length'),
	'footer-empty': loadRule('footer-empty'),
	'footer-leading-blank': loadRule('footer-leading-blank'),
	'footer-max-length': loadRule('footer-max-length'),
	'footer-max-line-length': loadRule('footer-max-line-length'),
	'footer-min-length': loadRule('footer-min-length'),
	'header-case': loadRule('header-case'),
	'header-full-stop': loadRule('header-full-stop'),
	'header-max-length': loadRule('header-max-length'),
	'header-min-length': loadRule('header-min-length'),
	'references-empty': loadRule('references-empty'),
	'scope-case': loadRule('scope-case'),
	'scope-empty': loadRule('scope-empty'),
	'scope-enum': loadRule('scope-enum'),
	'scope-max-length': loadRule('scope-max-length'),
	'scope-min-length': loadRule('scope-min-length'),
	'signed-off-by': loadRule('signed-off-by'),
	'subject-case': loadRule('subject-case'),
	'subject-empty': loadRule('subject-empty'),
	'subject-full-stop': loadRule('subject-full-stop'),
	'subject-max-length': loadRule('subject-max-length'),
	'subject-min-length': loadRule('subject-min-length'),
	'type-case': loadRule('type-case'),
	'type-empty': loadRule('type-empty'),
	'type-enum': loadRule('type-enum'),
	'type-max-length': loadRule('type-max-length'),
	'type-min-length': loadRule('type-min-length')
};
