module.exports = {
  staticDirs: ['../public'],
  stories: [
    '../src/docs/Introduction.stories.mdx',
    '../src/docs/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-designs',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
