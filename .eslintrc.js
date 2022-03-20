module.exports = {
  root: true,
  extends: 'vuepress',
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      extends: 'vuepress-typescript',
      parserOptions: {
        project: ['tsconfig.json'],
      },
      rules: {
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'vue/component-tags-order': [
          'error',
          {
            order: ['script', 'template', 'style'],
          },
        ],
        'vue/multi-word-component-names': 'off',
      },
    },
    {
      files: ['*.vue'],
      globals: {
        defineEmits: 'readonly',
        defineProps: 'readonly',
      },
      rules: {
        // disable for setup script
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['clientAppEnhance.ts'],
      rules: {
        'vue/match-component-file-name': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.ts'],
      env: {
        jest: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        'vue/one-component-per-file': 'off',
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['docs/**'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
  rules: {
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'comma-spacing': 'error',
    'key-spacing': 'error',
    'no-trailing-spaces': 'error',
  },
}