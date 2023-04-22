import React from 'react'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { Aside } from './components/aside'
import { Topnav } from './components/topnav'
import { Body } from './components/body'


export const SegurTecApp = () => {
  return (
    <div>
      <header>
      < Header />
      
    </header>

    <div>
      < Topnav />
    </div>
    <div >
      < Body />
    </div>

    <aside >
      < Aside />
    </aside>

    <footer>
      < Footer />
    </footer>
    </div>
  )
}
