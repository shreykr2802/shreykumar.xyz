import React from 'react';

import tavant from '../../../assets/images/tavant-logo.png';
import classes from './Photo.css'

const photo = props => (
    <div className={classes.Photo}>
        <img src={tavant} alt='tavant'/>
    </div>
);

export default photo;