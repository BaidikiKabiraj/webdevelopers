import React from 'react'
import Nav from './comp/nav'
import Footer from './comp/footer'
import {BrowserRouter} from 'react-router-dom'

import Body from './comp/body'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Nav/>
      <Body/>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
