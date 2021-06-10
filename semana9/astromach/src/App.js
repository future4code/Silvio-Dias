import { useState } from 'react';
import Header from './Components/Header/header';
import Home from './Components/Home/home'

import { Div, CardProfile } from './style'

const App = (props)=> { 
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
    </Div>
  );
}

export default App;
