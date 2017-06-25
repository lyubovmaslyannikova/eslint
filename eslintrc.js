/**
 * 0 - "off"
 * 1 - "warn"
 * 2 - "error"
 */

module.exports = {
	"env": {
		"browser": true,
		"node": true,
		"jquery": true,
		"commonjs": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"parserOptions": {
		"sourceType": "module",
		"impliedStrict": true,
	},
	"rules": {
		// enforce consistent indentation
		"indent": [2, "tab"],

		// enforce consistent linebreak style
		"linebreak-style": [2, "unix"],

		// enforce the consistent use of either backticks, double, or single quotes
		"quotes": [2, "single", {
			"allowTemplateLiterals": true
		}],

		// disallow constant expressions in conditions
		"no-constant-condition": [1, {
			"checkLoops": false
		}],

		// require the use of === and !==
		"eqeqeq": [2, "smart"],

		// enforce a maximum cyclomatic complexity allowed in a program
		"complexity": [2, {
			"max": 3
		}],

		// disallow multiple spaces. spaces in a row that are not used for indentation are typically mistakes.
		"no-multi-spaces": [2, {
			"ignoreEOLComments" : true
		}],

		// disallow multiline strings
		"no-multi-str": 2,

		// disallow variable redeclaration. Checks redeclaration of built-in globals, such as Object, Array, Number.
		"no-redeclare": [2, {
			"builtinGlobals": true
		}],

		// disallow unused variables
		"no-unused-vars": 2,

		// enforce consistent spacing inside array brackets
		"array-bracket-spacing": [2, "never"],

		// enforce consistent spacing inside single-line blocks
		"block-spacing": [2, "always"],

		// enforce consistent brace style for blocks. Enforces one true brace style.
		"brace-style": [2, "1tbs"],

		// enforce camelcase naming convention. enforces camelcase style for property names.
		"camelcase": [2, {
			"properties": "always"
		}],

		// enforce consistent spacing before and after commas
		"comma-spacing": [2, {
			"before": false,
			"after": true
		}],

		// enforce consistent comma style (default: last)
		"comma-style": 2,

		// enforce consistent spacing inside computed property brackets
		"computed-property-spacing": 2,

		// enforce newline at the end of file, with no multiple empty lines
		"eol-last": [2, "always"],

		// disallow spacing between function identifiers and their invocations
		"func-call-spacing": [2, "never"],

		// enforce consistent spacing between keys and values in object literal properties. (test: 1)
		"key-spacing": [2, {
			"beforeColon": false,
			"afterColon": true
		}],

		// enforce consistent spacing before and after keywords (if, else...)
		"keyword-spacing": [2, {
			"before": true,
			"after": true
		}],

		// enforce position of line comments
		"line-comment-position": [2, "above"],

		// require empty lines around comments
		"lines-around-comment": [2, {
			"beforeBlockComment": true,
			"beforeLineComment": true
		}],

		// enforce a maximum depth that blocks can be nested
		"max-depth": [2, {
			"max": 4
		}],

		// enforce a maximum line length
		"max-len": [2, {
			"code": 80,
			"tabWidth": 2,
			"ignoreUrls": true,
			"ignoreComments": true,
			"ignoreStrings": true,
			"ignoreTemplateLiterals": true,
			"ignoreRegExpLiterals": true
		}],

		// enforce a maximum number of statements allowed per line
		"max-statements-per-line": [2, {
			"max": 1
		}],

		// require constructor names to begin with a capital letter
		"new-cap": 2,

		// requires or disallows blank lines between the given 2 kinds of statements
		"padding-line-between-statements": [2, {
			"blankLine": "always",
			"prev": "*",
			"next": ["return", "break"]
		}],

		// disallow new operators with the String, Number, and Boolean objects
		"no-new-wrappers": 2,

		// disallow mixed spaces and tabs for indentation.
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],

		// disallow multiple empty lines
		"no-multiple-empty-lines": [2, {
			"max": 2
		}],

		// disallow Array constructors
		"no-array-constructor": 2,

		// disallow Object constructors
		"no-new-object": 2,

		// disallow trailing whitespace at the end of lines
		"no-trailing-spaces": 2,

		// enforce consistent spacing inside braces
		"object-curly-spacing": [2, "never"],

		// enforce variables to be declared either together or separately in functions
		"one-var": [2, "always"],

		// require or disallow newlines around variable declarations
		"one-var-declaration-per-line": [2, "always"],

		// disallow padding within blocks
		"padded-blocks": [2, "never"],

		// require quotes around object literal property names.
		"quote-props": [2, "consistent"],

		// require semicolons instead of ASI
		"semi": [2, "always"],

		// enforce consistent spacing before and after semicolons
		"semi-spacing": [2, {
			"before": false,
			"after": true
		}],

		// enforce location of semicolons
		"semi-style": [2, "last"],

		// enforce consistent spacing before blocks {
		"space-before-blocks": [2, "always"],

		// enforce consistent spacing before function definition opening parenthesis (function..() )
		"space-before-function-paren": [2, "never"],

		// require parentheses around arrow function arguments ( (a) => {}; )
		"arrow-parens": [2, "always"],

		// enforce consistent spacing inside parentheses
		"space-in-parens": [2, "never"],

		// require spacing around infix operators
		"space-infix-ops": 2,

		// enforce consistent spacing after the // or /* in a comment
		"spaced-comment": [2, "always"],

		// disallow Unicode byte order mark (BOM)
		"unicode-bom": [2, "never"],

		// enforce consistent brace style for all control statements
		"curly": 2,

		// disallow irregular whitespace outside of strings and comments
		"no-irregular-whitespace": 2,

		// ECMAScript 6

		// enforce consistent spacing around * operators in generator functions
		"generator-star-spacing": [2, "after"]
	}
};
