import React from 'react'
import Particle from './Particle'
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-reveal";
import badges from '../images/badges.png'
import axios from 'axios';
import {useState, useEffect} from 'react'

export default function ProjectPage() {
    var [data, updatedata] = useState([]);
    var [loading,updateloading]=useState(true);
    async function getData() {
        axios.get("https://punithkumar-certificates.free.beeceptor.com/my/api/path/certificate").then(result=>{
            updateloading(false);
            updatedata(result.data);
    });
    }
    useEffect(() => {
        getData();
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
