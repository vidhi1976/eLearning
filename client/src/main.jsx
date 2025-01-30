import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { appStore } from './app/store'
import { Provider } from 'react-redux'
import { Toaster } from './components/ui/sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode >
    <Provider store={appStore}>
    {/* appStore: The Redux store, created using RTK, which holds the global state of your app. */}
    {/* Provider: A React-Redux component that makes the Redux store available to your entire app */}
      <App />
      <Toaster/>
    </Provider>
  </StrictMode>
)
