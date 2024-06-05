import React, { useState, useRef, useEffect } from 'react';
import education_img from '../../assets/education.gif';

const Education = () => {
    const [isAccordion1Open, setIsAccordion1Open] = useState(true);
    const [isAccordion2Open, setIsAccordion2Open] = useState(false);
    const accordion1Ref = useRef(null);
    const accordion2Ref = useRef(null);
    const [accordion1Height, setAccordion1Height] = useState(0);
    const [accordion2Height, setAccordion2Height] = useState(0);

    useEffect(() => {
        setAccordion1Height(accordion1Ref.current.scrollHeight);
        setAccordion2Height(accordion2Ref.current.scrollHeight);
    }, [isAccordion1Open, isAccordion2Open]);

    const toggleAccordion1 = () => {
        setIsAccordion1Open(!isAccordion1Open);
    };

    const toggleAccordion2 = () => {
        setIsAccordion2Open(!isAccordion2Open);
    };

    return (
        <div className=""
            style={{ backgroundImage: `url(${education_img})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right'}}>
            <div className='flex items-center flex-col'>
                <h1 className='text-4xl md:text-5xl text-center pt-10'>Education</h1>
                <div className="max-w-xl md:max-w-4xl p-10">
                    <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 text-blue-600">
                        <h2 id="accordion-color-heading-1">
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                            border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 hover:bg-blue-100 gap-3
                            ${isAccordion1Open ? 'bg-blue-100 text-blue-600' : ''}`}
                                onClick={toggleAccordion1}
                                aria-expanded={isAccordion1Open}
                                aria-controls="accordion-color-body-1"
                            >
                                <span>Master's Computer Science at Virginia Tech</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 shrink-0 ${isAccordion1Open ? 'rotate-180' : ''}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-color-body-1"
                            ref={accordion1Ref}
                            className={`transition-all duration-700 ease-in-out overflow-hidden ${isAccordion1Open ? 'opacity-100' : 'opacity-0'}`}
                            aria-labelledby="accordion-color-heading-1"
                            style={{ maxHeight: isAccordion1Open ? `${accordion1Height}px` : '0' }}
                        >
                            <div className="p-5 border border-gray-200">
                                <p className="mb-2 text-gray-500">
                                    <span className='text-gray-600'>Relevant Coursework:</span> Machine Learning, Intro To Artificial Intelligence, Software Engineering, Cloud Computing,
                                    Social Media Analytics, Usability Engineering
                                </p>
                                <p className="mb-2 text-gray-500">
                                    <span className='text-gray-600'>CGPA:</span> 3.78/4.0
                                </p>
                            </div>
                        </div>
                    </div>

                    <div id="accordion-color" data-accordion="collapse" data-active-classes="bg-blue-100 text-blue-600" className='pt-10'>
                        <h2 id="accordion-color-heading-2">
                            <button
                                type="button"
                                className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 
                            border border-gray-200 rounded-t-xl focus:ring-4 focus:ring-blue-200 hover:bg-blue-100 gap-3
                            ${isAccordion2Open ? 'bg-blue-100 text-blue-600' : ''}`}
                                onClick={toggleAccordion2}
                                aria-expanded={isAccordion2Open}
                                aria-controls="accordion-color-body-2"
                            >
                                <span>Bachelor of Technology in Computer Science and Engineering at Navrachana University</span>
                                <svg
                                    data-accordion-icon
                                    className={`w-3 h-3 shrink-0 ${isAccordion2Open ? 'rotate-180' : ''}`}
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            id="accordion-color-body-2"
                            ref={accordion2Ref}
                            className={`transition-all duration-700 ease-in-out overflow-hidden ${isAccordion2Open ? 'opacity-100' : 'opacity-0'}`}
                            aria-labelledby="accordion-color-heading-2"
                            style={{ maxHeight: isAccordion2Open ? `${accordion2Height}px` : '0' }}
                        >
                            <div className="p-5 border border-gray-200">
                                <p className="mb-2 text-gray-500">
                                    <span className='text-gray-600'>Relevant Coursework:</span> Data Structures & Algorithms, Object-Oriented Programming, Machine Learning and Deep
                                    Learning, Artificial Intelligence, Database Management, Web Development, Data Analysis, Statistics & Probability
                                </p>
                                <p className="mb-2 text-gray-500">
                                    <span className='text-gray-600'>CGPA:</span> 8.34/10.0
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Education;
