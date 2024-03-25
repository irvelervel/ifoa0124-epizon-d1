import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/index.css'

import store from './redux/store'
import { Provider } from 'react-redux' // react-redux fornisce i componenti e gli hooks necessari
// per integrare uno store Redux all'interno di un'applicazione React

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // circondiamo App dal Provider, a cui abbiamo fornito la prop "store"
  <Provider store={store}>
    <App />
  </Provider>
)
