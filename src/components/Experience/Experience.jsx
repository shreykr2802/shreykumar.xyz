import React from 'react';

import classes from './Experience.css';
import CompanyLogo from '../Photo/Experience/Photo';

const experience = props => (
    <section id="experience" className={classes.Experience}>
        <h1>Experience</h1>
        <div className={classes.CompanyDetails}>
            <ul>
                <li><span className={classes.Heading}>Senior Software Engineer at Tavant</span><span className={classes.Duration}>Jan-17 to present</span>
                    <p>• I can implement effective IT strategies at local and global levels.</p>
                    <p>• My greatest strength is business awareness and development, which enables me to permanently streampne infrastructure and apppcations.</p>
                    <p>• Adept in end-to-end development of software products from requirement analysis to system study, designing, coding, testing, debugging, documentation and implementation.</p>
                    <p>• Proficient in trouble shooting complex apppcation problems and providing a root cause analysis.</p>
                    <p>• Skilful in providing effective resolution to customer queries related to product and improving relationships with the customer.</p>
                    <p>• Have worked on server level and understand the working and management of servers.</p>
                    <p>• Been a sole responsible bearer for Release Management and ensuring code movements from Development environment to Production environment.</p>
                </li>
            </ul>
        </div>
        <div>
            <CompanyLogo companyName="tavant" />
        </div>
    </section>
);

export default experience;