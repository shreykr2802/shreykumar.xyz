import React from 'react';

import classes from './Home.css';

import SocialNetworks from '../SocialNetworks/SocialNetworks';

const home = props => (
    <section id="home" className={classes.Home}>
        <div className={classes.NameDiv}>
            <p>Thank you for stopping by</p>
            <h1>Hi, I am Shrey</h1>
            <p>An Enthusiatic Web Developer | Quick Learner | Keen Observer of things</p>
        </div>
        <SocialNetworks />
    </section>
);

export default home;