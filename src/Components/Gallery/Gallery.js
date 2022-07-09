import React from "react";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Wrapper = styled.div`
  position: relative;
  .main {
    position: relative;
  }
  .main::before,
  .main::after {
    content: "";
    position: absolute;
    width: 10px;
    background: var(--backgroundColor); 
    height: 80%;
    top: 50%;

    transform: translateY(-50%);
  }
  .main::before {
    left: -0.5%;
  }
  .main::after {
    right: -0.5%;
  }

  .title-container {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: absolute;
    width: 500px;
    top: -25px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--backgroundColor);
    padding-inline: 0px;
  }
  .title {
    font-size: 3.75rem;
    text-align:center;
    z-index: 1;
    padding-inline: 30px;
  }
  .image-container {
    width: 90%;
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-dots li button {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(3, 216, 254, 0.32941176470588235);
  }
  .slick-dots li button::before {
    display: none;
  }
  .slick-dots .slick-active {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 0 15px;
    margin-left: 4px;
    background: var(--blue);
  }
  .shark {
    position: absolute;
    top: -30px;
    left: -10%;
    mix-blend-mode: color-dodge;
  }
  .gallery-img video {
    border-radius: 15px;
  }
  @media only screen and (max-width: 1399px) {
    .shark {
      width: 300px;

      left: -3%;
    }
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 2rem;
    }
    .title-container {
      width: 400px;
    }
  }
  @media only screen and (max-width: 767px) {
    .shark {
      display: none;
    }
  }

  @media only screen and (max-width: 520px) {
    .title-container {
      width: 350px;
      top: -45px;
    }
  }
  @media only screen and (max-width: 420px) {
    .title-container {
      width: 200px;
    }
    .title {
      font-size: 2rem;
    }
  }

  #myImg {
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  
  #myImg:hover {opacity: 0.7;}
  
  /* The Modal (background) */
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
  }
  
  /* Modal Content (image) */
  .modal-content {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
  }
  
  /* Caption of Modal Image */
  #caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }
  
  /* Add Animation */
  .modal-content, #caption {  
    -webkit-animation-name: zoom;
    -webkit-animation-duration: 0.6s;
    animation-name: zoom;
    animation-duration: 0.6s;
  }
  
  @-webkit-keyframes zoom {
    from {-webkit-transform:scale(0)} 
    to {-webkit-transform:scale(1)}
  }
  
  @keyframes zoom {
    from {transform:scale(0)} 
    to {transform:scale(1)}
  }
  
  /* The Close Button */
  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }
  
  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }
  
  /* 100% Image Width on Smaller Screens */
  @media only screen and (max-width: 700px){
    .modal-content {
      width: 100%;
    }
  }

  .trans
{
	transition: all 1s ease;
	-moz-transition: all 1s ease;
	-ms-transition: all 1s ease;
	-o-transition: all 1s ease;
	-webkit-transition: all 1s ease;
}
  .lightbox
  {
    position: fixed;
    width: 100%;
    height: 100%;
    text-align: center;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.75);
    z-index: 999;
    opacity: 0;
    pointer-events: none;
  }
  .lightbox img
  {
    max-width: 90%;
    max-height: 80%;
    position: relative;
    top: -100%;
    /* Transition */
    transition: all 1s ease;
    -moz-transition: all 1s ease;
    -ms-transition: all 1s ease;
    -o-transition: all 1s ease;
    -webkit-transition: all 1s ease;
  }
  .lightbox:target
  {
    outline: none;
    top: 0;
    opacity: 1;
    pointer-events: auto;
    transition: all 1.2s ease;
    -moz-transition: all 1.2s ease;
    -ms-transition: all 1.2s ease;
    -o-transition: all 1.2s ease;
    -webkit-transition: all 1.2s ease;
  }
  .lightbox:target img
  {
    top: 0;
    top: 50%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
  }

`;


