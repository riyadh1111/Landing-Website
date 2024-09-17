import React from "react";
import NavBar from "./NavBar";
import { PiArrowElbowLeftDownFill } from "react-icons/pi";
import { MdStars } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Footer from "./Footer";

const Pricing = () => {
  return (
    <>
      
      <section className="section-py first-section">
        <div className="container">
          <h1 className="text-center pricing-heading mb-2">Pricing Plans</h1>
          <p className="text-center pricing-para px-sm-12 mb-3">
            <span>
              All plans include 40+ advanced tools and features to boost your
              product.
            </span>
            <br />
            Choose the best plan to fit your needs.
          </p>
          <div className="mb-8 d-sm-flex align-items-center justify-content-center SaveUpButtom gap-2">
            <PiArrowElbowLeftDownFill color="#aba8b1" />
            <span className="badge bg-label-primary rouned-pill mb-3 px-3">
              Save up to 10%
            </span>
          </div>
          <div className="d-flex justify-content-center gap-2 pb-2 mb-0 mb-md-4">
            <div>Monthly</div>
            <div class="form-check form-switch">
              <input
                class="form-check-input switch-toggele"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
              <label class="form-check-label text-body" for="flexSwitchCheckChecked">
                Annually
              </label>
            </div>
          </div>
          <div className=" row pricing-cards mx-0 d-flex ">
            <div className="col-lg-4 col-sm-12 mb-md-0 mb-6 px-0">
              <div className="card border pricingCard1 rounded">
                <div className="text-center mt-5 mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/pricing-basic.png"
                    alt=""
                    className="PricingCard1Img"
                  />
                </div>
                <h4 class="card-title text-center mb-1">Basic</h4>
                <p className="text-center mb-4">A simple start for everyone</p>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <sup className="mt-2 mb-0 me-1 pricing-currency ">$</sup>
                    <h1 className="text-primary mb-0">0</h1>
                    <sub className="mt-auto mb-2 pricing-duration">/month</sub>
                  </div>
                </div>
                <ul className="list-gp pt-1 my-5">
                  <li className="mb-3"> 100 responses a month</li>
                  <li className="mb-3"> Unlimited forms and surveys</li>
                  <li className="mb-3">Unlimited fields</li>
                  <li className="mb-3"> Basic form creation tools</li>
                  <li className="mb-3">Up to 2 subdomains</li>
                </ul>
                <div className="success-First-Card-Button mx-4">
                  <a
                    href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/front-pages/payment-page.html"
                    className="btn first-Pricing-Card btn-outline-success w-100 "
                  >
                    Your Current Plan
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mb-md-0 mb-6 px-0 ">
              <div className="card border-primary pricingCard1 rounded">
                <div className="text-center mt-5 mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/pricing-standard.png"
                    alt=""
                    className="PricingCard1Img"
                  />
                </div>
                <h4 class="card-title text-center mb-1">Standard</h4>
                <p className="text-center mb-4">
                  For small to medium businesses
                </p>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <sup className="mt-2 mb-0 me-1 pricing-currency ">$</sup>
                    <h1 className="text-primary mb-0">9</h1>
                    <sub className="mt-auto mb-2 pricing-duration">/month</sub>
                  </div>
                </div>
                <ul className="list-gp pt-1 my-5">
                  <li className="mb-3">Unlimited responses</li>
                  <li className="mb-3">Unlimited forms and surveys</li>
                  <li className="mb-3">Instagram profile page</li>
                  <li className="mb-3">Google Docs integration</li>
                  <li className="mb-3">Custom “Thank you” page</li>
                </ul>
                <div className="success-Button mx-4">
                  <a
                    href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/front-pages/payment-page.html"
                    className="btn btn-outline-primary UpgradeButton w-100 "
                  >
                    Upgrade
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 mb-md-0 mb-6 px-0">
              <div className="card border pricingCard1 rounded">
                <div className="text-center mt-5 mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/pricing-enterprise.png"
                    alt=""
                    className="PricingCard1Img"
                  />
                </div>
                <h4 class="card-title text-center mb-1">Enterprise</h4>
                <p className="text-center mb-4">
                  Solution for big organizations
                </p>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <sup className="mt-2 mb-0 me-1 pricing-currency ">$</sup>
                    <h1 className="text-primary mb-0">19</h1>
                    <sub className="mt-auto mb-2 pricing-duration">/month</sub>
                  </div>
                </div>
                <ul className="list-gp pt-1 my-5">
                  <li className="mb-3"> PayPal payments</li>
                  <li className="mb-3">Logic Jumps</li>
                  <li className="mb-3">File upload with 5GB storage</li>
                  <li className="mb-3"> Custom domain support</li>
                  <li className="mb-3">Stripe integration</li>
                </ul>
                <div className="success-Button mx-4">
                  <a
                    href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/front-pages/payment-page.html"
                    className="btn btn-outline-primary w-100 "
                  >
                    Upgrade
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-free-trial bg-label-primary">
        <div className="container">
          <div className="">
            <div className="row py-5">
              <div className="col-lg-6">
                <h5 className="text-primary free-trial-text mb-2">
                  Still not convinced? Start with a 14-day FREE trial!
                </h5>
                <p className=" free-trial-text-para mb-5">
                  You will get full access to with all the features for 14 days.
                </p>
                <a href="" className="btn btn-primary">
                  Start 14-Day Free Trial
                </a>
              </div>
              <div className="col-lg-6">
                <div className="d-flex justify-content-end">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/illustrations/girl-with-laptop.png"
                    alt=""
                    className="free-trial-Img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-py pricing-plans">
        <div className="container">
          <div className="col-12 text-center mb-6">
            <h4 className="mb-2">Pick a plan that works best for you</h4>
            <p className="mb-4">Stay cool, we have a 48-hour money back guarantee!</p>
          </div>
          <div className="table-res border rounded">
            <table className="table table-striped pricing-table text-center mb-0">
              <thead>
                <tr>
                  <th scope="col ">
                    <p className="mb-0 d-flex ">Time</p>
                  </th>
                  <th scope="col">
                    <p className="mb-1"> STARTER</p>
                    <p className="small mb-0 text-body"> FREE</p>
                  </th>
                  <th scope="col">
                    <div className="d-flex justify-content-center align-items-center">
                      <p className="mb-0 me-1">PRO</p>
                      <span className="badge badge-center rounded-circle bg-primary">
                        <MdStars />
                      </span>
                    </div>
                    <p className="small mb-0 text-body">$7.5/Month</p>
                  </th>
                  <th scope="col">
                    <p className="mb-1">ENTERPRISE</p>
                    <p className="small mb-0 text-body">$16/Month</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-heading ">14-days free trial</td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                </tr>
                <tr>
                  <td className="text-heading ">No user limit</td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                </tr>
                <tr>
                  <td className="text-heading ">Product Support</td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                </tr>
                <tr>
                  <td className="text-heading ">Email Support</td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <span className="badge bg-label-primary rounded-pill">
                      Add-on Available
                    </span>
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                </tr>
                <tr>
                  <td className="text-heading ">Integrations</td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                </tr>
                <tr>
                  <td className="text-heading ">Removal of Front branding</td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <span className="badge bg-label-primary rounded-pill">
                      Add-on Available
                    </span>
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                </tr>
                <tr>
                  <td className="text-heading ">
                    Active maintenance & support
                  </td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                </tr>
                <tr>
                  <td className="text-heading ">Data storage for 365 days</td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <IoMdCloseCircleOutline className="tablecross" />
                  </td>
                  <td>
                    <RiCheckboxCircleLine className="text-primary tablecheckbox" />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <a href="" className="btn btn-outline-primary">
                      Choose Plan
                    </a>
                  </td>
                  <td>
                    <a href="" className="btn btn-primary">
                      Choose Plan
                    </a>
                  </td>
                  <td>
                    <a href="" className="btn btn-outline-primary">
                      Choose Plan
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="section-py pricing-faq rounded-bottom bg-body ">
        <div className="container">
          <div className="text-center mb-6">
            <h4 className="mb-2">FAQ's</h4>
            <p>Let us help answer the most common questions.</p>
          </div>
          <div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    What counts towards the 100 reponses limit?
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We count all responses submitted through all your forms in a
                    month. If you already received 100 responses this month, you
                    won’t be able to receive any more of them until next month
                    when the counter resets.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How do you process payments?
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    We accept Visa®, MasterCard®, American Express®, and
                    PayPal®. So you can be confident that your credit card
                    information will be kept safe and secure.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    What payment methods do you acceps?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    2Checkout accepts all types of credit and debit cards.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    Do you have a money-back gurantee?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  Yes. You may request a refund within 30 days of your purchase without any additional explanations.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                   I have more questions. Where can I get help?
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                  Please contact us if you have any other questions or concerns. We’re here to help!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Pricing;
