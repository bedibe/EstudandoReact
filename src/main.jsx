import React from 'react'
import ReactDOM from 'react-dom/client'
import { Tarefa } from './componentes/Tarefa/Tarefa'
import { About } from './componentes/About/About'
import { Post } from './componentes/Post/Index'
import './componentes/Tarefa/style.css'


import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Menu } from './componentes/Menu/Index'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Menu />
  <Routes>
    <Route path='/' element = {<Tarefa />} />
    <Route path='/about' element = {<About />} />
    <Route path='/posts' element = {<Post />} />
    <Route path='/posts/:id' element = {<Post />} />

  </Routes>
  </BrowserRouter>
  </React.StrictMode>
)

