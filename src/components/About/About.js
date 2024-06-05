import profile_img from "../../assets/profile-photo.png";
import './About.css';
import { useEffect, useRef } from 'react';

const About = () => {

    return (
        <div className="about-container">
            <div className="about-img-container">
                <img src={profile_img} alt="Amisha Mehta Profile" />
            </div>
            <div className="about-text-container">
                <h1 className="text-4xl md:text-5xl">About Me</h1>
                <p>
                    I'm Amisha Mehta, a software engineer currently pursuing a Master's in Computer Science at Virginia Tech. Fueled by a passion for crafting
                    innovative, high-performing solutions, I leverage my full-stack development skills to tackle projects from conception to deployment.
                    My background in machine learning, honed through my Master's program, allows me to integrate intelligent features that enhance user experience
                    and efficiency.

                    Fueled by a love for continuous learning, I'm a strong team player who consistently pushes for optimization and improved productivity. I thrive in
                    collaborative environments where we can leverage each other's strengths to build impactful tech solutions that shape the future of software
                    development and machine learning.
                </p>
                <button className="bg-[#7685d6] hover:bg-[#7685d6]-400 text-white py-2 px-4 mt-6 rounded inline-flex items-center"
                    onClick={(e) => { window.open("https://drive.google.com/file/d/1tAcByzOhCA0095GOoCnmqb9tGXdBkxXg/view?usp=sharing", "_blank"); }}>
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Download Resume</span>
                </button>
            </div>
        </div>
    );
}

export default About;