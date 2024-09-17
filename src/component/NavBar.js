import React from "react";
import Features from "./Features";
import { Carousel } from "react-bootstrap";
import ProfileCards from "./ProfileCards";
import Subscription from "./Subscription";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { SiGmail } from "react-icons/si";

function NavBar() {
  const navigate= useNavigate();
  return (
    <>
    <div className="backimg">
      <div>
      <nav className="layout-navbar container shadow-none py-0  ">
        <div class="navbar navbar-expand-lg landing-navbar border-top-0 px-4 px-md-4">
          <div class="container-fluid">
            <div className="d-flex gap-2">
            <div className="Login_Page-Logo">
                  <SiGmail color="#9868ff" className="logo" />
                </div>
            <a class="navbar-brand" href="#">
              MATERIO
            </a>
            </div>
          
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" >
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Team
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    FAQ
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Contact us
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item dropdownitem" >
                        Pricing 
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item dropdownitem" >
                        Payment
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item dropdownitem">
                        Help center
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Admin
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <li>
                  <a
                    
                    class="btn btn-primary px-2 px-sm-4 px-lg-2 px-xl-4 waves-effect waves-light "
                    target="_blank"
                  >
                    <span class="d-none d-md-block" onClick={()=> navigate('/login')} >Login/Register</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
    </div>

  
    </>
  );
}

export default NavBar;
