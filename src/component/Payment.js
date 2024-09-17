import React from "react";
import NavBar from "./NavBar";
import { IoMdArrowForward } from "react-icons/io";
import Footer from "./Footer";

const Payment = () => {
  return (
    <>
      <NavBar />
      <section className="section-py bg-body payment-first-section">
        <div className="container">
          <div className="card payment-card px-4" style={{ width: "81rem" }}>
            <div className="row">
              <div className="card-body col-lg-7 payment-card-body p-8 ps-7">
                <h4 className="mb-2">Checkout</h4>
                <p className="mb-0">
                  All plans include 40+ advanced tools and features to boost
                  your product.
                  <br />
                  Choose the best plan to fit your needs.
                </p>
                <div className="row my-5 gx-5">
                  <div className="col-md-6 ">
                    <div class="form-check payment-box checked">
                        <label class="form-check-label payment-input-box  d-flex gap-2 align-items-center" for="flexRadioDefault2">
                          <input
                            class="form-check-input payment-radio-button"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <span>
                            <img
                              src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/icons/payments/visa-light.png"
                              alt=""
                              className="payment-img"
                            />
                          </span>
                          <span>Credit Card</span>
                        </label>
                      </div>
                  </div>
                  <div className="col-md-6 ">
                    <div class="form-check payment-box  checked">
                    <label class="form-check-label payment-input-box  d-flex gap-2 align-items-center" for="flexRadioDefault2">

                        <input
                          class="form-check-input payment-radio-button"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <span>
                        <img
                          src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/icons/payments/paypal-light.png"
                          alt=""
                          className="payment-img"
                        />
                        </span>
                        <span>Paypal</span>
                        </label>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
                <h4 className="mb-4">Billing Details</h4>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div class="form-floating formFloatingOutline ">
                        <input
                          type="email"
                          class="form-control payment-Input"
                          id="floatingInput"
                          placeholder="name@example.com"
                        />
                        <label for="floatingInput">Email address</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-floating formFloatingOutline">
                        <input
                          type="password"
                          class="form-control payment-Input"
                          id="floatingPassword"
                          placeholder="Password"
                        />
                        <label for="floatingPassword">Password</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-floating ">
                        <select
                          class="form-select payment-Input"
                          aria-label="Default select example"
                        >
                          <option selected>Billing Control</option>
                          <option value="Australia">Australia</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="China">China</option>
                          <option value="france">France</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Ukrain">Ukrain</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="form-floating formFloatingOutline">
                        <input
                          type="text"
                          id="billing-zip"
                          className="form-control billing-zip-code payment-Input"
                          placeholder="123456"
                        />
                        <label htmlFor="billing-zip">
                          Billing Zip / Postal Code
                        </label>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="form-credit-card-info">
                  <h4 className="mt-4 mb-4">Credit Card Info</h4>
                  <div className="row">
                    <div className="col-12">
                      <div class="input-group mb-3">
                        <div class="form-floating formFloatingOutline">
                          <input
                            type="text"
                            id="creding-card-num"
                            class="form-control payment-Input"
                            placeholder="4541 2521 2547 2577"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                          />
                          <label htmlFor="creding-card-num ">Card Number</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div class="form-floating formFloatingOutline">
                        <input
                          type="text"
                          id="creding-card-name"
                          class="form-control payment-Input"
                          placeholder="John Doe"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <label htmlFor="creding-card-name ">Card holder</label>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div class="form-floating formFloatingOutline">
                        <input
                          type="text"
                          id="creding-card-date"
                          class="form-control payment-Input"
                          placeholder="05/26"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <label htmlFor="creding-card-date ">EXP. Date</label>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div class="form-floating formFloatingOutline">
                        <input
                          type="text"
                          id="creding-card-cvv"
                          class="form-control payment-Input"
                          placeholder="965"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                        />
                        <label htmlFor="creding-card-cvv ">CVV</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body col-lg-5 p-8 ps-7">
                <h4 className="mb-2">Order Summary</h4>
                <p className="mb-4">
                  It can help you manage and service orders before,
                  <br />
                  during and after fulfilment.
                </p>
                <div className="bg-payment p-4 rounded">
                  <p>A simple start for everyone</p>
                  <div className="d-flex align-items-center mb-4">
                    <h1 className="text-heading">$59.99</h1>
                    <sub className="text-body  sub-payment">/month</sub>
                  </div>
                  <div>
                    <a href="" className="btn btn-outline-primary change-plan">
                      Change Plan
                    </a>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">Subtotal</p>
                    <h6 className="mb-0">$85.99</h6>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <p className="mb-0">Tax</p>
                    <h6 className="mb-0">$4.99</h6>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center pb-1">
                    <p className="mb-0">Total</p>
                    <h6 className="mb-0">$90.98</h6>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-success">
                      <span className="me-2">Proceed with Payment</span>
                      <IoMdArrowForward />
                    </button>
                  </div>
                  <p className="mt-4 mb-0">
                    By continuing, you accept to our Terms of Services and
                    Privacy Policy. Please note that payments are
                    non-refundable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Payment;
