import { expect } from '@storybook/jest'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { restaurants } from 'stub/restaurants'

import { RestaurantCard } from './RestaurantCard'

export default {
  title: 'Components/RestaurantCard',
  component: RestaurantCard,
  args: {
    ...restaurants[0],
  },
} as ComponentMeta<typeof RestaurantCard>

const Template: ComponentStory<typeof RestaurantCard> = (args) => <RestaurantCard {...args} />

export const Default = Template.bind({})
Default.play = async ({ canvasElement, args }) => {
  // get a canvas from canvasElement which can be used to query elements from within
  const canvas = within(canvasElement)
  // click on the restaurant card
  await userEvent.click(canvas.getByTestId('restaurant-card'))
  // assert that the onClick spy was called
  await expect(args.onClick).toHaveBeenCalled()
}

export const New = Template.bind({})
New.args = {
  isNew: true,
}

export const Closed = Template.bind({})
Closed.args = {
  isClosed: true,
}
Closed.play = async ({ canvasElement, args }) => {
  const canvas = within(canvasElement)
  await userEvent.click(canvas.getByTestId('restaurant-card'))
  await expect(args.onClick).not.toHaveBeenCalled()
}

export const Loading = Template.bind({})
Loading.args = {
  isLoading: true,
}
