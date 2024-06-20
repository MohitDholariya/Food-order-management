import React from 'react'
import Helmet from '../Component/Helmet/Helmet'
import Commonsection from '../Component/CommonSection'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cartAction } from '../Store/Slice/Cartslice'
import '../Assets/css/cart.css'

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const TotalQuantity = useSelector(state => state.cart.totalQuantity);
  const TotalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <Helmet title={'Cart'}>
      <Commonsection title="Your Cart"></Commonsection>

      <section className='cart_section bg-cart'>
        <div className=' container'>
          {cartItems.length === 0 ? (
            <div>
              <div className='cart_table'>
                <table className='table table-bordered border-dark text-center' >
                  <thead>
                    <tr className=' text-center align-middle'>
                      <th style={{ backgroundColor: '#fac564' }}>Image</th>
                      <th style={{ backgroundColor: '#fac564' }}>Product Title</th>
                      <th style={{ backgroundColor: '#fac564' }}>Price</th>
                      <th style={{ backgroundColor: '#fac564' }}>Quantity</th>
                      <th style={{ backgroundColor: '#fac564' }}>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ backgroundColor: '#fac564' }}>...</td>
                      <td style={{ backgroundColor: '#fac564' }}>...</td>
                      <td style={{ backgroundColor: '#fac564' }}>...</td>
                      <td style={{ backgroundColor: '#fac564' }}>...</td>
                      <td style={{ backgroundColor: '#fac564' }}>...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className=' text-center mt-5'>
                <h2 className=' mb-4 '>Your Cart is Empty</h2>
                <Link to='/menu'><button className='shopping_cart'>Go To Shopping</button></Link>
              </div>
            </div>
          ) : (
            <div className='cart_table'>
              <table className=' table table-bordered border-dark' style={{ backgroundColor: 'dark' }}>
                <thead>
                  <tr className=' text-center align-middle'>
                    <th style={{ backgroundColor: '#fac564' }}>Image</th>
                    <th style={{ backgroundColor: '#fac564' }}>Product Title</th>
                    <th style={{ backgroundColor: '#fac564' }}>Price</th>
                    <th style={{ backgroundColor: '#fac564' }}>Quantity</th>
                    <th style={{ backgroundColor: '#fac564' }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item) => {
                      return <Tr key={item.id} item={item}></Tr>;
                    })
                  }
                </tbody>
                <tbody>
                  <tr>
                    <th style={{ backgroundColor: '#fac564' }} colSpan='4'>
                      <div className=' text-center align-middle'>
                        <h4 className=' my-2'>Total Quantity:</h4>
                      </div>
                    </th>
                    <td style={{ backgroundColor: '#fac564' }}>
                      <div className=' text-center align-middle'>
                        <h4 className=' my-2'>{TotalQuantity}</h4>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th style={{ backgroundColor: '#fac564' }} colSpan='4'>
                      <div className=' text-center align-middle'>
                        <h4 className=' my-2'>Total Amount:</h4>
                      </div>
                    </th>
                    <td style={{ backgroundColor: '#fac564' }}>
                      <div className=' text-center align-middle'>
                        <h4 className=' my-2'>${TotalAmount}</h4>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='page_btn mt-5'>
                <Link to='/menu'><button className='shopping_cart'>Go To Shopping</button></Link>
                <Link to='/checkout'><button className='checkout_btn'>Proceed to checkout</button></Link>
              </div>
            </div>
          )}
        </div>
      </section>

    </Helmet>
  )
}

const Tr = (props) => {
  const { image01, title, price, quantity, id } = props.item;

  const dispatch = useDispatch();
  const increment = () => {
    dispatch(cartAction.addItem({
      id, price, title, image01
    }));
  };

  const decrement = () => {
    dispatch(cartAction.removeItem({
      price, id, quantity, title, image01
    }));
  };

  // const deleteProduct = () => {
  //   dispatch(cartAction.deleteItem(id))
  // }

  const deleteProduct = () => {
    dispatch(cartAction.deleteItem({
      price, id, quantity
    }));
  };

  return (
    <tr>
      <td style={{ backgroundColor: '#fac564' }} className='text-center align-middle cart_box_img'><img src={image01} alt="" /></td>
      <td style={{ backgroundColor: '#fac564' }} className='text-center align-middle'>{title}</td>
      <td style={{ backgroundColor: '#fac564' }} className='text-center align-middle'>$ {price}</td>
      <td style={{ backgroundColor: '#fac564' }} className='text-center align-middle'>
        <div className='increment_decremet d-flex align-items-center justify-content-between'>
          <span className='increment text-dark' onClick={increment}><i className="fa-solid fa-plus"></i></span>
          <span className='quantity text-dark'>{quantity}</span>
          <span className='decrement text-dark' onClick={decrement}><i className="fa-solid fa-minus"></i></span>
        </div>
      </td>
      <td style={{ backgroundColor: '#fac564' }} className=' text-center align-middle' onClick={deleteProduct}><i className="fa-solid fa-trash text-dark"></i></td>
    </tr>
  )
}
