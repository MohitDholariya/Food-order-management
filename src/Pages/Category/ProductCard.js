import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartAction } from '../../Store/Slice/Cartslice';

export default function ProductCard(props) {
    const { id, title, image01, price, desc } = props.item;

    const dispatch = useDispatch()

    const addtocart = () => {
        dispatch(cartAction.addItem({
            id, title, image01, price, desc
        }))
    }

    return (
            <div>
                <div className='product-card'>
                    <div className=''>
                        <Link to={`/menu/${id}`}><img src={image01} alt='' className='product-img mx-auto d-block' /></Link>
                    </div>
                    <div className='text-center'>
                        <h5 className='product-title mt-4 mb-3'><Link to={`/foods/${id}`}>{title}</Link></h5>
                        <p className='product-desc'>{desc}</p>
                        <p className='product-price'>${price}</p>
                        <button className='product-btn' onClick={addtocart}>Add to Cart</button>
                    </div>
                </div>
            </div>
    )

}
