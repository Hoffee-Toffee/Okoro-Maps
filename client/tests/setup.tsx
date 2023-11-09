import { beforeEach, expect } from 'vitest'
import { cleanup, render } from '@testing-library/react/pure'
import * as matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom/vitest'

import routes from '../routes.tsx'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

beforeEach(cleanup)
expect.extend(matchers)

export function setupApp(route = '/') {
  const router = createMemoryRouter(routes, {
    initialEntries: [route],
  })

  const screen = render(<RouterProvider router={router} />)

  const user = userEvent.setup()
  return { user, ...screen }
}
