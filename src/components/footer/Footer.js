import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Header } from '../header/Header';
import './Footer.css';
import Logo from '../../assets/images/laidbacklogo.png'

export const Footer = () => {
    return (
        <section className="footer">
            <div className="footer__nav">
        <Container>
          <Row>
            <Col>
              <nav>
                <li class="website__logo__footer"><img src={Logo} alt="" /></li>
                <ul>
                <li><a href="/">Home</a></li>
                  <li><a href="/#about">About</a></li>
                  <li><a href="/#benefits">Benefits</a></li>
                  <li><a href="/#roadmap">Roadmap</a></li>
                  <li><a href="/#team">Team</a></li>
                  <li><a href="/#faq">FAQ</a></li>
                </ul>
                <ul class="header__socialLinks">
                  <li>
                    <a href=""><Facebook /></a>
                  </li>
                  <li>
                    <a href=""><Instagram /></a>
                    
                  </li>
                  <li>
                    <a href=""><Twitter /></a>
                    
                  </li>
                </ul>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
        </section>
    )
}
