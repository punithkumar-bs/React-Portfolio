import React from 'react'
import {
    AiOutlineInstagram,
    AiFillFacebook,
    AiOutlineTwitter,
    AiFillLinkedin, AiOutlineGithub
} from 'react-icons/ai';
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import { FaHackerrank } from 'react-icons/fa';

export default function SocialMedia() {
    return (
        <div className="mt-2">
            <Zoom left cascade>
            <h1>Connect with me</h1>
            </Zoom>
            <Container className="mt-5">
                <Row className="g-5">
                    <Col md={3}>
                        <a
                            href="https://github.com/punithkumar-bs"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                    <Zoom cascade>
                            <AiOutlineGithub />
                    </Zoom>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a
                            href="https://www.hackerrank.com/punithkumarbs"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <Zoom cascade>
                              <FaHackerrank />
                            </Zoom>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a
                            href="https://twitter.com/PunithK93793821"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <Zoom cascade>
                            <AiOutlineTwitter />
                            </Zoom>
                        </a>
                    </Col>
                    <Col md={3}>
                        <a
                            href="https://www.hackerrank.com/punithkumarbs"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <Zoom cascade>
                            <AiFillLinkedin />
                            </Zoom>
                        </a>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
