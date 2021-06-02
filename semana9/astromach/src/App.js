import { useState } from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home'
import {restartMatch} from './Components/api'

import { Div, CardProfile } from './style'




const App = (props)=> { 

  const [login, setLogin] = useState()
  const [pages, setPages] = useState('Card')

  const changePage = (pg) =>{
    setPages(pg)
  }

  return (
    <Div>
      <CardProfile>
      <Header
      page = {changePage}
      checkPage = {pages}
      />
      <Home
      pagination = {pages}
      />
      </CardProfile>
    <button onClick = {restartMatch}>Reiniciar Match</button>
    </Div>
  );
}

export default App;
