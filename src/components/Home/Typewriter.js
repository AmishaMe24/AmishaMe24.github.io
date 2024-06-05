import React, { useEffect, useState } from 'react';
import './Typewriter.css';

const Typewriter = () => {
    const texts = ["Full-Stack Software Development", "Backend Development", "Machine Learning"];
    const [textIndex, setTextIndex] = useState(0);
    const [subTextIndex, setSubTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            if (isDeleting) {
                if (subTextIndex > 0) {
                    setCurrentText(texts[textIndex].substr(0, subTextIndex - 1));
                    setSubTextIndex(subTextIndex - 1);
                } else {
                    setIsDeleting(false);
                    setTextIndex((textIndex + 1) % texts.length);
                }
            } else {
                if (subTextIndex < texts[textIndex].length) {
                    setCurrentText(texts[textIndex].substr(0, subTextIndex + 1));
                    setSubTextIndex(subTextIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            }
        };

        const typingSpeed = isDeleting ? 150 : 150;
        const timer = setTimeout(handleTyping, typingSpeed);

        return () => clearTimeout(timer);
    }, [subTextIndex, isDeleting, textIndex, texts]);

    return (
        <div className='typewriter-container'>
            <p className='typewriter'>
                I'm interested in <span className='typewriter-text'>{currentText}</span>
            </p>
        </div>
    );
};

export default Typewriter;