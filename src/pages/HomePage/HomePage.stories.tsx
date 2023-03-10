// src/pages/HomePage/HomePage.stories.tsx
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { BASE_URL } from 'api'
import { rest } from 'msw'
import { restaurants } from 'stub/restaurants'

import { HomePage } from './HomePage'

export default {
  title: 'Pages/HomePage',
  component: HomePage,
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?node-id=135%3A258',
    },
  },
  msw: {
    handlers: [rest.get(BASE_URL, (req, res, ctx) => res(ctx.json(restaurants)))],
  },
} as ComponentMeta<typeof HomePage>

// No need to pass args in the function because HomePage does not take props
const Template: ComponentStory<typeof HomePage> = () => <HomePage />

export const Default = Template.bind({})
