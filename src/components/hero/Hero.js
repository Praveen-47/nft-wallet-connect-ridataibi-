import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import hero from '../../assets/images/hero.png'

export const Hero = () => {


  return (
    <section className="hero">
      <Container>
        <Row>
          <Col md={4}>
            <h1>Presale minting will begin on January 10th.</h1>
            <p>To get presale access to ensure you are able to mint , join our discord below:</p>
            <button>Discord</button>
          </Col>
          <Col md={8}>
            <img src={hero} alt="" />
          </Col>
          {/* <Col md={4} className="mobile-only">
            <h1>Presale minting will begin on January 10th.</h1>
            <p>To get presale access to ensure you are able to mint , join our discord below:</p>
            <button>Discord</button>
          </Col> */}
        </Row>
      </Container>
      <div className="overlay"></div>
    </section>
  );
};
