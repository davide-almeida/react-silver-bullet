import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from '../src/App'

describe('App', () => {

  beforeEach( () => {
      render(<App />)
    }
  )

  it('Verifying text on App Component', () => {
    const dialogDiv = screen.getByRole('heading')

    expect(dialogDiv).not.toHaveTextContent('banana')
    expect(dialogDiv).toHaveTextContent('React-Silver-Bullet')
  })
})
