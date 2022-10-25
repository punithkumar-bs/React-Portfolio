import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Particle from './Particle'
import Typing from './Typing'
import Tilt from "react-parallax-tilt";
import Home2 from './Home2';
import Fade from 'react-reveal/Fade';
import {
    AiFillGithub,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn, FaGoogle, FaHackerrank, FaStackOverflow } from 'react-icons/fa';
import Certification from './Certification';
import Contactus from './Contactus';

export default function Home() {
    return (
        <section className="home-section">
            <Container fluid id="home" >
                <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={8} className="home-header">
                            <h1 style={{ paddingBottom: 15, fontSize: '175px' }} className="heading">
                                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
                            </h1>

                            <h1 className="heading-name">
                                I'm
                                <strong className="main-name"> Punith Kumar</strong>
                            </h1>

                            <div className="typing-homeclass">
                                <Typing />
                            </div>
                            <div className='sociallink-home'>
                                <ul className="homeaboutsociallinks">
                                    <li className="socialicons">
                                        <a
                                            href="https://github.com/punithkumar-bs"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour  homesocialicons"
                                        >
                                            <AiFillGithub />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://twitter.com/PunithK93793821"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour  homesocialicons"
                                        >
                                            <AiOutlineTwitter />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://www.linkedin.com/in/punithkumarbs/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour  homesocialicons"
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://www.hackerrank.com/punithkumarbs"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour homesocialicons"
                                        >
                                            <FaHackerrank />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="https://stackoverflow.com/users/15607368/punith-kumar"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour homesocialicons"
                                        >
                                            <FaStackOverflow />
                                        </a>
                                    </li>
                                    <li className="socialicons">
                                        <a
                                            href="mailto:punithbds@gmail.com/"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="iconcolour homesocialicons"
                                        >
                                            <FaGoogle />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                                
                        </Col>
                        <Col md={4} style={{ paddingBottom: 20 }}>
                            <div className="img-home-main">
                            <Tilt>
                                <Fade cascade>
                                    <img src="./profile-circle.png" alt="home pic" className="img-fluid" />
                                </Fade>
                            </Tilt>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Home2 />
            <Certification/>
            <Contactus />
        </section>
    )
}
