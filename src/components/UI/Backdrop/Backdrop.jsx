import React from 'react';

import classed from './Backdrop.css';

const backdrop = props => (
    props.show ? <div className={classed.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;