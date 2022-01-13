import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Faq.css';
import { ExpandMore } from '@mui/icons-material';
import $ from 'jquery';
import { IconButton } from '@mui/material';

export const Faq = () => {
    
    

    const expandMoreHandler =  (e) => {
        let id =  e.target.id; 

        let buttons = [...$(".expandButton")];
    let answers =[ ...$(".faq__answer")];

    console.log(buttons[id-1]);

        $(buttons[id-1]).toggleClass("expandButtonAnimation");
        $(answers[id-1]).toggleClass('expand');
        
    }



    return (
        <section className="faq" id="faq">
            <Container>
                <Row>
                    <Col md={12}>
                        <h2 className="uppercase h2">Frequently asked questions</h2>
                    </Col>
                    <Col md={12} className="faq__container">
                        <div className="faq__question" >
                            <h4>How Can I Buy a Laid Back Llama?</h4>
                            <IconButton >
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="1"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="1">
                            <p>
                            After sales start, you can buy on mint page.
                            </p>
                        </div>
                        <hr />

                        <div className="faq__question">
                            <h4>How Can I Buy a Laid Back Llama?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="2"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="2">
                            <p>
                            After sales start, you can buy on mint page.
                            </p>
                        </div>
                        <hr />

                        <div className="faq__question">
                            <h4>How Can I Buy a Laid Back Llama?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="3"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="3">
                            <p>
                            After sales start, you can buy on mint page.
                            </p>
                        </div>
                        <hr />

                        <div className="faq__question">
                            <h4>How Can I Buy a Laid Back Llama?</h4>
                            <IconButton>
                            <ExpandMore onClick={expandMoreHandler} className="expandButton" id="4"/>
                            </IconButton>
                        </div>
                        <div className="faq__answer" id="4">
                            <p>
                            After sales start, you can buy on mint page.
                            </p>
                        </div>
                        <hr />
                    </Col>
    
                </Row>
            </Container>
        </section>
    )
}
