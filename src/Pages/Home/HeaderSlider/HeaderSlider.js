import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide1 from '../homeImage/slider/slider1.jpg'
import slide2 from '../homeImage/slider/slider2.jpg'
import slide3 from '../homeImage/slider/slider3.jpg'
import slide4 from '../homeImage/slider/slider4.jpg'

export default class HeaderSlider extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <>
        <Slider className="team-slider" ref={slider => (this.slider = slider)} {...settings}>
            <div>
                <img src={slide1} alt="" />         
                <h3 className="text-center fw-bold mt-3">Lawra Adam</h3>
                <h5 className="text-center fw-bold">CEO</h5>
            </div>
            <div>
                <img src={slide2} alt="" />
                <h3 className="text-center fw-bold mt-3">Anthony Clark</h3>
                <h5 className="text-center fw-bold">Product Manager</h5>
            </div>
            <div>
                <img src={slide3} alt="" />
                <h3 className="text-center fw-bold mt-3">Gennila Genny</h3>
                <h5 className="text-center fw-bold">Tour Guide</h5>
            </div>
            <div>
                <img src={slide4} alt="" />
                <h3 className="text-center fw-bold mt-3">Ade Gauthier</h3>
                <h5 className="text-center fw-bold">Tour Guide</h5>
            </div>
        </Slider>
      </>
    );
  }
}
