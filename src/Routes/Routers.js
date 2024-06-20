import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Allfood from '../Pages/Allfood'
import Fooddetails from '../Pages/Fooddetails'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Contact from '../Pages/Contact'
import Login from '../Pages/Login'
import Pdf from '../Pages/Pdf'
import Register from '../Pages/Register'


export default function Routers() {
  return (
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/menu' element={<Allfood></Allfood>}></Route>
        <Route path='/menu/:id' element={<Fooddetails></Fooddetails>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/pdf' element={<Pdf></Pdf>}></Route>
      </Routes>
  )
}
