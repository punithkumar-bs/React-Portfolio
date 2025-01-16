import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

const About = () => {
    return (
        <div>
            <Container>
                <Row className="mt-5">
                    <Col md={5}>
                        <Slide left>
                            <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                                           background="transparent" speed="1" style={{width: '100%', height: '90%'}}
                                           loop autoplay></lottie-player>
                        </Slide>
                    </Col>
                    <Col md={7}>
                        <Slide right>
                            <p className="home-about-body">
                                👋 I'm a passionate Lead Software Engineer with more than 7 years of professional experience
                                based in Ireland with a strong focus on Full-Stack Development
                                <br/>
                                <br/>I'm a crazy full stack developer who wants to explore every tech stack 👨‍💻
                                <br/>
                                <br/>I am fluent with Technologies like
                                <i>
                                    <b className="purple"> Java, React JS, Spark, Scala, Spring, GraphQL, Kubernetes and AWS </b>
                                </i>
                                <br/>
                                <br/>
                                My field of Interest's are building new &nbsp;
                                <i>
                                    <b className="purple">Web Technologies and Products </b>
                                </i>
                                <br/>
                                <br/>
                                I am passionate for developing products
                                with <b className="purple">Java</b> and
                                <i>
                                    <b className="purple">
                                        {' '}
                                        Modern Javascript Library and Frameworks
                                    </b>
                                </i>
                                &nbsp; like
                                <i>
                                    <b className="purple"> React.js</b>
                                </i>
                                <br/>
                                <br/>
                                I also build Microservices and RESTful API's using  &nbsp;
                                <i>
                                    <b className="purple">Springboot Framework </b>
                                </i>
                            </p>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default About;
