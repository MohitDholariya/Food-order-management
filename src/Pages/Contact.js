import React from 'react'
import Helmet from '../Component/Helmet/Helmet'
import Commonsection from '../Component/CommonSection';

//Css
import '../Assets/css/contact.css'

// images



export default function Contact() {
  return (
    <Helmet title='Contact'>
      <Commonsection title="Contact"></Commonsection>

      <div className='contact-img'>
        <div className='container'>
          <div className="row justify-content-center">
            <div className='col-md-6 col-12 text-white'>
              <div className="col-md-12 mt-5 mb-5">
                <h2 className='text-white'>Contact Information</h2>
              </div>
              <div className="col-md-12 mb-5">
                <p>Address : <span style={{ color: '#fac564' }}> 203 Fake St. Mountain View, San Francisco, California, USA</span> </p>
              </div>
              <div className="col-md-12 mb-5">
                <p>Phone : <span style={{ color: '#fac564' }}> + 2 392 3929 210</span></p>
              </div>
              <div className="col-md-12 mb-5">
                <p>Email : <span style={{ color: '#fac564' }}>fooddelicious@gmail.com</span></p>
              </div>
              <div className="col-md-12 mb-3">
                <p>Website : <span style={{ color: '#fac564' }}>foodorder.com</span></p>
              </div>
            </div>
            <div className='col-md-6 col-12'>
              <div className="col-md-12 mt-5 mb-5">
                <form action="#" className="contact-form border-0">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group mt-3">
                        <input type="text" style={{ backgroundColor: '#fac564' }} className="form-control" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group mt-3">
                        <input type="text" style={{ backgroundColor: '#fac564' }} className="form-control" placeholder="Your Email" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <input type="text" style={{ backgroundColor: '#fac564' }} className="form-control" placeholder="Subject" />
                  </div>
                  <div className="form-group mt-4">
                    <textarea name="" style={{ backgroundColor: '#fac564' }}  id="" cols="30" rows="6" className="form-control" placeholder="Message"></textarea>
                  </div>
                  <div className="form-group mt-4">
                    <input type="submit" value="Send Message" className="send-btn" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Helmet>
  )
}