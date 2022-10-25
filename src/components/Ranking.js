import React from 'react'
import { FaHackerrank } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { Container, Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

export default function Ranking() {
    return (
        <div className="mt-4">
            <Zoom left cascade>
            <h1>See my rank</h1>
            </Zoom>
            <Container className="mt-5">
                <Row className="g-5">
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
                            href="https://leetcode.com/punithbds/"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <Zoom cascade>
                                <SiLeetcode />
                            </Zoom>
                        </a>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}
