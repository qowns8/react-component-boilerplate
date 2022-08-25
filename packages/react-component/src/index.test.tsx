import { render, screen } from '@testing-library/react'
import Component from './index'

test('renders learn react link', () => {
  render(<Component />)
  screen.getByText('그래야만')
});
