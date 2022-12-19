import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router } from './router'
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
    ,
  </Provider>,
)
