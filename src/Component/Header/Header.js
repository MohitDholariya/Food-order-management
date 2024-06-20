import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import '../../Assets/css/header.css'
import headerlogo from '../../Assets/Fake-data/Image/header-logo.png';
import { CartActionUi } from '../../Store/Slice/CartsliceUi';


export default function Header() {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const isCartVisible = useSelector(state => state.cartUi.isCartVisible);
  const [activePage, setActivePage] = useState('/home');

  // Function to handle click event and set active page
  const handlePageClick = (page) => {
    setActivePage(page);
  };
  const dispatch = useDispatch();
  // cart togglew
  const toggleCart = () => {
    dispatch(CartActionUi.toggle())
  };


  const nav__link = [
    {
      display: "Home",
      path: "/"
    },
    {
      display: "Menu",
      path: "/menu"
    },
    {
      display: "Cart",
      path: "/cart"
    },
    {
      display: "Contact",
      path: "/contact"
    }
  ]


  return (
    <div>
      <div className="bg-menubar container-fluid">
        <div className="row py-2 d-flex">
          <div className="col-lg-2 col-md-4 col-sm-6 col-6">
            <div className="ms-4 py-1">
              <img src={headerlogo} width="150px" alt='' />
            </div>
          </div>
          
          <div className="col-lg-8 offcanvas-lg offcanvas-end " tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel" style={{ backgroundColor: '#808080' }}>
            <div className="offcanvas-header" >
              <button type="button" style={{ color: 'white' }} className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
            </div>
            <ul className="nav nav-menu d-flex d-block d-lg-flex d-sm-block offcanvas-body py-3">
              {/* Add your menu items here */}
              {
                nav__link.map((item, index) => {
                  return (
                    <li key={index} className="nav-item px-3">
                      <NavLink to={item.path} onClick={() => handlePageClick(item.path)} className="nav-hover" style={{ color: activePage === item.path ? '#fac564' : '' }}>{item.display}</NavLink>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="col-lg-2 col-md-8 col-sm-6 col-6 d-flex justify-content-end pe-5">
            <div className="d-flex mt-1">
              <div style={{ position: 'relative' }}>
                <i className={`fa-solid fa-cart-shopping menu-icons ${isCartVisible ? 'active_show':''}`} onClick={toggleCart}></i>
                <div className="item-num">{totalQuantity}</div>
              </div>
              <i className="fa-solid fa-user menu-icons"></i>
            </div>

            <div className="d-flex justify-content-end d-block d-lg-none ">
              <span className="material-symbols-outlined me-3 mt-4 text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive">menu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
