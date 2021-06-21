import React from 'react'
import GlobalState from './globalstate/GlobalState'
import Routes from './router/Routes'

function App() {
  return (
    <div>
      <GlobalState>
        <Routes/>
      </GlobalState>
    </div>
  )
}

export default App
