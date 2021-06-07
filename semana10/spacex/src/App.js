import React from 'react'
import Cards from './components/Cards/Cards'
import HomePage from './pages/HomePage'

import { Main } from "./styled"



function App() {
  return (
    <Main>
      <HomePage/>
      <Cards/>
    </Main>
  )
}

export default App
