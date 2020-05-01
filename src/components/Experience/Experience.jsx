import React from 'react';

import classes from './Experience.css';
import CompanyLogo from '../Photo/Experience/Photo';

const experience = props => (
    <section id="experience" className={classes.Experience}>
        <h1>Experience</h1>
        <div className={classes.CompanyDetails}>

            <h3>Senior Software Engineer at Tavant</h3>
            <ul>
                <li>I can implement effective IT strategies at local and global levels.</li>
                <li>My greatest strength is business awareness and development, which enables me to permanently streamline infrastructure and applications.</li>
                <li>Adept in end-to-end development of software products from requirement analysis to system study, designing, coding, testing, debugging, documentation and implementation.</li>
                <li>Proficient in trouble shooting complex application problems and providing a root cause analysis.</li>
                <li>Skilful in providing effective resolution to customer queries related to product and improving relationships with the customer.</li>
                <li>Have worked on server level and understand the working and management of servers.</li>
                <li>Been a sole responsible bearer for Release Management and ensuring code movements from Development environment to Production environment.</li>
            </ul>
        </div>
        <div>
            <CompanyLogo companyName="tavant" />
        </div>
    </section>
);

export default experience;