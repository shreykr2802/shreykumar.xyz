import React, { Component } from 'react';

import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import Home from '../components/Home/Home';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Testimonials from '../components/Testimonials/Testimonials';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';
import Footer from '../components/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Toolbar />
                <Home />
                <AboutMe />
                <Experience />
                <Education />
                <Testimonials />
                <Projects />
                <ContactMe />
                <Footer />
            </div>
        )
    }
}

export default Layout;