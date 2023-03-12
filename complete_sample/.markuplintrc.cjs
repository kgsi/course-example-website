module.exports = {
  parser: {
    '\\.astro$': '@markuplint/astro-parser',
  },
  rules: {
    'no-empty-palpable-content': false,
    'deprecated-element': true,
    'character-reference': false,
    'no-boolean-attr-value': false,
    'permitted-contents': false,
    'class-naming': false,
    'no-default-value': false,
    'wai-aria': false,
    'attr-value-quotes': false,
    'use-list': false,
    'placeholder-label-option': true,
    'no-use-event-handler-attr': false,
    'require-accessible-name': true,
    'required-element': true,
    'end-tag': false,
    'required-attr': true,
    'landmark-roles': false,
    'disallowed-element': true,
    'case-sensitive-tag-name': false,
    'label-has-control': false,
    'id-duplication': true,
    'require-datetime': true,
    'invalid-attr': true,
    'attr-duplication': true,
    'case-sensitive-attr-name': false,
    'deprecated-attr': true,
    'required-h1': true,
    'no-refer-to-non-existent-id': true,
    doctype: 'always',
    'no-hard-code-id': false,
    'ineffective-attr': false,
  },
  overrides: {
    './src/components/Button.astro': {
      rules: {
        'require-accessible-name': false,
        'invalid-attr': false,
      },
    },
    './src/components/GlobalHeader.astro': {
      rules: {
        'invalid-attr': false,
      },
    },
    './src/components/Table.astro': {
      rules: {
        'require-accessible-name': false,
      },
    },
  },
}
