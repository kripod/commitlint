import {Commit} from '@commitlint/parse';

/**
 * Rules always have a condition.
 * It can be either "always" (as tested), or "never" (as tested).
 * For example, `header-full-stop` can be enforced as "always", or "never".
 */
export type RuleCondition = 'always' | 'never';

/**
 * Rules match the input either as successful or failed.
 * For example, when `header-full-stop` detects a full stop and is set as "always"; it's true.
 * If the `header-full-stop` discovers a full stop but is set to "never"; it's false.
 */
export type RuleOutcome = [boolean, string?];

/**
 * Rules receive a parsed commit, condition, and possible additional settings through value.
 * When no rule condition is provided, it will default to `always`.
 */
export type Rule<Value = never> = (
	parse: Commit,
	when?: RuleCondition,
	value?: Value
) => RuleOutcome;
