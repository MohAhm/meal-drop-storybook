import { configureStore } from '@reduxjs/toolkit'
import { DecoratorFn } from '@storybook/react'
import { initialize, mswDecorator } from 'msw-storybook-addon'
import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { withDesign } from 'storybook-addon-designs'
import { ThemeProvider } from 'styled-components'

import { rootReducer } from '../src/app-state'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import { darkTheme, lightTheme } from '../src/styles/theme'

initialize()

const withRouter: DecoratorFn = (StoryFn) => {
  return (
    <Router>
      <StoryFn />
    </Router>
  )
}

const withTheme: DecoratorFn = (StoryFn, context) => {
  const theme = context.parameters.theme || context.globals.theme
  const storyTheme = theme === 'dark' ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={storyTheme}>
      <GlobalStyle />
      <StoryFn />
    </ThemeProvider>
  )
}

const withStore: DecoratorFn = (StoryFn, { parameters }) => {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: parameters.store?.initialState,
  })
  return (
    <StoreProvider store={store}>
      <StoryFn />
    </StoreProvider>
  )
}

export const globalDecorators = [withTheme, withDesign, withRouter, mswDecorator, withStore]
