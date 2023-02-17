import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sparkle } from 'phosphor-react'

import './global.css'
import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes'

const tweets = [
  'meu primeiro',
  'meu segundo',
  'meu terceiro'
]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='layout'>
      <Sidebar />

      <div className='content'>
        <main className='timeline' >
          <Header title="Home" />

          <RouterProvider router={router} />

          <form className="new-tweet-form">
            <label htmlFor="tweet">
              <img src="https://github.com/apolomoraes.png" alt="Foto de usuário" />
              <textarea id='tweet' placeholder="What's happening?" />
            </label>

            <button type='submit' >Tweet</button>
          </form>

          <Separator />

          {
            tweets.map(tweet => {
              return <Tweet key={tweet} content={tweet} />
            })
          }
        </main>
      </div>
    </div>
  </React.StrictMode >,
)
