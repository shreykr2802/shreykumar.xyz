import React, { Component } from 'react';

import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Home from '../components/Home/Home';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';

class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <Home />
                <AboutMe />
                <Experience />
            </div>
        )
    }
}

export default Layout;