import React from 'react'
import Button from './components/Buttons/Button'
import { goToBack } from './routes/Cordinator'
import { useHistory } from "react-router-dom";
import Router from './routes/Router'



import { Main } from "./styled"

function App() {
  const history = useHistory()
  return (
    <Main>
      <Router/>
    </Main>
  )
}

export default App
