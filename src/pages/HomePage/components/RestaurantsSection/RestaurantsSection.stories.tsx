import { ComponentMeta, ComponentStory } from '@storybook/react'

import { restaurants } from '../../../../stub/restaurants'

import { RestaurantsSectionComponent as RestaurantsSection } from './RestaurantsSection.container'

export default {
  title: 'Pages/HomePage/Component/RestaurantsSection',
  component: RestaurantsSection,
} as ComponentMeta<typeof RestaurantsSection>

const Template: ComponentStory<typeof RestaurantsSection> = (args) => (
  <RestaurantsSection {...args} />
)

export const Default = Template.bind({})
Default.args = {
  title: 'Our favorite picks',
  restaurants,
}

export const Loading = Template.bind({})
Loading.args = {
  title: 'Our favorite picks',
  isLoading: true,
}
