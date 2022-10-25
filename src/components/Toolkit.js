import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import react from '../images/react.png'
import intellij from '../images/intellij.png'
import git from '../images/git.png'
import docker from '../images/docker.png'
import pm from '../images/pm.png'
import vs from '../images/Vs.png'
import aws from '../images/aws-white-logo.png'
import sprintboot from '../images/springboot.svg'
import jenkins from '../images/jenkins.png'
import elastic from '../images/elastic.png'

import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

export default function Toolkit() {
    return (
        <div>
            <div className="mt-5 d-flex flex-row justify-content-center">
                <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
                <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
                <Link className="btn btn-primary " to="/toolkit">Toolkit</Link>
            </div>
            <Zoom left cascade>
            <h1 className="mt-4">Tools I Use</h1>
            </Zoom>
            <Container className='mt-4'>
                <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={intellij} alt="" style={{width:'85%',height:'85%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={react} alt="" style={{width:'85%',height:'85%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={git} alt="" style={{width:'85%',height:'85%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={elastic} alt="" style={{width:'85%',height:'85%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={docker} alt="" style={{width:'95%',height:'95%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={aws} alt="" style={{width:'95%',height:'95%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={pm} alt="" style={{width:'95%',height:'95%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={sprintboot} alt="" style={{width:'95%',height:'95%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={vs} alt="" style={{width:'95%',height:'95%'}}/>
                    </Col>
                    <Col xs={4} md={2} className="tech-icons">
                        <img src={jenkins} alt="" style={{width:'95%',height:'95%'}}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
