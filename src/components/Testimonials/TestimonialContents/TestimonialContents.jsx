import React from 'react';
import TestimonialPhoto from '../../Photo/Testimonials/Photo';

import classes from './TestimonialContents.css';

const testimonialContents = props => (
    <div className={classes.TestimonialContents}>
        <TestimonialPhoto photoId={props.photoId} />
        <div className={classes.TestimonialContentContainer}>
            <div className={classes.TestimonialName}>{props.name}</div>
            <div className={classes.TestimonialDesignation}>{props.designation}</div>
            <div className={classes.TestimonialCompany}>{props.company}</div>
            <div className={classes.TestimonialText}>{props.description}</div>
        </div>
    </div>

)

export default testimonialContents;