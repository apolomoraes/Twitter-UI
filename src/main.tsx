import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tweet } from './components/Tweet'

import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Tweet user="Carla" like={10} >olá</Tweet>
    <Tweet user="apolo" like >olá</Tweet>
  </React.StrictMode>,
)
