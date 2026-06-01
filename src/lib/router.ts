import { createRootRoute, createRoute, createRouter, createHashHistory, Navigate } from '@tanstack/react-router'
import { RootLayout } from '../components/RootLayout'
import { HomePage } from '../routes/HomePage'
import { CheckoutPage } from '../routes/CheckoutPage'
import { DemoPage } from '../routes/DemoPage'

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => Navigate({ to: '/' }),
})

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })
const checkoutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/checkout', component: CheckoutPage })
const demoRoute = createRoute({ getParentRoute: () => rootRoute, path: '/demo', component: DemoPage })

const routeTree = rootRoute.addChildren([indexRoute, checkoutRoute, demoRoute])

export const router = createRouter({ routeTree, history: createHashHistory() })

declare module '@tanstack/react-router' {
  interface Register { router: typeof router }
}
