
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import aboutBg from '../../assets/images/about-1.jpg';
import AboutImg from "../../assets/images/img-2.jpg";
import AboutImgx350 from "../../assets/images/img-2x350.jpg";
import AboutImg1 from "../../assets/images/img-1.jpg";
import gsap from "gsap";
import MotionPath from "gsap/MotionPathPlugin"
import { TweenMax, TimelineLite, Power2, Elastic, CSSPlugin, TimelineMax, TweenLite, Power1, CustomEase } from "gsap/all";
import ScrollMagic from 'scrollmagic';
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js";
import $ from 'jquery';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const About = () => {
  const aboutDetails = useRef(null);
  // const mobile = false;

  useEffect(() => {
    gsap.registerPlugin(MotionPath);
    const controller = new ScrollMagic.Controller();
    const controller_2 = new ScrollMagic.Controller();

    const t1 = new TimelineMax();
    const t2 = new TimelineMax();
    const t3 = new TimelineMax();
    const t4 = new TimelineMax();

    var tween_7 = t4.to(".hero .col-md-8 img",3,{
      transform:"scaleY(0)",
      opacity: 0,
      transformOrigin:"bottom",
      ease:CustomEase.create("custom", "M0,0 C0.526,0.582 0.356,1.024 1,1 "),
    },0);

    var heroSceen =  new ScrollMagic.Scene({
      triggerElement:".hero .col-md-8",
      duration:400,
      offset:500,
    }).setTween(tween_7).addTo(controller);

    if(window.screen.width>1199){

    var tween = t1.from("#ab-1",12,{
      opacity: 0,
      motionPath:{
        path:[{xPercent:300}],
        curviness:1,
        autoRotate:false
      },
      ease:Power1.easeOut,
    },0).from("#ab-2",12,{
      opacity:0,
      motionPath:{
        path:[{xPercent:-300}],
        curviness:1,
        autoRotate:false
      },
      ease:Power1.easeOut,
    })

    
    new ScrollMagic.Scene({
        triggerElement:".about",
        duration:600,
        offset:600,
      }).setTween(tween).setPin('.about').addTo(controller);

    } else if(window.screen.width<=1199){
      gsap.from("#ab-1",{
        scrollTrigger:"#ab-1",
        x:-300,
        opacity:0,
        duration: 5,
        stagger: 0.25,
        autoAlpha:0,
  
    });
    gsap.from("#ab-2",{
        scrollTrigger:"#ab-2",
        x:300,
        opacity:0,
        duration: 5,
        stagger: 0.25,
        autoAlpha:0,
        
    })
    
    }  
  }, []);


  return (
    <section className="about" id="about">
      <div className="overlay"></div>
      <img src={aboutBg} className="bg-img" alt="" />
      <Container className="animation-container">
        <Row>
          <Col md={12} className="about__details"  ref={aboutDetails} id="ab-1">
            <Row>
                <Col md={6} className="desktop-only">
              <div className="about__details__container">
                <h1 className="about__details__title">LAID BACK Llamas</h1>
                <p className="about__details__description">
                  Deep in the digital mountains of the Metaverse lies a herd of
                  7,000 exceptional llamas. They represent confidence,
                  tranquility, and different personalities that boast style with
                  every stride. These fresh-looking llamas have been exploring
                  the rolling hills of the digital landscape in search of good
                  vibes and good vibes only. They got the swag, the funk, the
                  jazz, with each llama more laid back than the next. This
                  exquisite herd only breeds the finest of llamas with the
                  fluffiest fur and the sickest
                </p>
              </div>
              </Col>
              <Col md={6} className="img desktop-only">
              <img src={AboutImg} alt="" />
              </Col>
              <Col md={6} className="img mobile-only">
              <img src={AboutImg} alt="" />
              </Col>
              <Col md={6} className="mobile-only">
              <div className="about__details__container">
                <h1 className="about__details__title">LAID BACK Llamas</h1>
                <p className="about__details__description">
                  Deep in the digital mountains of the Metaverse lies a herd of
                  7,000 exceptional llamas. They represent confidence,
                  tranquility, and different personalities that boast style with
                  every stride. These fresh-looking llamas have been exploring
                  the rolling hills of the digital landscape in search of good
                  vibes and good vibes only. They got the swag, the funk, the
                  jazz, with each llama more laid back than the next. This
                  exquisite herd only breeds the finest of llamas with the
                  fluffiest fur and the sickest
                </p>
              </div>
              </Col>
              </Row>
          </Col>


          <Col md={12} className="about__details" ref={aboutDetails} id="ab-2">
          <Row>
              
                <Col md={6} className="img">
              <img src={AboutImg1} alt="" />
              </Col>
              <Col md={6} className="mobile-only">
              <div className="about__details__container">
                <h1 className="about__details__title">LAID BACK Llamas</h1>
                <p className="about__details__description">
                  Deep in the digital mountains of the Metaverse lies a herd of
                  7,000 exceptional llamas. They represent confidence,
                  tranquility, and different personalities that boast style with
                  every stride. These fresh-looking llamas have been exploring
                  the rolling hills of the digital landscape in search of good
                  vibes and good vibes only. They got the swag, the funk, the
                  jazz, with each llama more laid back than the next. This
                  exquisite herd only breeds the finest of llamas with the
                  fluffiest fur and the sickest
                </p>
              </div>
              </Col>
              <Col md={6} className="desktop-only">
              <div className="about__details__container">
                <h1 className="about__details__title">LAID BACK Llamas</h1>
                <p className="about__details__description">
                  Deep in the digital mountains of the Metaverse lies a herd of
                  7,000 exceptional llamas. They represent confidence,
                  tranquility, and different personalities that boast style with
                  every stride. These fresh-looking llamas have been exploring
                  the rolling hills of the digital landscape in search of good
                  vibes and good vibes only. They got the swag, the funk, the
                  jazz, with each llama more laid back than the next. This
                  exquisite herd only breeds the finest of llamas with the
                  fluffiest fur and the sickest
                </p>
              </div>
              </Col>
              </Row>
          </Col>
        </Row>
      </Container>
      <div className="overlay overlay-2"></div>
    </section>
  );
};
