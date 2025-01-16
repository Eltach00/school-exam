module.exports = {
  root: true,
  env: {
    es6: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['tsconfig.*?.json'],
        createDefaultProgram: true,
      },
      extends: [
        'plugin:@angular-eslint/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:prettier/recommended',
      ],
      rules: {
        // eslint rules
        'max-len': [
          'error',
          { code: 140, ignorePattern: '^import\\s.+\\sfrom\\s.+;$' },
        ],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
        'no-console': [
          'error',
          {
            allow: ['warn', 'error'],
          },
        ],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'semi': 'error',
        'complexity': ['error', 10],
        'no-restricted-imports': [
          'error',
          {
            patterns: [
              'rxjs/internal/*',
              'rxjs/index',
              'rxjs/index/*',
              'src/*',
              '!src/environments',
              '!src/translation-version',
            ],
          },
        ],
        'class-methods-use-this': 'off',
        'linebreak-style': 'off',
        'implicit-arrow-linebreak': 'off',
        'padding-line-between-statements': 'error',
        'import/no-cycle': 'off',
        'radix': ['error', 'as-needed'],

        // turn off eslint && turn on typescript-eslint rules
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { classes: false },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        'no-implied-eval': 'off',
        '@typescript-eslint/no-implied-eval': 'error',
        'no-throw-literal': 'off',
        '@typescript-eslint/no-throw-literal': 'error',
        'dot-notation': 'off',
        '@typescript-eslint/dot-notation': 'off',

        // typescript-eslint rules
        '@typescript-eslint/typedef': [
          'error',
          {
            variableDeclaration: true,
            propertyDeclaration: true,
            memberVariableDeclaration: true,
            parameter: true,
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          {
            allowExpressions: true,
          },
        ],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          { accessibility: 'no-public' },
        ],
        '@typescript-eslint/no-inferrable-types': 'off',
        '@typescript-eslint/return-await': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',

        // import rules
        'import/order': [
          'error',
          {
            'alphabetize': {
              order: 'asc',
              caseInsensitive: true,
            },
            'newlines-between': 'always',
            'groups': [
              'external',
              'internal',
              'unknown',
              'parent',
              'sibling',
              'index',
              'builtin',
            ],
          },
        ],
        'import/no-extraneous-dependencies': [
          'error',
          {
            packageDir: './',
          },
        ],
        'import/prefer-default-export': 'off',
      },
    },
    {
      files: ['*.component.html'],
      extends: ['plugin:@angular-eslint/template/recommended'],
      rules: {
        'max-len': ['error', { code: 80 }],
      },
    },
    {
      files: ['*.component.ts'],
      extends: ['plugin:@angular-eslint/template/process-inline-templates'],
    },
    {
      files: ['src/**/*.spec.ts', 'src/**/*.d.ts'],
      parserOptions: {
        project: './src/tsconfig.spec.json',
      },
      extends: ['plugin:jasmine/recommended'],
      plugins: ['jasmine'],
      env: { jasmine: true },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
