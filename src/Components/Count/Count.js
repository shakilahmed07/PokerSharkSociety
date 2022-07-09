import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import Clock from "./Clock";

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { deadline: "May, 12, 2022" };
  }
  render() {
    return (
      <Wrapper className="slider py-5">
      <Col xs={11} xxl={8} className="mx-auto">
        <Row className="align-items-center">
          <Col
            md={12}
            className="d-flex justify-content-center my-md-0"
            data-aos="fade-right"
          >
            <div className=" d-flex w-100 d-lg-block justify-content-center align-items-center align flex-column">
              <h2 className="title py-4 pb-3 pb-md-5">
                LAUNCH <span className="exlamation">IN</span>
              </h2>
              <div className="App">
                <Clock deadline={this.state.deadline} />
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
    );
  }
}
export default App;
