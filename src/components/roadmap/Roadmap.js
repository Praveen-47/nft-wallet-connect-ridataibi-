import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Roadmap.css";
import arrow from "../../assets/images/arrow.png";
import rdBg1 from "../../assets/images/rd-bg-1.png";
import rdBg2 from "../../assets/images/rd-bg-2.png";
import rdBg3 from "../../assets/images/rd-bg-3.png";
import rdBg4 from "../../assets/images/rd-bg-4.png";
import { AddTask } from "@mui/icons-material";
import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPath from "gsap/MotionPathPlugin"
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TimelineMax, TweenLite, Power1 } from "gsap/all";
import ScrollMagic from 'scrollmagic';
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import $ from 'jquery'

export const Roadmap = () => {

  const benefits = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const controller_3 = new ScrollMagic.Controller();
        var t2 = new gsap.timeline();
        var t3 = new gsap.timeline();

        var t4 = new TimelineMax();
        var t5 = new TimelineMax();

        gsap.utils.toArray("#rd_1").forEach(section => {
          gsap.from(section, {
            scrollTrigger: section,
            autoAlpha: 0,
            opacity:0,
            x:500,
            duration: 0.75,
            stagger: 0.1,
      
          });

          
        });

        gsap.utils.toArray("#rd_2").forEach(section => {
          gsap.from(section, {
            scrollTrigger: section,
            autoAlpha: 0,
            opacity:0,
            x:-500,
            duration: 2,
            stagger: 0.25,
           
          });

        });

          gsap.utils.toArray(".arrow").forEach(section => {
            gsap.from(section, {
              scrollTrigger: section,
              autoAlpha: 0,
              opacity:0,
              y:-500,
              duration: 4,
              stagger: 0.15,
              
            });

          
        });

    },[window.screen.width])

  return (
    <section className="roadmap" id="roadmap">
      <div className="overlay"></div>
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="uppercase h2">Laid back llamas roadmap</h2>
          </Col>
          <Col md={12} className="roadmap__col" id="rd_1">
            <Row>
              <Col md={6} style={{ textAlign: "right" }} className="desktop-only">
                <img src={arrow} alt="" className="arrow" />
              </Col>
              <Col md={6}>
                <div className="roadmap__content">
                  <h2>
                    0% &nbsp; <AddTask className="right-sign" />{" "}
                  </h2>
                  <h3>
                    Genesis Collection <br /> 100 Boss Llamas Drop
                  </h3>
                </div>
              </Col>
              <Col md={6} style={{ textAlign: "right" }}  className="mobile-only">
                <img src={arrow} alt="" className="arrow" />
              </Col>
            </Row>
          </Col>

          <Col md={12} className="roadmap__col" id="rd_2">
            <Row>
              
              <Col md={6}>
                <div className="roadmap__content">
                  <h2>
                    10% &nbsp; <AddTask className="right-sign" />{" "}
                  </h2>
                  <h3>
                    Genesis Collection <br /> 100 Boss Llamas Drop
                  </h3>
                </div>
              </Col>
              <Col md={6} style={{ textAlign: "right" }}>
                <img src={arrow} alt="" className="arrow" />
              </Col>
            </Row>
          </Col>

          <Col md={12} className="roadmap__col" id="rd_1">
            <Row>
              <Col md={6} style={{ textAlign: "right" }}  className="desktop-only">
                <img src={arrow} alt="" className="arrow" />
              </Col>
              <Col md={6}>
                <div className="roadmap__content">
                  <h2>
                    20% &nbsp; <AddTask className="right-sign" />{" "}
                  </h2>
                  <h3>
                    Genesis Collection <br /> 100 Boss Llamas Drop
                  </h3>
                </div>
              </Col>
              <Col md={6} style={{ textAlign: "right" }}  className="mobile-only">
                <img src={arrow} alt="" className="arrow" />
              </Col>
            </Row>
          </Col>

          <Col md={12} className="roadmap__col" id="rd_2">
            <Row>
              <Col md={6}>
                <div className="roadmap__content">
                  <h2>
                    40% &nbsp; <AddTask className="right-sign" />{" "}
                  </h2>
                  <h3>
                    Genesis Collection <br /> 100 Boss Llamas Drop
                  </h3>
                </div>
              </Col>
              <Col md={6} style={{ textAlign: "right" }}>
                <img src={arrow} alt="" className="arrow" />
              </Col>
            </Row>
          </Col>

          <Col md={12} className="roadmap__col" id="rd_1">
            <Row>
              <Col md={6} style={{ textAlign: "right" }} className="desktop-only">
                <img src={arrow} alt="" className="arrow" />
              </Col>

              <Col md={6}>
                <div className="roadmap__content">
                  <h2>
                    60% &nbsp; <AddTask className="right-sign" />{" "}
                  </h2>
                  <h3>
                    Genesis Collection <br /> 100 Boss Llamas Drop
                  </h3>
                </div>
              </Col>

              <Col md={6} style={{ textAlign: "right" }} className="mobile-only">
                <img src={arrow} alt="" className="arrow" />
              </Col>
            </Row>
          </Col>

          <Col md={12} className="roadmap__col" id="rd_2">
            <Row>
              <Col md={6}>
                <div className="roadmap__content">
                  <h2>
                    80% &nbsp; <AddTask className="right-sign" />{" "}
                  </h2>
                  <h3>
                    Genesis Collection <br /> 100 Boss Llamas Drop
                  </h3>
                </div>
              </Col>
              <Col md={6} style={{ textAlign: "right" }}>
                <img src={arrow} alt="" className="arrow" />
              </Col>
            </Row>
          </Col>

          <Col md={12} className="roadmap__col" id="rd_1">
            <Row>
              <Col md={6} style={{ textAlign: "right" }} className="desktop-only">
                <img src={arrow} alt="" className="arrow" />
              </Col>
              <Col md={6}>
                <div className="roadmap__content">
                  <h2>
                    100% &nbsp; <AddTask className="right-sign" />{" "}
                  </h2>
                  <h3>
                    Genesis Collection <br /> 100 Boss Llamas Drop
                  </h3>
                </div>
              </Col>
              <Col md={6} style={{ textAlign: "right" }} className="mobile-only">
                <img src={arrow} alt="" className="arrow" />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
