import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-reveal";
import aws from '../images/aws.svg'
import google from '../images/google-logo.png'
import codecamp from '../images/codecamp.png'
import { Link } from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";

export default function Certification() {
    return (
        <div>
            <Container fluid className="certificate-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="certificate-description d-flex justify-content-start">
                            <Zoom left cascade>
                                <h1 className='aboutme-heading'>
                                    Certification
                                </h1>
                            </Zoom>
                        </Col>
                        <Col ms={12} className="mt-3">
                            <Row className='g-5'>
                                <Col md={4}>
                                    <Fade bottom duration={2000} distance="20px">
                                        <div className="cert-card">
                                            <div className="content">
                                                <a
                                                    href="https://www.linkedin.com/feed/update/urn:li:activity:6673301367907508224/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="content-overlay"></div>
                                                    <div
                                                        className="cert-header"
                                                        style={{ backgroundColor: 'white' }}
                                                    >
                                                        {<img
                                                            className="logo_img"
                                                            src={aws}
                                                            alt={aws}
                                                        />}

                                                    </div>
                                                    <div className="content-details fadeIn-top">
                                                        <h3 className="content-title" style={{ color: 'black' }}>
                                                            Certificate
                                                        </h3>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="cert-body">
                                                <h2 className="cert-body-title" style={{ fontWeight:700,color:'#fbd9ad' }}>
                                                AWS Cloud Practitioner Essentials
                                                </h2>
                                                <h3
                                                    className="cert-body-subtitle"
                                                    style={{ color: '#eb90ff',marginBottom:'0px' }}
                                                >
                                                    Amazon Web Services
                                                </h3>
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col md={4}>
                                    <Fade bottom duration={2000} distance="20px">
                                        <div className="cert-card">
                                            <div className="content">
                                                <a
                                                    href="https://www.coursera.org/account/accomplishments/verify/ERXQ2J9SNSXB"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="content-overlay"></div>
                                                    <div
                                                        className="cert-header"
                                                        style={{ backgroundColor: 'white' }}
                                                    >
                                                        {<img
                                                            className="logo_img"
                                                            src={google}
                                                            alt={google}
                                                        />}

                                                    </div>
                                                    <div className="content-details fadeIn-top">
                                                        <h3 className="content-title" style={{ color: 'black' }}>
                                                            Certificate
                                                        </h3>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="cert-body">
                                                <h2 className="cert-body-title" style={{ fontWeight:700,color:'#fbd9ad' }}>
                                                Troubleshooting and Debugging Techniques
                                                </h2>
                                                <h3
                                                    className="cert-body-subtitle"
                                                    style={{ color: '#eb90ff',marginBottom:'0px' }}
                                                >
                                                    Google
                                                </h3>
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                                <Col md={4}>
                                    <Fade bottom duration={2000} distance="20px">
                                        <div className="cert-card">
                                            <div className="content">
                                                <a
                                                    href="https://freecodecamp.org/certification/fcc6a852a92-0af5-494d-a0c2-440a9e3774f3/javascript-algorithms-and-data-structures"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <div className="content-overlay"></div>
                                                    <div
                                                        className="cert-header"
                                                        style={{ backgroundColor: 'white' }}
                                                    >
                                                        {<img
                                                            className="logo_img"
                                                            src={codecamp}
                                                            alt={codecamp}
                                                        />}

                                                    </div>
                                                    <div className="content-details fadeIn-top">
                                                        <h3 className="content-title" style={{ color: 'black' }}>
                                                            Certificate
                                                        </h3>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="cert-body">
                                                <h2 className="cert-body-title" style={{ fontWeight:700,color:'#fbd9ad' }}>
                                                Javascript Algorithms and Data Structures
                                                </h2>
                                                <h3
                                                    className="cert-body-subtitle"
                                                    style={{ color: '#eb90ff',marginBottom:'0px' }}
                                                >
                                                    freeCodeCamp
                                                </h3>
                                            </div>
                                        </div>
                                    </Fade>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="blog--viewAll">
                                <Link to="/certificatepage">
                                    <button className='btn btn-primary'>
                                        View All
                                        <HiArrowRight className='viewArr'   />
                                    </button>
                                </Link>
                    </div>
                </Container>
            </Container>
        </div>
    )
}
