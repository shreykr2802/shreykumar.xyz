import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = props => {

    const navLinks = {
        'Home': {
            href: '#home',
            name: 'home',
        },
        'About Me': {
            href: '#aboutme',
            name: 'aboutme',
        },
        'Experience': {
            href: '#experience',
            name: 'experience',
        },
        'Education': {
            href: '#education',
            name: 'education',
        },
        'Testimonials': {
            href: '#testimonials',
            name: 'testimonials',
        },
        'Projects': {
            href: '#projects',
            name: 'projects',
        },
        'Contact Me': {
            href: '#contactme',
            name: 'contactme',
        }
    };

    const linksArray = [];
    for (let key in navLinks) {
        linksArray.push({
            id: key,
            displayName: key,
            attr: navLinks[key]
        });
    }

    return (
        <ul className={classes.NavigationItems}>
            {
                linksArray.map(link => {
                    return <NavigationItem key={link.id} {...link.attr} clicked={props.clicked}>{link.displayName}</NavigationItem>
                })
            }
        </ul>
    );

}

export default navigationItems;