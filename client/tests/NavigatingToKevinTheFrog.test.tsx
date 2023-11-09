// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import { setupApp } from './setup.tsx'

describe('Navigating to kevin', () => {
  it('takes us from the home page to kevin', async () => {
    const { user, ...screen } = setupApp('/')
    const link = await screen.findByRole('link', {
      name: 'Is there a frog named Kevin?',
    })
    expect(link).toBeVisible()
    await user.click(link)
    const paragraph = await screen.findByText(/a frog named kevin/)
    expect(paragraph).toBeVisible()
    expect(paragraph).toMatchInlineSnapshot(`
      <p>
        It's impossible to have a frog named 
        kevin
        , the laws forbid it
      </p>
    `)
  })
})
