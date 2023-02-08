import React from 'react'
import { DecoratorFn } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
  <ThemeProvider theme={storyTheme}>
    <GlobalStyle />
    <StoryFn />
  </ThemeProvider>
)}

export const globalDecorators = [
  withTheme,
  withDesign
]