import gsap from 'gsap/all';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MotionPath from "gsap/MotionPathPlugin"
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TimelineMax, TweenLite, Power1 } from "gsap/all";
import ScrollMagic from 'scrollmagic';
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
import React, { useEffect, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BenefitsImg_1 from '../../assets/images/img-4.jpg';
import './Benefits.css';
import $ from 'jquery';

export const Benefits = () => {
    const benefits = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const controller_3 = new ScrollMagic.Controller();
        var t2 = new gsap.timeline();
        var t3 = new gsap.timeline();

        var t4 = new TimelineMax();
        var t5 = new TimelineMax();

        
        gsap.from("#b_c_1",{
            scrollTrigger:"#b_c_1",
            x:-300,
            opacity:0,
            duration: 2,
            stagger: 0.25,
            autoAlpha:0,
            
        });
        gsap.from("#b_c_2",{
            scrollTrigger:"#b_c_2",
            x:300,
            opacity:0,
            duration: 2,
            stagger: 0.25,
            autoAlpha:0,
            
        })
    
    },[])


    return (
        <section className="benefits" id="benefits">
            <Container>
                <Row>
                    <Col md={12}  className="benefits__col" id="b_c_1">
                        <div className="col-md-12 benefits__container" ref={benefits}>
                            <Row>
                                <Col md={4}>
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                                <Col md={8}>
                                    <h2>Laid Back Llamas Benefits</h2>
                                    <ul>
                                        <li>7,000 provably-rare Laid Back Llamas</li>
                                        <li>Each holder given ownership and commercial usage rights of their NFT(s)</li>
                                        <li>Endorsement opportunities with brands for LBL holders</li>
                                        <li>NFT Airdrops for random LBL holders</li>
                                        <li>Whitelist opportunities into popular projects from our partners</li>
                                        <li>Holders will receive royalties for their Llama casted in LBL TV series</li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col md={12}  className="benefits__col" id='b_c_2'>
                        <div className="col-md-12 benefits__container" ref={benefits}>
                            <Row>
                            <Col md={4} className="mobile-only">
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                            <Col md={8}>
                                    <h2>Laid Back Llamas Benefits</h2>
                                    <ul>
                                        <li>7,000 provably-rare Laid Back Llamas</li>
                                        <li>Each holder given ownership and commercial usage rights of their NFT(s)</li>
                                        <li>Endorsement opportunities with brands for LBL holders</li>
                                        <li>NFT Airdrops for random LBL holders</li>
                                        <li>Whitelist opportunities into popular projects from our partners</li>
                                        <li>Holders will receive royalties for their Llama casted in LBL TV series</li>
                                    </ul>
                                </Col>
                                <Col md={4} className="desktop-only">
                                    <img src={BenefitsImg_1} alt="" />
                                </Col>
                                
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className="overlay overlay-2"></div>
        </section>
    )
}
