import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Badge } from './Badge'

// Metadata of our component
export default {
  title: 'Components/Badge',
  component: Badge,
  args: {
    text: 'Comfort food',
  },
} as ComponentMeta<typeof Badge>

// Base Template
const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />

export const Default = Template.bind({})

export const DarkTheme = Template.bind({})
DarkTheme.parameters = {
  theme: 'dark',
}
