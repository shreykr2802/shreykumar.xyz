import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
       <NavigationItem link="#home">Home</NavigationItem>
       <NavigationItem link="#aboutme">About Me</NavigationItem>
       <NavigationItem link="#experience">Experience</NavigationItem>
       <NavigationItem link="#education">Education</NavigationItem>
       <NavigationItem link="#testimonials">Testimonials</NavigationItem>
       <NavigationItem link="#projects">Projects</NavigationItem>
       <NavigationItem link="#contactme">Contact Me</NavigationItem>
    </ul>
);

export default navigationItems;