import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom';
import axios from 'axios'
import { useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai';
import { FiAtSign } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Contactus() {

    const [formData, setFormData] = useState(new FormData())

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!(formData.name && formData.email && formData.message)) {
            alert('Something went wrong!')
            return
        }

        alert(`Thanks ${formData.name}, I will shortly connect with you!`)
        axios.post('https://formspree.io/f/mknevepb', formData, {
            Accept: 'application/json',
        })
        setFormData({})
    }

    return (
        <div>
            <Container fluid className="certificate-section" id="about">
                <Container>
                    <Row>
                        <Col md={12} className="certificate-description d-flex justify-content-start">
                            <Zoom left cascade>
                                <h1 className='aboutme-heading'>
                                    Contact me
                                </h1>
                            </Zoom>
                        </Col>
                        <Col md={12} id='contact' className='mt-3' >
                            <Row>
                                <Col md={4}>
                                    <div className='contacts-form' data-aos='fade-up'>
                                        <form>
                                            <div className='input-container d-flex flex-column'>
                                                <label htmlFor='username' className='label-class'>Full Name</label>
                                                <input
                                                    type='text'
                                                    className='form-input input-class'
                                                    id='username'
                                                    name='name'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Enter your name'
                                                    value={formData.name || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='input-container d-flex flex-column'>
                                                <label htmlFor='email' className='label-class'>Email address</label>
                                                <input
                                                    type='email'
                                                    className='form-input input-class'
                                                    name='email'
                                                    id='email'
                                                    aria-describedby='emailHelp'
                                                    placeholder='Enter email'
                                                    value={formData.email || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className='input-container d-flex flex-column'>
                                                <label htmlFor='userMessage' className='label-class'>Message</label>
                                                <textarea
                                                    className='form-message input-class'
                                                    id='userMessage'
                                                    name='message'
                                                    rows='3'
                                                    placeholder='Enter message'
                                                    value={formData.message || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className='submit-btn'>
                                                <button
                                                    type='submit'
                                                    className='submitBtn'
                                                    onClick={handleSubmit}
                                                >
                                                    Submit
                                                    <AiOutlineSend
                                                        className='send-icon'
                                                    />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </Col>
                                <Col md={7}>
                                    <div className='contacts-details'>
                                        <a
                                            href={`mailto:punithbds@gmail.com`}
                                            className='personal-details'
                                        >
                                            <div className='detailsIcon'>
                                                <FiAtSign />
                                            </div>
                                            <p style={{ color: '#fbd9ad' }}>
                                                punithbds@gmail.com
                                            </p>
                                        </a>
                                        <a href="https://www.google.com/maps/place/Dublin,+Ireland/@53.3244431,-6.3857864,11z/data=!3m1!4b1!4m5!3m4!1s0x48670e80ea27ac2f:0xa00c7a9973171a0!8m2!3d53.3498053!4d-6.2603097"
                                        className='personal-details'
                                        >
                                        <div className='personal-details'>
                                            <div className='detailsIcon'>
                                                <HiOutlineLocationMarker />
                                            </div>
                                            <p style={{ color: '#fbd9ad' }}>
                                                Dublin, Ireland
                                            </p>
                                        </div>
                                        </a>
                                    </div>
                                    <div className='contact-map'>
                                        <iframe
                                            src="https://maps.google.com/maps?q=dublin%20ireland&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                            frameBorder='0'
                                            allowFullScreen=''
                                            aria-hidden='false'
                                            title='Contact Me'
                                            tabIndex='0'
                                            loading="lazy"
                                            className=''
                                        ></iframe>
                                        
                                    </div>
                                    
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
