import React from 'react';
import TestimonialPhoto from '../../Photo/Testimonials/Photo';

const testimonialContents = props => (
    <div>
        <TestimonialPhoto photoId={props.photoId}/>
        <p>{props.description}</p>
        <p>{props.designation}</p>
    </div>

)

export default testimonialContents;