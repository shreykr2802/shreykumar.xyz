import React from 'react';

import classes from './AboutMe.css';
import Photo from '../Photo/Photo';

const aboutMe = props => (
    <div className={classes.AboutMe}>
        <h1>About Me</h1>
        <div>
            <Photo />
        </div>
        <div className={classes.Description}>
            <p>Hi I am Shrey Kumar. I was born in Bihar, then moved all across India. I have completed my schooling from various parts of the India!
            I have been learning and practicing programming since I was 13 years of age!
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa dui, convallis sit amet lacus eu, iaculis volutpat mauris. Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed, euismod quis dolor. Praesent pellentesque mi rutrum, mattis urna in, gravida arcu. Donec sed auctor justo, quis viverra est. Etiam quis mattis erat. Quisque euismod, tellus eu rutrum cursus, nunc arcu</p>
        </div>
    </div>
);

export default aboutMe;