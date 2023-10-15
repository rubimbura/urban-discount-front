import { lazy } from 'react'

const Orders = lazy(() => import('../pages/orders'))
const Warehouse = lazy(() => import('../pages/warehouse'))
const Analytics = lazy(() => import('../pages/analytics'))
const Customers = lazy(() => import('../pages/customers'))
const Inventory = lazy(() => import('../pages/inventory'))
const Discount = lazy(() => import('../pages/discounts'))

const routes = [
  {path: '/orders', element: Orders},
  {path: '/warehouse', element: Warehouse},
  {path: '/analytics', element: Analytics},
  {path: '/customers', element: Customers},
  {path: '/inventory', element: Inventory},
  {path: '/discounts', element: Discount},


]

export default routes