import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Team.css';
import member1 from '../../assets/images/member-1.png';
import member2 from '../../assets/images/member-2.png';
import member3 from '../../assets/images/member-3.png';
import member4 from '../../assets/images/member-4.png';
import gsap from 'gsap';

export const Team = () => {

    useEffect(() => {
        gsap.utils.toArray(".member__container").forEach(section => {
            gsap.from(section.querySelectorAll('.team__member , .member__details , h2 , p'), {
              scrollTrigger: section,
              autoAlpha: 0,
              opacity:0,
              x:-500,
              duration: 1.75,
              stagger: 0.25,
    
            });
  
          });
    },[window.screen.width])

    return (
        <section className="team" id="team">
            <Container>
                <Row>
                    <Col md={12}>
                    <h2 className="uppercase h2">LAID BACK LLAMAS TEAM</h2>
                    </Col>
                    <Col md={12}>
                        <Row>
                        <Col md={3} className="member__container" id="m1">
                        <div className="team__member">
                            <div className="member__image">
                            <img src={member1} alt="" />
                            </div>
                            <div className="member__details">
                                <h2>Member </h2>
                                <p>Member Position in the Team.</p>
                            </div>
                        </div>
                        </Col>

                        <Col md={3} className="member__container" id="m1">
                        <div className="team__member">
                            <div className="member__image">
                            <img src={member2} alt="" />
                            </div>
                            <div className="member__details">
                                <h2>Member</h2>
                                <p>Member Position in the Team.</p>
                            </div>
                        </div>
                        </Col>

                        <Col md={3} className="member__container" id="m1">
                        <div className="team__member">
                            <div className="member__image">
                            <img src={member3} alt="" />
                            </div>
                            <div className="member__details">
                                <h2>Member</h2>
                                <p>Member Position in the Team.</p>
                            </div>
                        </div>
                        </Col>

                        <Col md={3} className="member__container" id="m1">
                        <div className="team__member">
                            <div className="member__image">
                            <img src={member4} alt="" />
                            </div>
                            <div className="member__details">
                                <h2>Member</h2>
                                <p>Member Position in the Team.</p>
                            </div>
                        </div>
                        </Col>

                        
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