const PokerSharks = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <Wrapper id="gallery" className="lightbox-gallery">
      <img src="./images/small_shark.svg" alt="#" className="shark" />
      <Col xs={11} xxl={8} className="mx-auto pb-5">
        <div className="main">
          <div className=" d-flex w-100 d-lg-block justify-content-center align-items-center align flex-column">
            <h2 className="title py-4 pb-3 pb-md-5">GALLERY</h2>
          </div>
          
          <div>
            <Slider {...settings}>
              <div className="gallery-img">
                <video width="100%" height="100%" autoPlay muted loop>
                  <source src="./images/1.mp4" type="video/mp4" />
                  <source src="./images/1.webm" type="video/webm" />
                  Your browser does not support HTML video.
                </video>
              </div>
              <div className="gallery-img">
                <video width="100%" height="100%" autoPlay muted loop>
                  <source src="./images/2.mp4" type="video/mp4" />
                  <source src="./images/2.webm" type="video/webm" />
                  Your browser does not support HTML video.
                </video>
              </div>
              <div className="gallery-img">
                <video width="100%" height="100%" autoPlay muted loop>
                  <source src="./images/3.mp4" type="video/mp4" />
                  <source src="./images/3.webm" type="video/webm" />
                  Your browser does not support HTML video.
                </video>
              </div>
              <div className="gallery-img">
                <a href="#img_1">
                  <img src="./images/gallery-1.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_2">
                  <img src="./images/gallery-2.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_3">
                  <img src="./images/gallery-3.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_4">
                  <img src="./images/gallery-3a.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_5">
                  <img src="./images/gallery-5.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_6">
                  <img src="./images/gallery-6.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_7">
                  <img src="./images/gallery-7.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_8">
                  <img src="./images/gallery-8.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_9">
                  <img src="./images/gallery-9.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_10">
                  <img src="./images/gallery-10.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_11">
                  <img src="./images/gallery-11.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_12">
                  <img src="./images/gallery-12.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_13">
                  <img src="./images/gallery-13.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_14">
                  <img src="./images/gallery-14.jpg" className="w-100" alt="#" />
                </a>
              </div>
              <div className="gallery-img">
                <a href="#img_15">
                  <img src="./images/gallery-15.jpg" className="w-100" alt="#" />
                </a>
              </div>
            </Slider>
            
            <a href="#_1" class="lightbox trans" id="img_1"><img src="./images/gallery-1.jpg" alt="#" /></a>
            <a href="#_2" class="lightbox trans" id="img_2"><img src="./images/gallery-2.jpg" alt="#" /></a>
            <a href="#_3" class="lightbox trans" id="img_3"><img src="./images/gallery-3.jpg" alt="#" /></a>
            <a href="#_4" class="lightbox trans" id="img_4"><img src="./images/gallery-3a.jpg" alt="#" /></a>
            <a href="#_5" class="lightbox trans" id="img_5"><img src="./images/gallery-5.jpg" alt="#" /></a>
            <a href="#_6" class="lightbox trans" id="img_6"><img src="./images/gallery-6.jpg" alt="#" /></a>
            <a href="#_7" class="lightbox trans" id="img_7"><img src="./images/gallery-7.jpg" alt="#" /></a>
            <a href="#_8" class="lightbox trans" id="img_8"><img src="./images/gallery-8.jpg" alt="#" /></a>
            <a href="#_9" class="lightbox trans" id="img_9"><img src="./images/gallery-9.jpg" alt="#" /></a>
            <a href="#_10" class="lightbox trans" id="img_10"><img src="./images/gallery-10.jpg" alt="#" /></a>
            <a href="#_11" class="lightbox trans" id="img_11"><img src="./images/gallery-11.jpg" alt="#" /></a>
            <a href="#_12" class="lightbox trans" id="img_12"><img src="./images/gallery-12.jpg" alt="#" /></a>
            <a href="#_13" class="lightbox trans" id="img_13"><img src="./images/gallery-13.jpg" alt="#" /></a>
            <a href="#_14" class="lightbox trans" id="img_14"><img src="./images/gallery-14.jpg" alt="#" /></a>
            <a href="#_15" class="lightbox trans" id="img_15"><img src="./images/gallery-15.jpg" alt="#" /></a>
          </div>
        </div>
      </Col>
    </Wrapper>

  );
};
export default PokerSharks;
