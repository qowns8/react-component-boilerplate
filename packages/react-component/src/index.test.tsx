import { render, screen } from '@testing-library/react'
import React from 'react'
import Component from './index'

test('renders learn react link', () => {
  render(
    <Component
      headers={[
        {
          key: 'head',
          title: 'HEAD',
        },
      ]}
      data={[
        {
          head: '111',
        },
      ]}
    />,
  )
  screen.getByText('HEAD')
  screen.getByText('111')
})
