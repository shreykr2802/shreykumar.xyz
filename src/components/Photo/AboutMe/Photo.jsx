import React from 'react';

import shreyPhoto from '../../../assets/images/shreykumar.jpg';
import classes from './Photo.css'

const photo = props => (
    <div className={classes.Photo}>
        <img src={shreyPhoto} alt='Shrey Kumar'/>
    </div>
);

export default photo;