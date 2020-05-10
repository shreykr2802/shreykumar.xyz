import React from 'react';

import classes from './Projects.css';
import thumbnail1 from '../../assets/images/thumbnail-1.png';

const projects = props => (
    <section id="projects" className={classes.Projects}>
        <h1>Projects</h1>
        <div className={classes.Container}>
            <a href="http://shreykumar.xyz" rel="noopener noreferrer" target="_blank" className={classes.Box1}>
                <span className={classes.Box1InitialDesc}>
                    <img src={thumbnail1} alt='Shrey Kumar' />
                    <span className={classes.Technologies}>
                        <span className={classes.viewProject}><small>HTML</small></span>
                        <span className={classes.viewProject}><small>CSS</small></span>
                        <span className={classes.viewProject}><small>JS</small></span>
                        <span className={classes.viewProject}><small>React.JS</small></span>
                    </span>
                </span>
                <span className={classes.Box1Span}>
                    <h3>SHREYKUMAR.XYZ</h3>
                    <p>Created a personal bio/profile website using React JS</p>
                    <span className={classes.viewProject}><small>View Project</small></span>
                </span>
            </a>
            <a href="3" rel="noopener noreferrer" className={classes.Box2}>
                {/* <img alt='Shrey Kumar' /> */}
                <span className={classes.Box2Span}>
                    <h3>COMING SOON</h3>
                    <p>Coming Soon</p>
                    <span className={classes.viewProject}><small>View Project</small></span>
                </span>
            </a>
            <a href="3" rel="noopener noreferrer" className={classes.Box2}>
                {/* <img alt='Shrey Kumar' /> */}
                <span className={classes.Box2Span}>
                    <h3>COMING SOON</h3>
                    <p>Coming Soon</p>
                    <span className={classes.viewProject}><small>View Project</small></span>
                </span>
            </a>
            <a href="3" rel="noopener noreferrer" className={classes.Box1}>
                {/* <img alt='Shrey Kumar' /> */}
                <span className={classes.Box1Span}>
                    <h3>COMING SOON</h3>
                    <p>Coming Soon</p>
                    <span className={classes.viewProject}><small>View Project</small></span>
                </span>
            </a>
        </div>
    </section>
);

export default projects;