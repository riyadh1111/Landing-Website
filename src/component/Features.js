import React from "react";

function Features() {
  return (
    <>
    <div className="home-page-img">
      <section>
        {/* <img
          src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/backgrounds/hero-bg-light.png"
          alt="" className="position-absolute top-0 start-0 w-100 h-100 "
        />
     */}
        <div className="conatainer ">
          <div className="text text-center-1">
            <h2 className="text-primary mb-4">
              All in one sass application
              <br />
              for your business
            </h2>
            <h2 className="h6 mb-8 lh-md">
              No coding required to make customisations.
              <br />
              The live customiser has everything your marketing need.
            </h2>
            <button className="btn btn-primary">Get Early Access</button>
          </div>
        </div>
      </section>
      <section id="features" class="section-py features-part">
        <div className="container mt-15">
          <h6 className="text-center d-flex justify-content-center align-item-center mb-6">
            <img
              src="	https://demos.themeselection.com/materio-bootstrap…sets/img/front-pages/icons/section-tilte-icon.png"
              alt=""
              className="me-2"
              height={"19"}
            />
            <span className="text-uppercase">Useful features</span>
          </h6>
          <h5 className="text-center mb-2">
            <span className='"h4 fw-bold'>Everything you need</span>
            "to start your neew project"
          </h5>
          <p className="text-center fw-medium mb-4 mb-md-12">
            "Not just a set of tools, the package includes ready-to-deploy
            conceptual application."
          </p>

          <div className="grid-container text-center">
            <div className="row">
              <div className="col">
                <div className="features-icon mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/laptop-charging.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-2">Quality Code</h5>
                <p className="features-icon-description">
                  Code structure that all developers will easily understand and
                  fall in love with.
                </p>
              </div>
              <div className="col">
                <div className="features-icon mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/transition-up.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-2">Continuous Updates</h5>
                <p className="features-icon-description">
                  Free updates for the next 12 months, including new demos and
                  features.
                </p>
              </div>
              <div className="col">
                <div className="features-icon mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/edit.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-2">Stater-Kit</h5>
                <p className="features-icon-description">
                  Start your project quickly without having to remove
                  unnecessary features.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="features-icon mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/3d-select-solid.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-2">API Ready</h5>
                <p className="features-icon-description">
                  Just change the endpoint and see your own data loaded within
                  seconds.
                </p>
              </div>
              <div className="col">
                <div className="features-icon mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/lifebelt.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-2">Excellent Support</h5>
                <p className="features-icon-description">
                  An easy-to-follow doc with lots of references and code
                  examples.
                </p>
              </div>
              <div className="col">
                <div className="features-icon mb-4">
                  <img
                    src="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/icons/google-docs.png"
                    alt=""
                  />
                </div>
                <h5 className="mb-2">Well Documented</h5>
                <p className="features-icon-description">
                  An easy-to-follow doc with lots of references and code
                  examples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default Features;
