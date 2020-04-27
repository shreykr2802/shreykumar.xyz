import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => (
    <ul className={classes.NavigationItems}>
       <NavigationItem link="/">Home</NavigationItem>
       <NavigationItem link="/">About Me</NavigationItem>
       <NavigationItem link="/">Experience</NavigationItem>
       <NavigationItem link="/">Education</NavigationItem>
       <NavigationItem link="/">Testimonials</NavigationItem>
       <NavigationItem link="/">Projects</NavigationItem>
       <NavigationItem link="/">Contact Me</NavigationItem>
    </ul>
);

export default navigationItems;