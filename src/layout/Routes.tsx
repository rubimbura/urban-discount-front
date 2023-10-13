import { lazy } from 'react'

const Orders = lazy(() => import('../pages/orders'))

const routes = [
  {path: '/orders', element: Orders}
]

export default routes