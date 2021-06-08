import React from 'react'
import ApplicationFormPage from './pages/ApplicationFormPage'
import CreateTripPage from './pages/CreateTripPage'


import { Main } from "./styled"



function App() {
  return (
    <Main>
      <ApplicationFormPage/>
      <CreateTripPage/>
    </Main>
  )
}

export default App
