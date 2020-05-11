import React, { useState, useEffect } from 'react';

import classes from './Testimonials.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TestimonialContents from './TestimonialContents/TestimonialContents';

const testimonials = props => {

    const [x, setX] = useState([50, 0, -50]);

    const [y, setY] = useState([0, 0, 0]);

    const [navigationDotClass, setNavigationDotClass] = useState([
        classes.navigationDotsDiv,
        classes.navigationDotsDivActive,
        classes.navigationDotsDiv
    ]);

    const [index, setIndex] = useState(1);

    const [zIndex, setZIndex] = useState([18, 20, 18]);

    const [scale, setScale] = useState([0.8, 1, 0.8]);

    const testimony = [
        {
            description: 'Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed, Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed, Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed, Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed, ',
            designation: 'Project Manager',
            company: 'ABC Pvt Limited Works.',
            name: 'Shrey Kumar'
        },
        {
            description: 'Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed',
            designation: 'Project Manager',
            company: 'ABC Pvt Limited Works.',
            name: 'Shrey Kumar'
        },
        {
            description: 'Cras sit amet turpis eu dui mollis luctus vitae laoreet nunc. Nulla mi massa, vulputate a blandit a, mollis vel leo. Nam ex, auctor non faucibus sed',
            designation: 'Project Manager',
            company: 'ABC Pvt Limited Works.',
            name: 'Shrey Kumar'
        }
    ]

    const goLeft = () => {
        const indexToChange = (index === 0) ? (testimony.length - 1) : index + 1;
        changeClassAndDiv(indexToChange);
    }

    const goRight = () => {
        const indexToChange = (index === testimony.length - 1) ? 0 : index + 1;
        changeClassAndDiv(indexToChange);
    }

    const navDots = [];

    for (let i = 0; i < testimony.length; i++) {
        navDots.push(<div key={i} className={navigationDotClass[i]} onClick={() => changeClassAndDiv(i)}></div>);
    }

    const changeClassAndDiv = (index) => {

        const updatedArray = [...navigationDotClass];
        updatedArray.fill(classes.navigationDotsDiv);
        updatedArray[index] = classes.navigationDotsDivActive;
        setNavigationDotClass(updatedArray);
        setIndex(index);
        const zIndexArr = [...zIndex];
        zIndexArr.fill(19);
        zIndexArr[index] = 20;
        const scaleArr = [...scale];
        scaleArr.fill(0.8);
        scaleArr[index] = 1;
        for (let i = index - 1; i >= 0; i--) {
            zIndexArr[i] = zIndexArr[i + 1] - 1;
            scaleArr[i] = scaleArr[i + 1] - 0.1;
        }
        for (let i = index + 1; i <= testimony.length - 1; i++) {
            zIndexArr[i] = 20 - i;
            scaleArr[i] = scaleArr[i - 1] - 0.1;
        }
        setZIndex(zIndexArr);
        setScale(scaleArr);
    }

    // useEffect(() => {
    //     let timer = setTimeout(() => {
    //         const newIndex = index === testimony.length - 1 ? 0 : index + 1;
    //         changeClassAndDiv(newIndex);
    //     }, 5000);

    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [x, index]);

    useEffect(() => {
        const ele = document.querySelector('#testimonialContainer');
        console.log(window.innerWidth);
        if (window.innerWidth < 700) {
            ele.style.flexFlow = 'column';
            setX([0, 0, 0]);
            // setY([0, -60, -120]);
            setY([60, 0, -60]);
        } else {
            ele.style.flexFlow = 'row';
            setX([50, 0, -50]);
        }
    }, [window.innerWidth]);

    return (
        <section id="testimonials" className={classes.Testimonials}>
            <h1>Testimonials</h1>
            <div className={classes.container} id="testimonialContainer">
                {testimony.map((t, index) => {
                    return (
                        <div key={index} className={classes.SlideTestimonial} style={{
                            transform: `translateX(${x[index]}%) translateY(${y[index]}%) scale(${scale[index]})`,
                            zIndex: `${zIndex[index]}`
                        }} onClick={() => changeClassAndDiv(index)}>
                            <TestimonialContents {...t} photoId={index} />
                        </div>
                    );
                })}
                {/* <button className={classes.navigation + " " + classes.goLeft} onClick={goLeft}><FaChevronLeft size="2em" /></button>
                <button className={classes.navigation + " " + classes.goRight} onClick={goRight}><FaChevronRight size="2em" /></button> */}
            </div>
            <div className={classes.navigationDots}>
                {navDots}
            </div>

        </section>
    );
}

export default testimonials;