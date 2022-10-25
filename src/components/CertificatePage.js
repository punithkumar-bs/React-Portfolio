import React from 'react'
import Particle from './Particle'
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-reveal";
import aws from '../images/aws.svg'
import codecamp from '../images/codecamp.png'
import google from '../images/google-logo.png'
import hackerrank from '../images/hackerrank.png'
import badges from '../images/badges.png'
import {useState, useEffect} from 'react'

export default function ProjectPage() {
    const data = [
        {
            "certificate_name": "AWS Cloud Practitioner Essentials",
            "organization": "Amazon Web Services",
            "link": "https://www.linkedin.com/feed/update/urn:li:activity:6673301367907508224/",
            "logo": aws
        },
        {
            "certificate_name": "JavaScript Algorithms and Data Structures",
            "organization": "Free Code Camp",
            "link": "https://www.freecodecamp.org/certification/fcc6a852a92-0af5-494d-a0c2-440a9e3774f3/javascript-algorithms-and-data-structures",
            "logo": codecamp
        },
        {
            "certificate_name": "Troubleshooting and Debugging Techniques",
            "organization": "Google",
            "link": "https://www.coursera.org/account/accomplishments/verify/ERXQ2J9SNSXB",
            "logo": google
        },
        {
            "certificate_name": "JavaScript (Intermediate)",
            "organization": "Hackerrank",
            "link": "https://www.hackerrank.com/certificates/d023b4f3b3fb",
            "logo": hackerrank
        },
        {
            "certificate_name": "SQL (Intermediate)",
            "organization": "Hackerrank",
            "link": "https://www.hackerrank.com/certificates/b6ddad354272",
            "logo": hackerrank
        },
        {
            "certificate_name": "Python",
            "organization": "Hackerrank",
            "link": "https://www.hackerrank.com/certificates/2213ce53505d",
            "logo": hackerrank
        },
        {
            "certificate_name": "React JS",
            "organization": "Hackerrank",
            "link": "https://www.hackerrank.com/certificates/a8da18fe3a3c",
            "logo": hackerrank
        },
        {
            "certificate_name": "Rest API",
            "organization": "Hackerrank",
            "link": "https://www.hackerrank.com/certificates/e2355ce20074",
            "logo": hackerrank
        },
        {
            "certificate_name": "Java",
            "organization": "Hackerrank",
            "link": "https://www.hackerrank.com/certificates/9a0bf42ca94f",
            "logo": hackerrank
        },
        {
            "certificate_name": "Javascript",
            "organization": "Hackerrank",
            "link": "https://www.hackerrank.com/certificates/a71119f94680",
            "logo": hackerrank
        },
        {
            "certificate_name": "SQL",
            "organization": "Hackerrank",
            "link": "https://www.hackerrank.com/certificates/a248166b3b25",
            "logo": hackerrank
        }
    ]
    var [loading,updateloading]=useState(true);

    async function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    useEffect(() => {
        timeout(2000)
            .then(result => {
                updateloading(false)
            })
    }, []);

    return (
        <section className="home-section">
            <Container fluid id="home" >
                <Particle />
                <Container className="home-content">
                    <div className="d-flex justify-content-center" width="100%" style={{ backgroundColor: '#fbd9ad' }}>
                        <Zoom left cascade>
                            <h1 style={{ color: 'rgb(134 61 176)' }}>Certificates</h1>
                        </Zoom>
                    </div>
                    <div>
                        { loading ?
                        <Container className="home-content d-flex justify-content-center align-items-center comingsoonclass">
                        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_rwhs2cdz.json"  background="transparent"  speed="1"  style={{width: '30%', height: '100%'}}  loop  autoplay></lottie-player>
                        </Container>
                        : 
                        <div>
                            <Container fluid className="certificate-section" id="about">
                                <Container>
                                    <Row>
                                        <Col md={12} className="mt-5">
                                            <div className="cert-card" style={{height:"unset"}}>
                                                <img
                                                    src={badges}
                                                    alt={"badges"}
                                                    width={"100%"}
                                                    height={"auto"}
                                                />
                                            </div>
                                        </Col>
                                        <Col md={12} className="mt-5">
                                            <Row className='g-5'>
                                                {data.map((d, i) => (
                                                <Col md={4} key={i}>
                                                    <Fade bottom duration={2000} distance="20px">
                                                        <div className="cert-card">
                                                            <div className="content">
                                                                <a
                                                                    href={d.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <div className="content-overlay"></div>
                                                                    <div
                                                                        className="cert-header"
                                                                        style={{ backgroundColor: 'white' }}
                                                                    >
                                                                        <img
                                                                            className="logo_img"
                                                                            src={d.logo}
                                                                            alt={"no ima"}
                                                                        />

                                                                    </div>
                                                                    <div className="content-details fadeIn-top">
                                                                        <h3 className="content-title" style={{ color: 'black' }}>
                                                                            Certificate
                                                                        </h3>
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="cert-body">
                                                                <h2 className="cert-body-title" style={{ fontWeight: 700, color: '#fbd9ad' }}>
                                                                    {d.certificate_name}
                                                                </h2>
                                                                <h3
                                                                    className="cert-body-subtitle"
                                                                    style={{ color: '#eb90ff', marginBottom: '0px' }}
                                                                >
                                                                    {d.organization}
                                                                </h3>
                                                            </div>
                                                        </div>
                                                    </Fade>
                                                </Col>
                                                ))}
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                            </Container>
                        </div>
                        }
                    </div>
                </Container>
            </Container>
        </section>
    )
}
