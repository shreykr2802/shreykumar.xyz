import React, { useState, useEffect } from 'react';

import classes from './Testimonials.css';
import TestimonialPhoto from '../Photo/Testimonials/Photo';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = props => {

    const [x, setX] = useState(0);

    const [navigationDotClass, setNavigationDotClass] = useState([
        classes.navigationDotsDivActive,
        classes.navigationDotsDiv,
        classes.navigationDotsDiv
    ]);

    const [index, setIndex] = useState(0);

    const testimony = [
        <div id="testimonial1">
            <TestimonialPhoto />
            <p>Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed</p>
            <p>1 Wroking as ABC in XYZ</p>
        </div>,
        <div id="testimonial2">
            <TestimonialPhoto />
            <p>Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed</p>
            <p>2 Wroking as ABC in XYZ</p>
        </div>,
        <div id="testimonial3">
            <TestimonialPhoto />
            <p>Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed</p>
            <p>3 Wroking as ABC in XYZ</p>
        </div>
    ];

    const goLeft = () => {
        const offset = x === 0 ? -100 * (testimony.length - 1) : x + 100;
        const index = x === 0 ? testimony.length - 1 : Math.abs(x / 100) - 1;
        changeClassAndDiv(index, offset);
    }

    const goRight = () => {
        const offset = x === -100 * (testimony.length - 1) ? 0 : x - 100;
        const index = x === -100 * (testimony.length - 1) ? 0 : Math.abs(x / 100) + 1;
        changeClassAndDiv(index, offset);
    }

    const navDots = [];

    for (let i = 0; i < testimony.length; i++) {
        navDots.push(<div key={i} className={navigationDotClass[i]} onClick={() => changeClassAndDiv(i, i * -100)}></div>);
    }

    const changeClassAndDiv = (index, offset) => {
        const updatedArray = [...navigationDotClass];
        updatedArray.fill(classes.navigationDotsDiv);
        updatedArray[index] = classes.navigationDotsDivActive;
        setNavigationDotClass(updatedArray);
        setIndex(index);
        setX(offset);
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            const newIndex = index === testimony.length - 1 ? 0 : index + 1;
            changeClassAndDiv(newIndex, newIndex * -100);
        }, 5000);

        return () => {
            clearTimeout(timer);
        }
    }, [x, index]);

    return (
        <section id="testimonials" className={classes.Testimonials}>
            <h1>Testimonials</h1>
            <div className={classes.container}>
                {testimony.map((t, index) => {
                    return (
                        <div key={index} className={classes.SlideTestimonial} style={{ transform: `translateX(${x}%)` }}>
                            {t}
                        </div>
                    );
                })}
                <button className={classes.navigation + " " + classes.goLeft} onClick={goLeft}><FaChevronLeft size="2em" /></button>
                <button className={classes.navigation + " " + classes.goRight} onClick={goRight}><FaChevronRight size="2em" /></button>
            </div>
            <div className={classes.navigationDots}>
                {navDots}
            </div>

        </section>
    );
}

export default testimonials;