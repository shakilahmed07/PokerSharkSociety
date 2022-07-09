import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FaPlay } from "react-icons/fa";
import styled from "styled-components";
const Wrapper = styled.div`
  .video-container {
    position: relative;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
  .title {
    font-size: 3.75rem;

    font-style: italic;
  }
  .text {
    line-height: 180%;
    font-weight: 500;
    font-size: 18px;
  }

  .image-container {
    width: 70%;
  }
  @media only screen and (max-width: 1199px) {
    .image-container {
      width: 90%;
    }
  }
  @media only screen and (max-width: 991px) {
    .title {
      font-size: 2.75rem;
    }
    .text {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 420px) {
    .title {
      font-size: 2.25rem;
    }
  }
`;
const Join = () => {
  const [play, setPlay] = useState(false);
  return (
    <Wrapper className="py-5" id="about">
      <Col xs={11} xxl={8} className="mx-auto">
        <Row className="align-items-center">
          <Col
            sm={10}
            md={6}
            className="d-flex justify-content-center align-items-center mt-5 mt-md-0 mx-auto"
            data-aos="fade-left"
          >
            <div className="">
              <Wrapper>
                  <div className="w-100 video-container">
                    <video width="100%" controls={play} preload="auto">
                      <source src="./images/video.mp4" type="video/mp4" />
                    </video>
                    {!play && (
                      <FaPlay
                        color="#fff"
                        size="30"
                        onClick={() => {
                          setPlay(true);
                          document.querySelector("video").play();
                        }}
                        className="icon"
                      />
                    )}
                  </div>
              </Wrapper>
            </div>
          </Col>
          <Col md={6} data-aos="fade-left">
            <p className="text">The Poker Shark Society is an NFT collection of 2,222 unique Poker Sharks, digital art collectibles secured by the Ethereum blockchain. Owners enjoy access to exciting live events and giveaways.</p>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default Join;
