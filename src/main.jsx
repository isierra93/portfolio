import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'aos/dist/aos.css'
import './index.css'
import Aos from 'aos'

Aos.init({
  delay: 100,
  once: false
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
