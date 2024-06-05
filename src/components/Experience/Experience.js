import './Experience.css';
import React, { useEffect, useRef, useState } from 'react';
import experience_bg from '../../assets/experience_bg.png';

const Experience = () => {
    const timelineRef = useRef(null);
    const [expanded1, setExpanded1] = useState(false);
    const [expanded2, setExpanded2] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    } else {
                        entry.target.classList.remove('in-view');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const timelineEvents = timelineRef.current.querySelectorAll('.timeline-event');
        timelineEvents.forEach((event) => observer.observe(event));

        return () => observer.disconnect();
    }, []);

    const toggleExpand1 = () => {
        setExpanded1(!expanded1);
    };

    const toggleExpand2 = () => {
        setExpanded2(!expanded2);
    };

    return (
        <div style={{ backgroundImage: `url(${experience_bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', width: '100%', height: "100%" }}>
            <h1 className='text-4xl md:text-5xl text-center pb-10'>Experience</h1>
            <div className="timeline" ref={timelineRef}>

                {/* work experience #1 */}

                <div className="timeline-event">
                    <div className="timeline-date">JULY 2022 – JUNE 2023</div>
                    <div className="timeline-content">
                        <h3>Associate Software Engineer at Altera Digital Health</h3>
                        <ul className="bullet-points">
                            <li>Spearheaded the development and optimization of critical healthcare modules, utilizing C#, .NET, and Agile methodologies
                                to significantly enhance user experience and system performance.</li>
                            <li>Led a strategic migration from GWT to .NET, resulting in streamlined maintenance efforts and improved system efficiency.</li>
                            {expanded1 && (
                                <>
                                    <li>Implemented advanced unit testing methodologies to ensure the delivery of high-quality, bug-free solutions.</li>
                                    <li>Facilitated SCRUM sessions and collaborated with global stakeholders to align technical solutions with strategic business
                                        objectives, driving successful project outcomes.</li>
                                </>
                            )}
                        </ul>
                        <button onClick={toggleExpand1} className="text-[#3F51B5]">
                            {expanded1 ? (
                                <>
                                    Show Less <span>&#x25B2;</span>
                                </>
                            ) : (
                                <>
                                    View More <span>&#x25BC;</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* work Experience #2 */}

                <div className="timeline-event">
                    <div className="timeline-date">JULY 2020 – JUNE 2022</div>
                    <div className="timeline-content">
                        <h3>Web Developer at Confidosoft Solutions Pvt. Ltd.</h3>
                        <ul className="bullet-points">
                            <li>Orchestrated the development and deployment of full-stack applications using C#, .NET, and Angular, optimizing operational efficiency
                                and user engagement.</li>
                            <li>Engineered scalable ASP.NET Core Web APIs, enhancing system throughput and streamlining data integration processes.</li>
                            {expanded2 && (
                                <>
                                    <li>Implemented improvements in data querying and user interaction, resulting in enhanced responsiveness and user satisfaction.</li>
                                    <li>Mentored a team of developers and coordinated version control, fostering a collaborative environment and ensuring project success
                                        within the software development lifecycle.</li>
                                </>
                            )}
                        </ul>
                        <button onClick={toggleExpand2} className="text-[#3F51B5]">
                            {expanded2 ? (
                                <>
                                    Show Less <span>&#x25B2;</span>
                                </>
                            ) : (
                                <>
                                    View More <span>&#x25BC;</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Experience;