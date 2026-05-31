import { createRootRoute, createRoute, createRouter, createHashHistory } from '@tanstack/react-router'
import { RootLayout } from '../components/RootLayout'
import { HomePage } from '../routes/HomePage'
import { CheckoutPage } from '../routes/CheckoutPage'

const rootRoute = createRootRoute({ component: RootLayout })

const indexRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage })
const checkoutRoute = createRoute({ getParentRoute: () => rootRoute, path: '/checkout', component: CheckoutPage })

const routeTree = rootRoute.addChildren([indexRoute, checkoutRoute])

export const router = createRouter({ routeTree, history: createHashHistory() })

declare module '@tanstack/react-router' {
  interface Register { router: typeof router }
}
