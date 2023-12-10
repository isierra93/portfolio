import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'aos/dist/aos.css'
import './index.css'
import Aos from 'aos'

Aos.init({
  delay: 150,
  once: true
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
