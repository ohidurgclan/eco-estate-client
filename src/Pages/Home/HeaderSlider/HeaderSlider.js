import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../homeImage/slider/slider1.jpg'
import slide2 from '../homeImage/slider/slider2.jpg'
import slide3 from '../homeImage/slider/slider3.jpg'
import slide4 from '../homeImage/slider/slider4.jpg'
import './HeaderSlider.css'

export default class HeaderSlider extends Component {
  render() {
    const settings = {
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
    };
    return (
      <>
        <Slider className="team-slider mb-30" ref={slider => (this.slider = slider)} {...settings}>
            <div>
                <img src={slide1} alt="" />      
            </div>
            <div>
                <img src={slide2} alt="" />
            </div>
            <div>
                <img src={slide3} alt="" />
            </div>
            <div>
                <img src={slide4} alt="" />
            </div>
        </Slider>
      </>
    );
  }
}
