import { createRootRoute, createRoute, createRouter, createHashHistory, redirect } from '@tanstack/react-router'
import { RootLayout } from '../components/RootLayout'
import { HomePage } from '../routes/HomePage'
import { CheckoutPage } from '../routes/CheckoutPage'
import { DemoPage } from '../routes/DemoPage'

const rootRoute = createRootRoute({ component: RootLayout })

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })
const checkoutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/checkout', component: CheckoutPage })
const demoRoute = createRoute({ getParentRoute: () => rootRoute, path: '/demo', component: DemoPage })
const catchAllRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  beforeLoad: () => { throw redirect({ to: '/' }) },
})

const routeTree = rootRoute.addChildren([indexRoute, checkoutRoute, demoRoute, catchAllRoute])

export const router = createRouter({ routeTree, history: createHashHistory() })

declare module '@tanstack/react-router' {
  interface Register { router: typeof router }
}
