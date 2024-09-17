import React from "react";
import NavBar from "./NavBar";
import { CiSearch } from "react-icons/ci";
import { PiPaperPlaneDuotone } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { VscNote } from "react-icons/vsc";
import { RiShoppingCartLine } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import Footer from "./Footer";

const HelpCenter = () => {
  return (
    <>
      <NavBar />
      <section className="section-py help-center-page position-relative ">
        <img
          src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/pages/header-light.png"
          alt=""
          className="banner-bg-img z-n1"
        />
        <h4 className="text-center text-primary">Hello, how can we help?</h4>
        <div class="input-group search-input my-4 mx-auto mb-3">
          <span className="input-group-text" id="basic-addon1">
            <CiSearch />
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Search"
            aria-label="search"
            aria-describedby="basic-addon1"
            id="search-input-box"
          />
        </div>
        <p className="text-center px-4 mb-0">
          Common troubleshooting topics: eCommerce, Blogging to payment
        </p>
      </section>
      <section className="section-py ">
        <div className="container">
          <h4 className="text-center mb-5">Popular Articles</h4>
          <div className="row gy-4">
            <div className="col-md-4">
              <div class="card text-center help-center-card">
                <div class="card-body">
                  <h5 class="card-title help-center-icon">
                    <PiPaperPlaneDuotone className="help-center-card-icon" />
                    <br />
                  </h5>
                  <h5 className="my-3 help-card-title">Getting Started</h5>
                  <p class="card-text mb-3">
                    Whether you're new or you're a power user, this article
                    will…
                  </p>
                  <a href="#" class="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card text-center help-center-card">
                <div class="card-body">
                  <h5 class="card-title help-center-icon">
                    <GoGift className="help-center-card-icon" />
                    <br />
                  </h5>
                  <h5 className="my-3 help-card-title">First Steps</h5>
                  <p class="card-text mb-3">
                    inspiration from experts to help you start and grow your big
                    ideas.
                  </p>
                  <a href="#" class="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card text-center help-center-card">
                <div class="card-body">
                  <h5 class="card-title help-center-icon">
                    <VscNote className="help-center-card-icon" />
                    <br />
                  </h5>
                  <h5 className="my-3 help-card-title">Add External Content</h5>
                  <p class="card-text mb-3">
                    This article will show you how to expand the functionality
                    of...
                  </p>
                  <a href="#" class="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="secion-py bg-body pb-5 pt-5">
        <div className="container">
          <h4 className="text-center mb-3">Knowledge Base</h4>
          <div className="row help-articles">
            <div className="col-md-4">
              <div class="card bottom-card">
                <div class="card-body">
                  <div className="d-flex g-2">
                    <span className="bg-label-primary shopping-badge rounded me-3">
                      <RiShoppingCartLine className="shopping-img" />
                    </span>
                    <div>
                      <h5 class="card-title">Buying</h5>
                    </div>
                  </div>
                  <ul className="list-help-card">
                    <li className="">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span className="mb-2">What are Favourites?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do I purchase an item?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do i add or change my details?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do refunds work?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>Can I Get A Refund?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>I'm trying to find a specific item</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p class="mb-0">
                    <a
                      href="#"
                      className="d-flex align-items-center help-center-article"
                    >
                      <span className="me-2">See all 10 articles</span>
                      <span>
                        <FaArrowRight style={{ fontSize: ".9em" }} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card bottom-card">
                <div class="card-body">
                  <div className="d-flex g-2">
                    <span className="bg-label-primary shopping-badge rounded me-3">
                      <RiShoppingCartLine className="shopping-img" />
                    </span>
                    <div>
                      <h5 class="card-title">Buying</h5>
                    </div>
                  </div>
                  <ul className="list-help-card">
                    <li className="">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span className="mb-2">What are Favourites?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do I purchase an item?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do i add or change my details?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do refunds work?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>Can I Get A Refund?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>I'm trying to find a specific item</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p class="mb-0">
                    <a
                      href="#"
                      className="d-flex align-items-center help-center-article"
                    >
                      <span className="me-2">See all 10 articles</span>
                      <span>
                        <FaArrowRight style={{ fontSize: ".9em" }} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card bottom-card">
                <div class="card-body">
                  <div className="d-flex g-2">
                    <span className="bg-label-primary shopping-badge rounded me-3">
                      <RiShoppingCartLine className="shopping-img" />
                    </span>
                    <div>
                      <h5 class="card-title">Buying</h5>
                    </div>
                  </div>
                  <ul className="list-help-card">
                    <li className="">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span className="mb-2">What are Favourites?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do I purchase an item?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do i add or change my details?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do refunds work?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>Can I Get A Refund?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>I'm trying to find a specific item</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p class="mb-0">
                    <a
                      href="#"
                      className="d-flex align-items-center help-center-article"
                    >
                      <span className="me-2">See all 10 articles</span>
                      <span>
                        <FaArrowRight style={{ fontSize: ".9em" }} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card bottom-card">
                <div class="card-body">
                  <div className="d-flex g-2">
                    <span className="bg-label-primary shopping-badge rounded me-3">
                      <RiShoppingCartLine className="shopping-img" />
                    </span>
                    <div>
                      <h5 class="card-title">Buying</h5>
                    </div>
                  </div>
                  <ul className="list-help-card">
                    <li className="">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span className="mb-2">What are Favourites?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do I purchase an item?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do i add or change my details?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do refunds work?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>Can I Get A Refund?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>I'm trying to find a specific item</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p class="mb-0">
                    <a
                      href="#"
                      className="d-flex align-items-center help-center-article"
                    >
                      <span className="me-2">See all 10 articles</span>
                      <span>
                        <FaArrowRight style={{ fontSize: ".9em" }} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card bottom-card">
                <div class="card-body">
                  <div className="d-flex g-2">
                    <span className="bg-label-primary shopping-badge rounded me-3">
                      <RiShoppingCartLine className="shopping-img" />
                    </span>
                    <div>
                      <h5 class="card-title">Buying</h5>
                    </div>
                  </div>
                  <ul className="list-help-card">
                    <li className="">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span className="mb-2">What are Favourites?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do I purchase an item?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do i add or change my details?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do refunds work?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>Can I Get A Refund?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>I'm trying to find a specific item</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p class="mb-0">
                    <a
                      href="#"
                      className="d-flex align-items-center help-center-article"
                    >
                      <span className="me-2">See all 10 articles</span>
                      <span>
                        <FaArrowRight style={{ fontSize: ".9em" }} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
            <div class="card bottom-card">
                <div class="card-body">
                  <div className="d-flex g-2">
                    <span className="bg-label-primary shopping-badge rounded me-3">
                      <RiShoppingCartLine className="shopping-img" />
                    </span>
                    <div>
                      <h5 class="card-title">Buying</h5>
                    </div>
                  </div>
                  <ul className="list-help-card">
                    <li className="">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span className="mb-2">What are Favourites?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do I purchase an item?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do i add or change my details?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>How do refunds work?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>Can I Get A Refund?</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href=""
                        className="text-heading d-flex justify-content-between align-items-center"
                      >
                        <span>I'm trying to find a specific item</span>
                        <span>
                          <IoIosArrowForward />
                        </span>
                      </a>
                    </li>
                  </ul>
                  <p class="mb-0">
                    <a
                      href="#"
                      className="d-flex align-items-center help-center-article"
                    >
                      <span className="me-2">See all 10 articles</span>
                      <span>
                        <FaArrowRight style={{ fontSize: ".9em" }} />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-py">
         <div className="container">
          <h4 className="text-center mb-3">Keep Learning</h4>
          <div className="row gy-4">
            <div className="col-md-4">
              <div class="card text-center help-center-card">
                <div class="card-body">
                  <h5 class="card-title help-center-icon">
                    <PiPaperPlaneDuotone className="help-center-card-icon" />
                    <br />
                  </h5>
                  <h5 className="my-3 help-card-title">Getting Started</h5>
                  <p class="card-text mb-3">
                    Whether you're new or you're a power user, this article
                    will…
                  </p>
                  <a href="#" class="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card text-center help-center-card">
                <div class="card-body">
                  <h5 class="card-title help-center-icon">
                    <GoGift className="help-center-card-icon" />
                    <br />
                  </h5>
                  <h5 className="my-3 help-card-title">First Steps</h5>
                  <p class="card-text mb-3">
                    inspiration from experts to help you start and grow your big
                    ideas.
                  </p>
                  <a href="#" class="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div class="card text-center help-center-card">
                <div class="card-body">
                  <h5 class="card-title help-center-icon">
                    <VscNote className="help-center-card-icon" />
                    <br />
                  </h5>
                  <h5 className="my-3 help-card-title">Add External Content</h5>
                  <p class="card-text mb-3">
                    This article will show you how to expand the functionality
                    of...
                  </p>
                  <a href="#" class="btn btn-outline-primary">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
         </div>
      </section>
      <section className="section-py bg-body">
        <div className="container">
          
          <h4 className="text-center">Still need help?</h4>
          <div className="d-flex justify-content-center">
          <p className="text-center">
            Our specialists are always happy to help.
            <br />
            Contact us during standard business hours or email us 24/7 and we'll get back to you.
          </p>
          </div>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <a href="#" className="btn btn-primary">Visit Our Community </a>
            <a href="#" className="btn btn-primary">Contact Us </a>
          </div> 
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default HelpCenter;
