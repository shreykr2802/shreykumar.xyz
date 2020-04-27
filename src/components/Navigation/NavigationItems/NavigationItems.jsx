import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
       <NavigationItem link="#home">Home</NavigationItem>
       <NavigationItem link="#aboutme">About Me</NavigationItem>
       <NavigationItem link="#experience">Experience</NavigationItem>
       <NavigationItem link="/">Education</NavigationItem>
       <NavigationItem link="/">Testimonials</NavigationItem>
       <NavigationItem link="/">Projects</NavigationItem>
       <NavigationItem link="/">Contact Me</NavigationItem>
    </ul>
);

export default navigationItems;