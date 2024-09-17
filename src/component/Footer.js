import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";

function Footer() {
  return (
    <>
      <div>
        <footer className="footer p-6">
          <div className="footer-img">
            <div className="footer-head position relative overflow-hidden">
              <div className="container footer-middle position-relative ">
                <div className="row footer-row">
                  <div className="col-lg-5">
                    <h4>METERIO</h4>
                    <p className="footer-text mb-6">
                      Most Powerful & Comprehensive 🤩 React NextJS Admin
                      Template with Elegant Material Design & Unique Layouts.
                    </p>
                    <div className="conatiner-fluid">
                      <div className="row1 d-flex g-2 ">
                        <div>
                        <input
                                type="text"
                                class="form-control bg-transparent "
                                id="letter"
                                placeholder="Subscribe to newsletter"
                              />
                        </div>
                        <div>
                          <button type="submit" class="btn btn-primary mb-2">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <h6 className="title mb-4 mb-lg-6">Demos</h6>
                    <ul className="list mb-0">
                      <li className="mb-2">Vertical Layout</li>
                      <li className="mb-2">Horizontal Layout</li>
                      <li className="mb-2">Bordered Layout</li>
                      <li className="mb-2">Semi Dark Layout</li>
                      <li className="mb-2">Dark Layout</li>
                    </ul>
                  </div>
                  <div className="col-lg-2 col-md-4 col-sm-6">
                    <h6 className="title mb-4 mb-lg-6">Pages</h6>
                    <ul className="list mb-0">
                      <li className="mb-2">Pricing</li>
                      <li className="mb-2">
                      <a href="https://demos.themeselection.com/materio-bootstrap-html-admin-template/html/front-pages/payment-page.html" target="blank" className="footer-link" color="inherit">
                      Payment 
                      <span className="badge rounded-pill bg-primary ms-2">New</span>
                      </a>  

                      </li>
                      <li className="mb-2">Checkout</li>
                      <li className="mb-2">Help Center</li>
                      <li className="mb-2">Login/Register</li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <h6 className="download  mb-4 mb-lg-6">Download our app</h6>
                    <div className="appleicon mb-3">
                      <img
                        src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/apple-icon.png"
                        alt="apple icon"
                      />
                    </div>
                    <img
                      src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/google-play-icon.png"
                      alt="Google play store"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom py-4">
            <div className="container bootom-text d-flex justify-content-between flex-colomn ">
              <div>
                <span>© 2024, Made with <IoMdHeart color="red"/> by ThemeSelection</span>
              </div>
              <div>
                <a
                  href="https://github.com/themeselection"
                  className="footer-link me-4"
                  target="blank"
                >
                  <FaGithub color="white" />
                </a>
                <a
                  href="https://www.facebook.com/ThemeSelections/"
                  className="footer-link me-4"
                  target="blank"
                >
                  <FaFacebook color="white" />
                </a>
                <a
                  href="https://x.com/i/flow/login?redirect_after_login=%2FTheme_Selection"
                  className="footer-link me-4"
                  target="blank"
                >
                  <FaTwitter color="white" />
                </a>
                <a
                  href="https://www.instagram.com/themeselection/"
                  className="footer-link me-4"
                  target="blank"
                >
                  <FaInstagram color="white" />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="buynow">
          <a
            href="https://themeselection.com/item/materio-dashboard-pro-bootstrap/"
            target="blank"
            className="btn btn-danger btn-buynow"
          >
            Buy Now
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
