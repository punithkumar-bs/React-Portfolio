import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import Flip from 'react-reveal/Flip';

function EducationJourney() {
    return (
        <div className="mt-5">
            <div>
            <Link className="btn btn-primary m-1" to="/educationjourney">Educational Journey</Link>
            <Link className="btn btn-primary m-1" to="/technicaljourney">Technical Journey</Link>
            <Link className="btn btn-primary m-1" to="/projectjourney">Project Journey</Link>
            </div>
            <div className="mt-5">
            <Flip top cascade>
                <h1>Qualification Journey</h1>
            </Flip>
            </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2016 - 2017"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">MASTERS IN BUSINESS ADMINISTRATION AND COMPUTING</h3>
                <h4 className="vertical-timeline-element-subtitle mt-2">Dublin Business School - Ireland</h4>
                <p>
                    QQI Level 9 Masters Degree
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2011 - 2015"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<SchoolIcon />}
            >
                <h3 className="vertical-timeline-element-title">INFORMATION SCIENCE AND ENGINEERING</h3>
                <h4 className="vertical-timeline-element-subtitle mt-2">Visvesvaraya Technological University - India</h4>
                <p>
                    Bachelor of Engineering Degree
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: '#fbd9ad', color: 'rgb(78 22 112)' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
        </div>
    )
}

export default EducationJourney