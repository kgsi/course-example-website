module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  semi: false,
  printWidth: 130,
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
