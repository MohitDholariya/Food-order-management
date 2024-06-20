import React, { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import products from '../Assets/Fake-data/Product'
import ProductCard from './Category/ProductCard'
import { Row, Col, Container } from 'reactstrap'
import Helmet from '../Component/Helmet/Helmet'
import Counter from './Counter'
// CSS
import '../Assets/css/home.css'

// Images 
import homes1 from '../../src/Assets/Fake-data/Image/home-s1.jpg'
import sec3img from '../../src/Assets/Fake-data/Image/about.jpg'
import pilogo from '../../src/Assets/Fake-data/Image/pi-logo.png'
import blogo from '../../src/Assets/Fake-data/Image/b-logo.png'
import palogo from '../../src/Assets/Fake-data/Image/pa-logo.png'
import clogo from '../../src/Assets/Fake-data/Image/c-logo.png'
import blog1 from '../../src/Assets/Fake-data/Image/blog-1.jpg'
import blog2 from '../../src/Assets/Fake-data/Image/blog-2.jpg'
import blog3 from '../../src/Assets/Fake-data/Image/blog-3.jpg'
import blog4 from '../../src/Assets/Fake-data/Image/blog-4.jpg'
import chef1 from '../../src/Assets/Fake-data/Image/chef_1.jpg'
import chef2 from '../../src/Assets/Fake-data/Image/chef_2.jpg'
import chef3 from '../../src/Assets/Fake-data/Image/chef_3.jpg'
import chef4 from '../../src/Assets/Fake-data/Image/chef_4.jpg'


export default function Home() {

  const [category, setCategory] = useState('ALL')
  const [allProduct, setAllProduct] = useState(products)
  const [hotmeal, sethotmeal] = useState([])

  useEffect(() => {
    if (category === "ALL") {
      const filterproducts = products.slice(0, 28);

      setAllProduct(filterproducts);
    }
    else if (category === "PIZZA") {
      const FilterProducts = products.filter((item) => item.category === "Pizza");
      // console.log(FilterProducts);
      setAllProduct(FilterProducts);
    }
    else if (category === "BURGER") {
      const FilterProducts = products.filter((item) => item.category === "Burger");
      // console.log(FilterProducts);
      setAllProduct(FilterProducts);
    }
    else if (category === "PASTA") {
      const FilterProducts = products.filter((item) => item.category === "Pasta");
      // console.log(FilterProducts);
      setAllProduct(FilterProducts);
    }
    else if (category === "COCKTAIL") {
      const FilterProducts = products.filter((item) => item.category === "Cocktail");
      // console.log(FilterProducts);
      setAllProduct(FilterProducts);
    }

  }, [category]);

  useEffect(() => {
    const FilterPizza = products.filter((item) => item.category === "Pizza");
    const PizzaSlice = FilterPizza.slice(8, 12);
    sethotmeal(PizzaSlice);
  }, [])

  return (
    <Helmet title='Home'>
      <div>
        {/* Section 1 */}
        <div className='container-fluid p-0'>
          <div className='col-sm-12 col-12'>
            <img src={homes1} className='section1-img' alt=''></img>
            <div className='section1-div'>
              <h4>WELCOME</h4>
              <h1>We Cooked Your Desired Pizza Recipes.</h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary rgelialia.</p>
              <div className='text-center'>
                <Link to='/' className='btn sec1-btn1 px-4 py-3 me-2'>Order Now</Link>
                <Link to='/' className='btn sec1-btn2 px-4 py-3'>View Menu</Link>
              </div>
            </div>
          </div>
        </div>
        {/* Section 1 END */}

        {/* Section 2 */}
        <div className="container-fluid">
          <div className="row" style={{ backgroundColor: '#000' }}>
            <div className='col-md-8 col-12 mt-3'>
              <div className='row'>
                <div className="col-md-4 col-12 d-flex">
                  <div><h4><i className="fa-solid fa-phone sec2-icons"></i></h4></div>
                  <div className='ps-3'>
                    <h5 className='sec2-h5'>000 (123) 456 7890</h5>
                    <p className='sec2-p'>A small river named Duden flows</p>
                  </div>
                </div>
                <div className="col-md-4 col-12 d-flex">
                  <div><h4><i className="fa-solid fa-location-crosshairs sec2-icons"></i></h4></div>
                  <div className='ps-3'>
                    <h5 className='sec2-h5'>198 West 21th Street</h5>
                    <p className='sec2-p'>Suite 721 New York NY 10016</p>
                  </div>
                </div>
                <div className="col-md-4 col-12 d-flex">
                  <div><h4><i className="fa-regular fa-clock sec2-icons"></i></h4></div>
                  <div className='ps-3'>
                    <h5 className='sec2-h5'>Open Monday-Saturday</h5>
                    <p className='sec2-p'>10:00 AM - 12:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-12" style={{ backgroundColor: '#fac564' }}>
              <div className='d-flex aligns-items-center'>
                <h5><i className="fa-brands fa-twitter sec2-icon-it"></i></h5>
                <h5><i className="fa-brands fa-facebook-f sec2-icon-f ms-2"></i></h5>
                <h5><i className="fa-brands fa-instagram sec2-icon-it"></i></h5>
              </div>
            </div>
          </div>
        </div>
        {/* Section 2 END */}

        {/* Section 3 END */}

        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-6 col-12 p-0'>
              <img src={sec3img} alt='' className='sec3-img' />
            </div>
            <div className='col-md-6 col-12 sec3-bgimg sec3-maindiv'>
              <div className='sec3-div1 mb-4'>
                <h2 className='sec3-h2'>Welcome to <span className='sec3-span flaticon-pizza'>Pizza</span> A Restaurant</h2>
              </div>
              <div className=''>
                <p className='sec3-p'>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would
                  have been rewritten a thousand times and everything that was left from its origin would be the word
                  "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing
                  the copy said could convince her and so it didn’t take long until a few insidious Copy Writers
                  ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they
                  abused her for their.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 END */}

        {/* Section 4  OUR SERVICES*/}
        <div className='sec4-bgimg'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 pt-5 mb-5 text-center'>
                <h2 className='mb-4 sec4-h2'>Our Services</h2>
                <p className='sec4-p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className='row pb-5'>
              <div className='col-md-4'>
                <div className='text-center'>
                  <div className='justify-content-center mb-5'>
                    <span className='flaticon-diet display-1'></span>
                  </div>
                  <div>
                    <h3 className='sec4-h3'>Healthy Foods</h3>
                    <p className='sec4-p'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='text-center'>
                  <div className='justify-content-center mb-5'>
                    <span className='flaticon-bicycle display-1'></span>
                  </div>
                  <div>
                    <h3 className='sec4-h3'>Fastest Delivery</h3>
                    <p className='sec4-p'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='text-center'>
                  <div className='justify-content-center mb-5'>
                    <span className='flaticon-pizza-1 display-1'></span>
                  </div>
                  <div>
                    <h3 className='sec4-h3'>Original Recipes</h3>
                    <p className='sec4-p'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 END */}

        {/* Section 5 PRODUCT DETAILS*/}
        <div className='bgimg'>
          <Container>
            <Row>
              <Col lg='12' className='text-center pt-5'>
                <h1 className='sec5-h1 mb-5'>Popular Foods</h1>
              </Col>
              <Col lg='12'>
                <div className='sec5-main d-flex align-items-center justify-content-center gap-sm-4'>
                  <button className={`fw-bold ${category === 'ALL' ? 'sec5-btn' : 'sec5-btnall' }`} onClick={() => setCategory("ALL")}>ALL FOOD</button>
                  <button className={`fw-bold ${category === 'PIZZA' ? 'sec5-logobtnactive' : 'sec5-logobtn' }`} onClick={() => setCategory("PIZZA")}><img src={pilogo} alt='' className='sec5-logo me-1' />PIZZA</button>
                  <button className={`fw-bold ${category === 'BURGER' ? 'sec5-logobtnactive' : 'sec5-logobtn' }`} onClick={() => setCategory("BURGER")}><img src={blogo} alt='' className='sec5-logo me-1' />BURGER</button>
                  <button className={`fw-bold ${category === 'PASTA' ? 'sec5-logobtnactive' : 'sec5-logobtn' }`} onClick={() => setCategory("PASTA")}><img src={palogo} alt='' className='sec5-logo me-1' />PASTA</button>
                  <button className={`fw-bold ${category === 'COCKTAIL' ? 'sec5-logobtnactive' : 'sec5-logobtn' }`} onClick={() => setCategory("COCKTAIL")}><img src={clogo} alt='' className='sec5-logo me-1' />COCKTAIL</button>
                </div>
              </Col>
            </Row>
          </Container>

          {/* <Row className='m-0'>
            {
              allProduct.map((item) => {
                return <Col lg='3' md='4' sm='6' className='mt-5 ' key={item.id}>
                  <ProductCard item={item}></ProductCard>
                </Col>
              })
            }
          </Row> */}
          <div className='row m-0'>
          {
            allProduct.map((item) => {
              return <div className='col-lg-3 col-md-4 col-sm-6 col-12 pt-5' key={item.id}>
                <ProductCard item={item}></ProductCard>
              </div>
            })
          }
        </div>

        </div>
        {/* Section 5 END */}

        {/* Section 6 */}
        {/* RECENT BOLG  */}
        <div className='sec6-bgimg'>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 col-12 text-center mt-5 mb-4">
                <h2 className="mb-3 text-white">Recent blog</h2>
                <p className='text-white'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-3 col-sm-6 col-12">
                <div className="align-self-stretch">
                  <div>
                    <img src={blog1} alt='' className='w-100' />
                  </div>
                  <div className="py-4 d-block">
                    <div className="d-flex">
                      <p className='sec6-p me-2'>Sept 10, 2023</p>
                      <p className='sec6-p me-3'>Admin</p>
                      <p className='sec6-p'><span className='text-white me-1'><i className="fa-solid fa-comment"></i></span>19</p>
                    </div>
                    <h3 className='sec6-h3'>The Delicious Pizza's</h3>
                    <p className='sec6-p'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="align-self-stretch">
                  <div>
                    <img src={blog2} alt='' className='w-100' />
                  </div>
                  <div className="py-4 d-block">
                    <div className="d-flex">
                      <p className='sec6-p me-2'>Sept 10, 2023</p>
                      <p className='sec6-p me-3'>Admin</p>
                      <p className='sec6-p'><span className='text-white me-1'><i className="fa-solid fa-comment"></i></span>19</p>
                    </div>
                    <h3 className='sec6-h3'>Biggies Burger's</h3>
                    <p className='sec6-p'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="align-self-stretch">
                  <div>
                    <img src={blog3} alt='' className='w-100' />
                  </div>
                  <div className="py-4 d-block">
                    <div className="d-flex">
                      <p className='sec6-p me-2'>Sept 10, 2023</p>
                      <p className='sec6-p me-3'>Admin</p>
                      <p className='sec6-p'><span className='text-white me-1'><i className="fa-solid fa-comment"></i></span>19</p>
                    </div>
                    <h3 className='sec6-h3'>Tasty Pasta's</h3>
                    <p className='sec6-p'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-12">
                <div className="align-self-stretch">
                  <div>
                    <img src={blog4} alt='' className='w-100' />
                  </div>
                  <div className="py-4 d-block">
                    <div className="d-flex">
                      <p className='sec6-p me-2'>Sept 10, 2023</p>
                      <p className='sec6-p me-3'>Admin</p>
                      <p className='sec6-p'><span className='text-white me-1'><i className="fa-solid fa-comment"></i></span>19</p>
                    </div>
                    <h3 className='sec6-h3'>Awesome Cocktail's</h3>
                    <p className='sec6-p'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Hot Meals */}
            <div>
              <div className='text-center'>
                <h1 className='text-white mt-5 mb-3'>HOT MEALS</h1>
              </div>
              <Row className='m-0'>
                {
                  hotmeal.map((item) => {
                    return <Col lg='3' md='6' sm='6' className='mt-5 ' key={item.id}>
                      <ProductCard item={item}></ProductCard>
                    </Col>
                  })
                }
              </Row>
            </div>
            {/* OUR chef */}
            <div>
              <div className="text-center mt-5 pb-5">
                <h2 className="text-white">Our Chef</h2>
                <p className="sec6-p m-0">Far far away, behind the word mountains, far from the countries Vokalia and
                  Consonantia, there live the blind texts.</p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-sm-4">
                  <div className="chef-card">
                    <div>
                      <img src={chef1} alt='' className='product-img mx-auto d-block' />
                    </div>
                    <div className="text-center mt-3">
                      <h3 className='sec6-cname mb-3'>Tom Smith</h3>
                      <span className="sec6-span mb-3">Burger Specialist</span>
                      <p className='sec6-p'>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-sm-4">
                  <div className="chef-card">
                    <div>
                      <img src={chef2} alt='' className='product-img mx-auto d-block' />
                    </div>
                    <div className="text-center mt-3">
                      <h3 className='sec6-cname mb-3'>MARK WILSON</h3>
                      <span className="sec6-span mb-3">Pasta Specialist</span>
                      <p className='sec6-p'>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-sm-4">
                  <div className="chef-card">
                    <div>
                      <img src={chef3} alt='' className='product-img mx-auto d-block' />
                    </div>
                    <div className="text-center mt-3">
                      <h3 className='sec6-cname mb-3'>PATRICK JACOBSON</h3>
                      <span className="sec6-span mb-3">Cocktail Specialist</span>
                      <p className='sec6-p'>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-12 mb-4 mb-sm-4">
                  <div className="chef-card">
                    <div>
                      <img src={chef4} alt='' className='product-img mx-auto d-block' />
                    </div>
                    <div className="text-center mt-3">
                      <h3 className='sec6-cname mb-3'>IVAN DORCHSNER</h3>
                      <span className="sec6-span mb-3">Pizza Specialist</span>
                      <p className='sec6-p'>Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia, there live the blind texts.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6 END */}

        {/* Section 7 Dynamic Counter */}

        <div>
          {/* {counterState} */}
          <Counter></Counter>
        </div>

        {/* Section 7 END */}

      </div>
    </Helmet>

  )
}
