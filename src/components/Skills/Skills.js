import React from 'react';
import python_icon from '../../assets/python.png';
import csharp_icon from '../../assets/c-sharp.png';
import react_icon from '../../assets/react.png';
import nodejs_icon from '../../assets/nodejs.png';
import js from '../../assets/js.png';
import asp_net_core from '../../assets/NET core.png';
import typescript from '../../assets/typescript.png';
import docker_icon from '../../assets/docker.png';
import git_icon from '../../assets/git.png';
import github_icon from '../../assets/github.png';
import tailwind_icon from '../../assets/Tailwind CSS.png';
import tensorflow_icon from '../../assets/TensorFlow.png';
import jupyter_icon from '../../assets/Jupyter.png';
import angular_icon from '../../assets/Angular.png';
import aws_icon from '../../assets/AWS.png';
import scikit_learn_icon from '../../assets/scikit-learn.png';
import postgress_icon from '../../assets/PostgresSQL.png';
import mysql_icon from '../../assets/MySQL.png';
import mongodb_icon from '../../assets/MongoDB.png';

const TechStack = () => {
    const technologies = [
        { name: 'Python', icon: python_icon },
        { name: 'C#', icon: csharp_icon },
        { name: 'ASP .Net', icon: asp_net_core },
        { name: 'React', icon: react_icon },
        { name: 'Angular', icon: angular_icon },
        { name: 'TensorFlow', icon: tensorflow_icon },
        { name: 'Scikit-learn', icon: scikit_learn_icon },
        { name: 'NodeJs', icon: nodejs_icon },
        { name: 'JavaScript', icon: js },
        { name: 'Typescript', icon: typescript },
        { name: 'Jupyter', icon: jupyter_icon },
        { name: 'AWS', icon: aws_icon },
        { name: 'MySQL', icon: mysql_icon },
        { name: 'MongoDB', icon: mongodb_icon },
        { name: 'PostgresSQL', icon: postgress_icon },
        { name: 'Tailwind', icon: tailwind_icon },
        { name: 'Docker', icon: docker_icon },
        { name: 'Git', icon: git_icon },
        { name: 'GitHub', icon: github_icon },
    ];

    return (
        <div className='pt-10 pb-10'>
            <h1 className="text-4xl md:text-5xl mb-6 text-center">Skills</h1>
            <p className="text-center mb-8 text-gray-600">Technologies I've been working with recently</p>
            <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6 p-10 lg:pl-24 lg:pr-24">
                {technologies.map((tech, index) => (
                    <div key={index} className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={tech.icon}
                            title={tech.name}
                            alt={tech.name}
                            className="w-12 h-12 transition-all duration-300 ease-in-out hover:scale-125"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechStack;