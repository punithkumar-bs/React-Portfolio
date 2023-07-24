import React from 'react'
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import Tada from 'react-reveal/Tada';

export default function TechnicalSkill() {
  return (
    <div>
        <div className="mt-5 d-flex flex-row justify-content-center">
            <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
            <Link className="btn btn-primary me-3" to="/personalskill">Personal Skill</Link>
            <Link className="btn btn-primary " to="/toolkit">Toolkit</Link>
        </div>
        <Tada>
            <h1 className="mt-4">Technical Skills</h1>
        </Tada>
        <div className="mt-5">
            <Container>
                <Row className='g-5'>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#fe3e57',fontWeight:700 }}>86%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"com"} aria-valuenow={"85"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '86%'}}>
                                
                            </div>
                        </div>
                        <h2 style={{color:'#fe3e57',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Java/Spring Boot</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#54faae',fontWeight:700 }}>83%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"pm"} aria-valuenow={"85"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '83%'}}>
                            </div>
                        </div>
                        <h2 style={{color:'#54faae',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>HTML/CSS/React</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#39c4ff',fontWeight:700}}>82%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"cr"} aria-valuenow={"90"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '82%'}}>
                                
                            </div>
                        </div>
                        <h2 style={{color:'#39c4ff',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>SQL/No-SQL</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#f1f965',fontWeight:700 }}>80%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"aa"} aria-valuenow={"81"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '80%'}}>
                            </div>
                        </div>
                        <h2 style={{color:'#f1f965',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>AWS</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#ff0173',fontWeight:700 }}>82%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"org"} aria-valuenow={"82"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '82%'}}>
                                
                            </div>
                        </div>
                        <h2 style={{color:'#ff0173',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Docker/Kubernetes</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#929747',fontWeight:700 }}>88%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"org"} aria-valuenow={"88"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '88%'}}>

                            </div>
                        </div>
                        <h2 style={{color:'#ff0173',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Kafka</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#ff8c2f',fontWeight:700 }}>75%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"ps"} aria-valuenow={"86"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '75%'}}>
                            </div>
                        </div>
                        <h2 style={{color:'#ff8c2f',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Graph QL</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#41f2ff',fontWeight:700 }}>80%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                        <div class="progress">
                            <div role={"progressbar"} id={"react"} aria-valuenow={"86"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '80%'}}>
                            </div>
                        </div>
                        <h2 style={{color:'#41f2ff',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Karate/Jmeter/Junit</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#6009ECFF',fontWeight:700 }}>81%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                            <div class="progress">
                                <div role={"progressbar"} id={"git"} aria-valuenow={"86"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '81%'}}>
                                </div>
                            </div>
                            <h2 style={{color:'#6009ECFF',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Git/BitBucket/SVN</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h1 style={{ fontSize: '100px',color:'#C99788FF',fontWeight:700 }}>84%</h1>
                        <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                            <div class="progress">
                                <div role={"progressbar"} id={"jenkins"} aria-valuenow={"86"} aria-valuemin={"0"} aria-valuemax={"100"} style={{width: '84%'}}>
                                </div>
                            </div>
                            <h2 style={{color:'#C99788FF',fontSize:'25px',marginTop:'13px',fontWeight:700 }}>Jenkins</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
                
        </div>
    </div>
  )
}
