import { render, screen } from '@testing-library/react'
import React from 'react'
import Component from './index'

test('renders learn react link', () => {
  render(<Component headers={[]} />)
  screen.getByText('그래야만')
})
