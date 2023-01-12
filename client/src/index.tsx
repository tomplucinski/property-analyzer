import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './router'
import { store } from './store/store'
import { Provider } from 'react-redux'
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_OAUTH_DOMAIN || ''}
    clientId={process.env.REACT_APP_OAUTH_CLIENT_ID || ''}
    redirectUri="http://localhost:3000/home"
  >
    <Provider store={store}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </Provider>
  </Auth0Provider>,
)
