import React from 'react';

import classes from './Education.css';

const education = props => (
    <section id="education" className={classes.Education}>
        <h1>Education</h1>
        <div className={classes.EducationDetails}>
            <ul>
                <li><span className={classes.Heading}>Bachelor of Engineering</span><span className={classes.Duration}>Sep-2012 to June-2016</span>
                    <p className={classes.Contents}>Computer Science and Engineering</p>
                    <p className={classes.Contents}>SDM College of Engineering and Technology, Dharwad</p>
                </li>
                <li><span className={classes.Heading}>Class XII</span><span className={classes.Duration}>May-2011 to May-2012</span>
                    <p className={classes.Contents}>CBSE Board</p>
                    <p className={classes.Contents}>Kendriya Vidayalaya Moradabad, Moradabad</p>
                </li>
                <li><span className={classes.Heading}>Class X</span><span className={classes.Duration}>May-2009 to May-2010</span>
                    <p className={classes.Contents}>CBSE Board</p>
                    <p className={classes.Contents}>Kendriya Vidayalaya Moradabad, Moradabad</p>
                </li>
            </ul>
        </div>
    </section>
);

export default education;