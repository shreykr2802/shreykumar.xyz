import React from 'react';

import classes from './Input.css';

const input = props => {

    const inputClasses = [classes.InputElement];

    if (props.inValid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch (props.elementType) {
        case ('input'):
            return <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
        case ('textarea'):
            inputClasses.push(classes.Message);
            return <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
        case ('select'):
            return (
                <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>);
        default:
            return <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
    }

}

export default input;