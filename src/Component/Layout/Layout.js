import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routers from '../../Routes/Routers'
import Carts from '../../Pages/Carts/Carts'
import { useSelector } from 'react-redux'


export default function Layout() {
  const showCart = useSelector(state => state.cartUi.isCartVisible)
  return (
    <div>
        <Header></Header>
        {showCart ? <Carts></Carts> : ''}
        <div>
           <Routers></Routers>
        </div>
        <Footer></Footer>
    </div>
  )
}
