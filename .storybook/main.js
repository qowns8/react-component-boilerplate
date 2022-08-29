module.exports = {
  "stories": [
    "../packages/docs/**/*.stories.mdx",
    "../packages/docs/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    'storybook-addon-paddings'
  ],
  "framework": "@storybook/react"
}