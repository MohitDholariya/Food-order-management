import React, { useEffect } from "react";
import CartItems from './CartItems';
import { useDispatch, useSelector } from "react-redux";
import { CartActionUi } from "../../Store/Slice/CartsliceUi";
import { Link } from "react-router-dom";

export default function Carts() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    console.log("cart", cartItems);
    const TotalAmount = useSelector((state) => state.cart.totalAmount);
    const cartShow = useSelector((state) => state.cartUi.isCartVisible);

    const toggleCart = () => {
        dispatch(CartActionUi.toggle());
    };

    useEffect(() => {
        const handleScroll = () => {
            if (cartShow) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "auto";
            }
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.body.style.overflow = "auto";
        };
    }, [cartShow]);

    window.onload = function () {
        adjustHeight();
    };

    function adjustHeight() {
        var cartsSection = document.getElementById('carts_section');
        var carts = document.querySelector('.carts');
        var height = carts.offsetHeight;
        cartsSection.style.height = height + 'px';
    }



    return (
        <div>
            <div className="carts_section">
                <div className={`carts ${cartShow ? "active_show" : ""}`}>
                    <div className="carts_close_btn d-flex align-items-center  justify-content-between">
                        <h4 className=" mb-0">Cart item</h4>
                        <span onClick={toggleCart}>
                        <i className="fa-solid fa-xmark"></i>
                        </span>
                    </div>

                    <div className=" carts_item_list">
                        {cartItems.length === 0 ? (
                            <h5 className=" text-center mt-5 text-dark">No item added to the cart</h5>
                        ) : (
                            cartItems.map((item, index) => {
                                return <CartItems key={index} item={item}></CartItems>;
                            })
                        )}
                    </div>

                    <div className="carts_Button">
                        <h6 className=" mb-2 text-dark">
                            Total: <span>${TotalAmount}</span>
                        </h6>
                        <div className="d-flex">
                            <Link to="/cart" onClick={toggleCart} className="pe-3"><button>View Cart</button></Link>
                            <Link to="/checkout" onClick={toggleCart}><button>Check Out</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
