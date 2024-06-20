import React, { useState, useEffect } from 'react'
import Commonsection from '../Component/CommonSection'
import "../Assets/css/fooddetail.css"
import { useParams } from 'react-router-dom'
import products from '../Assets/Fake-data/Product'
import ProductCard from './Category/ProductCard'
import { useDispatch } from 'react-redux';
import { cartAction } from '../Store/Slice/Cartslice'
import Helmet from '../Component/Helmet/Helmet'
import ReviewForm from './ReviewSection/Review'


export default function FoodDetail() {
  const { id } = useParams();
  const Product = products.find((product) => product.id === id)
  // console.log(Product);


  const { title, image01, image02, image03, price, category, desc } = Product

  const [previewImg, setPreviewImg] = useState(image01)

  const [tab, setTab] = useState("desc")

  const relatedProducts = products.filter((item) => item.category === category && item.id !== id);

  useEffect(() => {
    setPreviewImg(Product.image01);
    window.scrollTo(0, 0)
  }, [Product]);

  // ADD TO CART
  const dispatch = useDispatch()

  const addtocart = () => {
    dispatch(cartAction.addItem({
      id, title, image01, price, desc
    }))
  }
  return (<Helmet title='FoodDetails'>
    <div className='bgimg' style={{ paddingBottom: '50px' }}>
      <Commonsection title={title}></Commonsection>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-12 col-sm-6 d-block'>
            <div className='food-image'>
              <img src={previewImg} alt="burger" className='w-50' />
            </div>
            <div className='col-4 col-sm-4'>
              <div className='w-100 py-2 d-flex food-image2'>
                <img src={image01} alt="burger" className='w-75 mx-2' onClick={() => setPreviewImg(image01)} />
                <img src={image02} alt="burger" className='w-75 mx-2' onClick={() => setPreviewImg(image02)} />
                <img src={image03} alt="burger" className='w-75 mx-2' onClick={() => setPreviewImg(image03)} />
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 d-flex food-detail'>
            <div className='my-auto'>
              <h1 className='display-5 text-white fw-bolder '>{title}</h1>
              <span className='d-flex text-white mt-4'><p className='me-3 py-2'>Price :</p><h2 style={{ color: '#fac564' }}>${price}</h2></span>
              <span className='d-flex'><p className='me-1 py-2 text-white'>Category :</p><p className='p-2 w-25 fw-bold' style={{ color: '#fac564' }}>{category}</p></span>
              <button className='addcart-btn fw-bold mt-2' onClick={addtocart}>Add to Cart</button>
            </div>
          </div>

        </div>
        <div className='my-5 py-5'>
          <h2 className='text-center text-white'>Related Items</h2>
          <div>
            <div className='row mt-2'>
              {
                relatedProducts.map((item) => {
                  return <div className='col-lg-3 col-md-4 col-sm-6 col-12 pt-4' key={item.id}>
                    <ProductCard item={item}></ProductCard>
                  </div>

                })
              }
            </div>
          </div>
        </div>
        {/* Description & Review */}
        <div className='tab d-flex align-items-center justify-content-center gap-5 mt-5 mb-4'>
          <h5 className={`tabs ${tab === 'desc' ? 'tabs_active' : ''}`} onClick={() => setTab('desc')}>Description</h5>
          <h5 className={`tabs ${tab === 'review' ? 'tabs_active' : ''}`} onClick={() => setTab('review')}>Review</h5>
        </div>
        {
          tab === "desc" ? (<div className=' text-white'>
            {desc}
          </div>) : (
            <ReviewForm></ReviewForm>
          )
        }


      </div>
    </div>
  </Helmet>

  )
}
