import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
const Wrapper = styled.div`
  .title {
    font-size: 3.75rem;
    text-align:center;
    font-style: italic;
  }

  @media only screen and (max-width: 991px) {
    .title {
      font-size: 2.75rem;
    }
  }
  @media only screen and (max-width: 420px) {
    .title {
      font-size: 2.25rem;
    }
  }
`;
const OwnerBenefits = () => {
    
  return (
    <Wrapper id="events" className="benefits py-5">
      <Col xs={11} xxl={8} className="mx-auto">
        <Row className="align-items-center">
          <Col
            md={12}
            className="d-flex justify-content-center my-md-0"
            data-aos="fade-left"
          >
            <div className=" d-flex w-100 d-lg-block justify-content-center align-items-center align flex-column">
            <h2 className="title py-4 pb-3 pb-md-5">OWNER <span className="exlamation">BENEFITS</span></h2>

            <Row>
                <Col xs={12} s={12} md={6} lg={4} >
                    <div className="benefits-box">
                        <h3>LIVE EVENTS</h3>
                    </div>
                </Col>
                <Col xs={12} s={12} md={6} lg={4}>
                    <div className="benefits-box">
                        <h3>GIVEAWAYS</h3>
                    </div>
                </Col>
                <Col xs={12} s={12} md={6} lg={4}>
                    <div className="benefits-box">
                        <h3>FREEROLLS & LEADERBOARDS</h3>
                    </div>
                </Col>
                <Col xs={12} s={12} md={6} lg={4}>
                    <div className="benefits-box">
                        <h3>CARBON NEUTRAL & NO GAS FEES</h3>
                    </div>
                </Col>
                <Col xs={12} s={12} md={6} lg={4}>
                    <div className="benefits-box">
                        <h3>RESERVE SYSTEM</h3>
                    </div>
                </Col>
                <Col xs={12} s={12} md={6} lg={4}>
                    <div className="benefits-box">
                        <h3>COMMUNITY</h3>
                    </div>
                </Col>
            </Row>

            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default OwnerBenefits;