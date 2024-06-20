import React from 'react'
import '../../Assets/css/footer.css'

export default function Footer() {
  return (
    <div>
      <div className="bg-footer">
        <div className="container footer-pt">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h3 className='footer-h3 mb-5'>ABOUT US</h3>
              <p className='footer-p'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <div className='d-flex pt-2'>
                <h5><i className="fa-brands fa-twitter icons"></i></h5>
                <h5><i className="fa-brands fa-facebook-f icons-f"></i></h5>
                <h5><i className="fa-brands fa-instagram icons"></i></h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h3 className='footer-h3 mb-5'>DELIVERY TIME</h3>
              <p className='footer-p'>Monday-Saturday</p>
              <p className='footer-p'>10:00 AM - 12:00 PM</p>

              <p className='footer-p'>Sunday - Off Day</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h3 className='footer-h3 mb-5'>SERVICES</h3>
              <p className="footer-p">Cooked</p>
              <p className="footer-p">Deliver</p>
              <p className="footer-p">Quality Food</p>
              <p className="footer-p">Mixed</p>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-12">
              <h3 className='footer-h3 mb-5'>HAVE A QUESTION ?</h3>
              <div className='d-flex'>
                <span className='text-white pt-1'><i className="fa-solid fa-location-dot"></i></span>
                <p className='footer-p ps-3'>203 Fake St. Mountain View, San Francisco, California, USA</p>
              </div>
              <div className='d-flex'>
                <span className='text-white pt-1'><i className="fa-solid fa-phone"></i></span>
                <p className='footer-p ps-3'>+2 392 3929 210</p>
              </div>
              <div className='d-flex '>
                <span className='text-white pt-1'><i className="fa-solid fa-envelope"></i></span>
                <p className='footer-p ps-3 w-25'>fooddelicious@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <hr></hr>
        </div>
        <div className="text-center pt-3 pb-3">
          <p className="text-white footer-p">Copyright ©2024 All rights reserved | This template is made with by Mohit Dholariya.</p>
        </div>
      </div>
    </div>
  )
}
