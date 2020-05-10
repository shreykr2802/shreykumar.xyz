import React from 'react';
import classes from './Toolbar.css';

import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from '../TopDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
    <header className={classes.Toolbar}>
        <DrawerToggle toggle={props.toggle}/>
        <nav className={classes.DesktopOnly}>
            <NavigationItems clicked={props.clicked}/>
        </nav>
    </header>
);

export default toolbar;