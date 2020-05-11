import React from 'react';

import classes from './Experience.css';
import CompanyLogo from '../Photo/Experience/Photo';

const experience = props => (
    <section id="experience" className={classes.Experience}>
        <h1>Experience</h1>
        <div className={classes.CompanyDetails}>
            <ul>
                <li><span className={classes.Heading}>Senior Software Engineer at Tavant</span><span className={classes.Duration}>Jan-17 to present</span>
                    <p>• Worked on various technologies for various projects.</p>
                    <p>• Worked on refactoring UI for an application using React.JS.</p>
                    <p>• Worked on creating an app using Ionic Framework.</p>
                    <p>• Have worked on projects with Java, Spring Boot used for creating backend.</p>
                    <p>• Proficient in trouble shooting complex apppcation problems and providing a root cause analysis.</p>
                    <p>• Have worked on server level and understand the working and management of servers.</p>
                </li>
            </ul>
        </div>
        <div>
            <CompanyLogo companyName="tavant" />
        </div>
    </section>
);

export default experience;