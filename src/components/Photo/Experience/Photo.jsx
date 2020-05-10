import React from 'react';

import tavant from '../../../assets/images/tavant-logo.png';
import classes from './Photo.css'

const photo = props => {

    let image = null;

    if (props.companyName === 'tavant')
        image = <img src={tavant} alt='tavant' />;

    return (
        <a className={classes.Photo}>
            {image}
        </a>
    )
}

export default photo;