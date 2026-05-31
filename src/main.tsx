import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { FeaturebaseProvider } from 'featurebase-js/react'
import { router } from './lib/router'
import './lib/i18n'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FeaturebaseProvider appId="6a1cc5975538c00c170d1f12">
      <RouterProvider router={router} />
    </FeaturebaseProvider>
  </StrictMode>
)
