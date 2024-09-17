import React from "react";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";

const ProfileCards = () => {
  return (
    <>
      <section id="TeamCard" class="section-py  Team-Card">
        <div class="container">
          <h6 class="text-center d-flex justify-content-center align-items-center mb-6">
            <span>OUR GREAT TEAM</span>
          </h6>
          <h5 class="text-center mb-2">
            <span class="h4 fw-bold">Supported</span> by Real People
          </h5>
          <p class="text-center fw-medium mb-4 mb-md-12 pb-7">
            Who is behind these great-looking interfaces?
          </p>
        </div>
        <div className="container Card-Img-Container">
          <div className="row mt-2">
            <div className="col-lg-3 col-sm-6">
              <div class="card Card-Images">
                <div className="CardImgBox">
                  <img
                    class="card-img Card-Imgage-Box"
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/team-member-1.png"
                    alt="Card image cap"
                    style={{height:"17rem"}}
                  />
                </div>
                <div class="card-body CardBody">
                  <div className="Card-Title mt-4 ">
                    <h5 class="card-title">Sophie Gilbert</h5>
                    <p class="card-text">Project Manager</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="Card-Icon">
                      <CiFacebook />
                      <CiTwitter />
                      <CiLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div class="card Card-Images">
                <div className="CardImgBox">
                  <img
                    class="card-img Card-Imgage-Box"
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/team-member-2.png"
                    alt="Card image cap"
                    style={{height:"17rem"}}
                  />
                </div>
                <div class="card-body CardBody">
                  <div className="Card-Title mt-4 ">
                    <h5 class="card-title">Nannie Ford</h5>
                    <p class="card-text">Development Lead</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="Card-Icon">
                      <CiFacebook />
                      <CiTwitter />
                      <CiLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div class="card Card-Images">
                <div className="CardImgBox">
                  <img
                    class="card-img Card-Imgage-Box"
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/team-member-3.png"
                    alt="Card image cap" style={{height:"17rem"}}

                  />
                </div>
                <div class="card-body CardBody">
                  <div className="Card-Title mt-4 ">
                    <h5 class="card-title">Chris Watkins</h5>
                    <p class="card-text">Marketing Manager</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="Card-Icon">
                      <CiFacebook />
                      <CiTwitter />
                      <CiLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div class="card Card-Images">
                <div className="CardImgBox">
                  <img
                    class="card-img Card-Imgage-Box"
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/landing-page/team-member-4.png"
                    alt="Card image cap"
                    style={{height:"17rem"}}
                  />
                </div>
                <div class="card-body CardBody">
                  <div className="Card-Title mt-4 ">
                    <h5 class="card-title">Paul Miles</h5>
                    <p class="card-text">UI Designer</p>
                  </div>
                  <div className="d-flex justify-content-center">
                    <div className="Card-Icon">
                      <CiFacebook />
                      <CiTwitter />
                      <CiLinkedin />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileCards;
