import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles/reset.css'
import './styles/fonts.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/styles.css'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('app'))

setTimeout(() => {
  root.render(<App />)
}, 100)
