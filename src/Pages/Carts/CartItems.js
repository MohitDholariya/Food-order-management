import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroupItem } from 'react-bootstrap'; // Import ListGroupItem from react-bootstrap
import { cartAction } from '../../Store/Slice/Cartslice';
import '../../Assets/css/cartsitem.css';

export default function CartItems(props) {
    const { image01, price, quantity, title, id } = props.item;
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(cartAction.addItem({
            id,
            price,
            title,
            image01
        }));
    };

    const decrement = () => {
        dispatch(cartAction.removeItem({
            price, id, quantity, title, image01
        }));
    };

    const deleteItem = () => {
        dispatch(cartAction.deleteItem({
            price, id, quantity
        }));
    };

    return (
        <div>
            <ListGroupItem className='carts_items_section'>
                <div className='carts_items'>


                    <div className='carts_items_info d-flex'>
                        <img src={image01} alt="" />

                        <div className='carts_product_info ms-5 d-flex  w-100 align-items-center justify-content-between gap-3' >
                            <div>
                                <h5 className='text-dark'>{title}</h5>
                                <p className='d-flex gap-4 align-items-center mb-2 text-dark'><span>${price}</span></p> {/* Assuming totalPrice is supposed to be price */}
                                <div className='increment_decremet d-flex align-items-center justify-content-between'>
                                    <span className='increment text-dark' onClick={increment}><i className="fa-solid fa-plus"></i></span>
                                    <span className='quantity text-dark'>{quantity}</span>
                                    <span className='decrement text-dark' onClick={decrement}><i className="fa-solid fa-minus"></i></span>
                                </div>
                            </div>

                            <div className='delete_btn pe-5'>
                                <span onClick={deleteItem}><i className="fa-solid fa-trash text-dark"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </ListGroupItem>
        </div>
    );
}
