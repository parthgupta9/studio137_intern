import { useState } from 'react'
import Header from './components/header/Header'

import './App.css'
import Main from './components/main/Main'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Second from './components/main/Second'
import Third from './components/main/third'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
  <Routes>
    <Route path='/' element={<Main/>} />
    <Route path ='/second' element={<Second/>}/>
    <Route path ='/third' element={<Third/>}/>
  </Routes>
  </BrowserRouter>
      
    </>
  )
}

export default App
