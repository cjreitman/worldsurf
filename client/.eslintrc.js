const globals = require('globals')

module.exports = {
	parserOptions: {
		ecmaVersion: 2021,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true
		}
	},
	globals: {
		...globals.browser
	},
	env: {
		browser: true,
		node: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'standard'
	],
	plugins: [
		'react'
	],
	rules: {
		quotes: ['error', 'single'],
		curly: ['error', 'all'],
		indent: ['error', 'tab'],
		'no-tabs': 'off'
	}
}
