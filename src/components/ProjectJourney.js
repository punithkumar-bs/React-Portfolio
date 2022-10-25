import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import CampaignIcon from '@mui/icons-material/Campaign';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import SendTimeExtensionIcon from '@mui/icons-material/SendTimeExtension';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import VerifiedIcon from '@mui/icons-material/Verified';
import Flip from 'react-reveal/Flip';
import { DiReact } from 'react-icons/di';

function ProjectJourney() {
    return (
        <div className="mt-5">
            <div>
            <Link className="btn btn-primary m-1" to="/educationjourney">Educational Journey</Link>
            <Link className="btn btn-primary m-1" to="/technicaljourney">Technical Journey</Link>
            <Link className="btn btn-primary m-1" to="/projectjourney">Project Journey</Link>
            </div>
            <div className="mt-5">
            <Flip top cascade>
                <h1>Project Journey</h1>
            </Flip>
            </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2022"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<DiReact />}
            >
                <h3 className="vertical-timeline-element-title">REACT PORTFOLIO</h3>
                
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2022"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<CampaignIcon />}
            >
                <h3 className="vertical-timeline-element-title">EMPLOYEE CENTRAL ALERT SYSTEM</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2021"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<IntegrationInstructionsIcon />}
            >
                <h3 className="vertical-timeline-element-title">PERSONAL PORTFOLIO</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2020"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<SendTimeExtensionIcon />}
            >
                <h3 className="vertical-timeline-element-title">AUTOMATIC CEREMONY INVITATION</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2019"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<CoronavirusIcon />}
            >
                <h3 className="vertical-timeline-element-title">COVID-19 STREAM PROCESSOR</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2018"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<PhonelinkLockIcon />}
            >
                <h3 className="vertical-timeline-element-title">PASSWORD MANAGEMENT CONTROL PANEL</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(78 22 112)' }}
                date="2015"
                iconStyle={{ background: 'rgb(78 22 112)', color: '#fbd9ad' }}
                icon={<VerifiedIcon />}
            >
                <h3 className="vertical-timeline-element-title">CAPTCHA AS GRAPHICAL AUTH</h3>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                iconStyle={{ background: '#fbd9ad', color: 'rgb(78 22 112)' }}
                icon={<StarIcon />}
            />
        </VerticalTimeline>
        </div>
    )
}

export default ProjectJourney