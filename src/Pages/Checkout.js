import React, { useState } from "react";
import Helmet from '../Component/Helmet/Helmet'
import Commonsection from '../Component/CommonSection'
import { useSelector } from "react-redux";
import Success from "./Success";
import { Link } from "react-router-dom";
import '../Assets/css/checkout.css'

export default function Checkout() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [address, setAddress] = useState("");
  const [paymentOption, setPaymentOption] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const SubTotal = useSelector((state) => state.cart.totalAmount);
  const HandlingCharges = SubTotal === 0 ? 0 : 10;
  const Tax = SubTotal === 0 ? 0 : SubTotal * 0.18;
  const TotalPayable = SubTotal + Number(HandlingCharges) + Tax;

  const shippingInfo = [];
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loader when form is submitted
    // Simulate payment process delay (replace with actual payment logic)
    setTimeout(() => {
      const userShipping = {
        Fname: firstName,
        Lname: lastName,
        email: emailAddress,
        phone: phoneNumber,
        city: city,
        pincode: pinCode,
        address: address,
        paymentOption: paymentOption,
        paymentDetails: paymentDetails
      };
      setIsSubmitted(true);
      setIsLoading(false); // Stop loader after payment is done
      shippingInfo.push(userShipping);
      console.log("shippinginfo", shippingInfo);
    }, 2000); // Simulate 2 seconds delay for payment process
  };

  return (
    <Helmet title={"Checkout"}>
      <Commonsection title="Checkout"></Commonsection>

      <section className="checkout_section bg-checkout">
        <div className="container">
          <div className="checkout">
            <div className="checkout_form">
              {isSubmitted ? (
                <Success />
              ) : (
                <form action="" onSubmit={submitHandler}>
                  <div className="checkout_form_input checkout_input mb-3">
                    <div>
                      <label className="form-label text-dark">First Name</label>
                      <input type="text" placeholder="First Name *" className="form-control" onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div>
                      <label className="form-label text-dark">Last Name</label>
                      <input type="text" placeholder="Last Name *" className="form-control" onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                  </div>
                  <div className="checkout_form_input checkout_input mb-3">
                    <div>
                      <label className="form-label text-dark">Email Address</label>
                      <input type="email" placeholder="Email Address" className="form-control" onChange={(e) => setEmailAddress(e.target.value)} required />
                    </div>
                    <div>
                      <label className="form-label text-dark">Phone Number</label>
                      <input type="tel" placeholder="Phone Number" className="form-control" onChange={(e) => setPhoneNumber(e.target.value)} required />
                    </div>
                  </div>
                  <div className="checkout_form_input checkout_input mb-3">
                    <div>
                      <label className="form-label text-dark">City</label>
                      <input type="text" placeholder="Your City" className="form-control" onChange={(e) => setCity(e.target.value)} required />
                    </div>
                    <div>
                      <label className="form-label text-dark">Pin Code</label>
                      <input type="text" placeholder="Pin Code" className="form-control" onChange={(e) => setPinCode(e.target.value)} required />
                    </div>
                  </div>
                  <div className="checkout_form_input mb-3">
                    <div>
                      <label className="form-label text-dark">Address</label>
                      <input type="text" placeholder="Your Address" className="form-control" onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                  </div>
                  {/* <div className="payment_options"> 
                    <label className="form-label text-dark">Select Payment Option:</label>
                    <select value={paymentOption} onChange={(e) => setPaymentOption(e.target.value)} className="form-select mb-3" required>
                      <option value="">Choose...</option>
                      <option value="creditCard">Credit Card</option>
                      <option value="upi">UPI</option>
                    </select>
                    {paymentOption === "creditCard" && (
                      <div>
                        <label className="form-label text-dark">Credit Card</label>
                        <div className="input-group mb-3">
                          <span className="input-group-text"><i class="fa-solid fa-credit-card"></i></span>
                          <input type="text" placeholder="Card Number" className="form-control" onChange={(e) => setPaymentDetails(e.target.value)} required />
                          <input type="text" placeholder="MM/YY" className="form-control" style={{ width: '100px' }} required />
                          <input type="text" placeholder="CVC" className="form-control" style={{ width: '80px' }} required />
                        </div>
                      </div>
                    )}
                    {paymentOption === "upi" && (
                      <div>
                        <label className="form-label text-dark">UPI ID</label>
                        <input type="text" placeholder="Your UPI ID (e.g. example@upi)" className="form-control mb-3" onChange={(e) => setPaymentDetails(e.target.value)} required />
                      </div>
                    )}
                  </div>  */}
                  <div className="text-center">
                    <button type="submit" className="payment_btn">
                      {isLoading ? (
                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                      ) : (
                        "Pay Now"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
            <div className="charges_bills">
              <h4 className="text-dark">Total Charges</h4>
              <div className="charges mt-4">
                <h5 className="d-flex align-items-center justify-content-between text-dark">
                  Total payable <span>${TotalPayable.toFixed(2)}</span>
                </h5>
                <hr />
                <h5 className="d-flex align-items-center justify-content-between text-dark">
                  Sub Total <span>${SubTotal}</span>
                </h5>
                <h5 className="d-flex align-items-center justify-content-between text-dark">
                  Handling Charges <span>${HandlingCharges}</span>
                </h5>
                <h5 className="d-flex align-items-center justify-content-between text-dark">
                  Total Tax <span>${Tax.toFixed(2)}</span>
                </h5>
                <div className="text-center mt-5">
                  <Link to={'/pdf'}><button type="button" className="bill_btn">Bill</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Helmet>
  );
}
