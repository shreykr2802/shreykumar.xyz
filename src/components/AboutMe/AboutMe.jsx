import React from 'react';

import classes from './AboutMe.css';
import Photo from '../Photo/AboutMe/Photo';

import { FaRegSmileWink } from "react-icons/fa";

const aboutMe = props => (
    <section id="aboutme" className={classes.AboutMe}>
        <h1>About Me</h1>
        <div className={classes.AboutMeContainer}>
        <div>
            <Photo />
        </div>
        <div className={classes.Description}>
            <p>Hi I am Shrey Kumar. I was born in Bihar to my Mom and Dad obviously and then moved all across India. I have completed my schooling from various parts of the India!</p>
            <p>I have been learning and practicing programming since I was 13 years of age!</p>
            <p>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience.</p>
            <p>Over the course of years I have learned various programming languages and actively learning new things, and web designing took my heart!</p>
            <p>I am often termed as Ambitious, Smart Worker, Enthusiastic towards work! Not to brag here but I do believe it! <FaRegSmileWink size="1rem"/></p>
            <p>I love to travel and usually spend my free time by watching TV Series!</p>
        </div>
        </div>
    </section>
);

export default aboutMe;