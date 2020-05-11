import React from 'react';

import classes from './SocialNetworks.css'

import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub, FaEnvelope  } from "react-icons/fa";

const socialNetworks = props => (
    <div className={classes.SocialNetworks}>
        <ul className={classes.Links}>
            <li><a href="https://www.linkedin.com/in/shreykr2802" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size="2em"/></a></li>
            <li><a href="https://www.twitter.com/shreykr2802" target="_blank" rel="noopener noreferrer"><FaTwitter size="2em"/></a></li>
            <li><a href="https://www.instagram.com/shreykr2802" target="_blank" rel="noopener noreferrer"><FaInstagram size="2em"/></a></li>
            <li><a href="https://www.github.com/shreykr2802" target="_blank"rel="noopener noreferrer"><FaGithub size="2em"/></a></li>
            <li><a href="mailto:shreykr2802@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope size="2em"/></a></li>
        </ul>
    </div>
);

export default socialNetworks;