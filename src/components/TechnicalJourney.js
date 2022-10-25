import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { DiHtml5, DiPython, DiReact, DiJava, DiAws, DiDocker } from 'react-icons/di';
import Flip from 'react-reveal/Flip';
import { SiCplusplus, SiSpringboot } from 'react-icons/si';

function TechnicalJourney() {
    return (
        <div className="mt-5">
            <div>
            <Link className="btn btn-primary m-1" to="/educationjourney">Educational Journey</Link>
            <Link className="btn btn-primary m-1" to="/technicaljourney">Technical Journey</Link>
            <Link className="btn btn-primary m-1" to="/projectjourney">Project Journey</Link>
            </div>
            <div className="mt-5">
            <Flip top cascade>
                <h1>Technical Journey</h1>
            </Flip>
            </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiJava />}
            >
                <h3 className="vertical-timeline-element-title">Java</h3>
                
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<SiCplusplus/>}
            >
                <h3 className="vertical-timeline-element-title">C++</h3>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiPython />}
            >
                <h3 className="vertical-timeline-element-title">PYTHON</h3>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiReact />}
            >
                <h3 className="vertical-timeline-element-title">REACT</h3>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiHtml5 />}
            >
                <h3 className="vertical-timeline-element-title">HTML CSS & JAVASCRIPT</h3>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiDocker />}
            >
                <h3 className="vertical-timeline-element-title">DOCKER</h3>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<SiSpringboot />}
            >
                <h3 className="vertical-timeline-element-title">SPRINGBOOT REST FRAMEWORK</h3>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date=""
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiAws />}
            >
                <h3 className="vertical-timeline-element-title">AWS</h3>

            </VerticalTimelineElement>


            <VerticalTimelineElement
                iconStyle={{ background: '#fbd9ad', color: 'rgb(78 22 112)' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
        </div>
    )
}

export default TechnicalJourney