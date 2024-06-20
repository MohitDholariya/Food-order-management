import React, { useState } from 'react';
import ProductCard from './Category/ProductCard';
import products from '../Assets/Fake-data/Product';
import ReactPaginate from 'react-paginate';
import Commonsection from '../Component/CommonSection';
import '../Assets/css/menu.css';
import Helmet from '../Component/Helmet/Helmet';

export default function Allfood() {

  const [pageNumber, setPageNumber] = useState(0);
  const [title, setTitle] = useState('');
  const [sortBy, setSortBy] = useState('');
  
  // Filtered products
  const filter = products.filter(item =>
    item.title.toLowerCase().includes(title.toLowerCase()) ||
    item.title.toUpperCase().includes(title.toUpperCase()) ||
    item.category.toLowerCase().includes(title.toLowerCase()) ||
    item.category.toUpperCase().includes(title.toUpperCase()));

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;

  // Sorting the filtered products
  let sortedProducts = [...filter];
  if (sortBy === 'alphabet') {
    sortedProducts.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === 'reverseAlphabet') {
    sortedProducts.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortBy === 'lowToHigh') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'highToLow') {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  // Display products
  const displayProduct = sortedProducts.slice(visitedPage, visitedPage + productPerPage);
  
  // Pagination based on filtered products
  const pageCount = Math.ceil(sortedProducts.length / productPerPage);

  // Pagination based on all products
  const allProductsPageCount = Math.ceil(products.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const searchHandler = (e) => {
    const search = e.target.value;
    setTitle(search);
    setPageNumber(0); // Reset page number when searching
  };

  const handleSortBy = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <Helmet title='Menu'>
      <Commonsection title="All Foods"></Commonsection>
      <div >
        <div className='bgimg' style={{ paddingBottom: '1rem' }}>
          <div className='row m-0 pt-5'>
            <div className='col-8'>
              <div className='d-flex w-50'>
                <input type="text" placeholder='I am Looking For...' className='form-control' value={title} onChange={searchHandler} />
                <button className='search-btn fw-bold ms-2' onClick={searchHandler}>Search</button>
              </div>
            </div>
            <div className='col-4'>
              <div className='d-flex justify-content-end'>
                <label className='text-white fw-bold me-2 my-auto'>Filter :</label>
                <select onChange={handleSortBy} className='filter fw-bold'>
                  <option value="" className='fw-bold'>None</option>
                  <option value="alphabet" className='fw-bold'>A To Z</option>
                  <option value="reverseAlphabet" className='fw-bold'>Z To A</option>
                  <option value="lowToHigh" className='fw-bold'>Low To High</option>
                  <option value="highToLow" className='fw-bold'>High To Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className='row m-0'>
            {
              displayProduct.map((item) => {
                return <div className='col-lg-3 col-md-4 col-sm-6 col-12 pt-4' key={item.id}>
                  <ProductCard item={item}></ProductCard>
                </div>
              })
            }
          </div>
          {/* Pagination */}
          <div className='pt-5 pagination_btn'>
            <ReactPaginate pageCount={title ? pageCount : allProductsPageCount} onPageChange={changePage} previousLabel={"Perv"} nextLabel={"Next"} containerClassName='pagination'></ReactPaginate>
          </div>
          {/* Pagination End */}
        </div>
      </div>
    </Helmet>
  )
}
