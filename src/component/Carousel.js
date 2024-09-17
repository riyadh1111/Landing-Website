import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";

const Carousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>
          <Card
            link="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-4.png"
            mainhead="     “I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard
                  sites on almost any project.”"
            Foundername="Eugenia Moore"
            FounderOf="Founder of Hubspot"
          />
        </div>
        <div>
          <Card
            link="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-1.png "
            mainhead="“I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard
                  sites on almost any project."
            Foundername="Tommy haffman"
            FounderOf="Founder of Levis"
          />
        </div>
        <div>
          <Card
            link="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-3.png"
            mainhead="This template is superior in so many ways. The code, the design, the regular updates, the support.. It’s the whole package. Excellent Work."
            Foundername="Eugenia Moore"
            FounderOf="CTO of Airbnb"
          />
        </div>
        <div>
          <Card
            link="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-2.png"
            mainhead="All the requirements for developers have been taken into consideration, so I’m able to build any interface I want."
            Foundername="Sara Smith"
            FounderOf="Founder of Continental"
          />
        </div>
        <div>
          <Card
            link="https://demos.themeselection.com/materio-bootstrap-html-admin-template/assets/img/front-pages/branding/logo-5.png"
            mainhead="“I've never used a theme as versatile and flexible as Vuexy. It's my go to for building dashboard sites on almost any project.”"
            Foundername="Eugenia Moore"
            FounderOf="Founder of Hubspot"
          />
        </div>
      </Slider>
    </>
  );
};

export default Carousel;
