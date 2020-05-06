import React, { Component } from 'react';

import Toolbar from '../components/Navigation/Toolbar/Toolbar';
import TopDrawer from '../components/Navigation/TopDrawer/TopDrawer';
import Home from '../components/Home/Home';
import AboutMe from '../components/AboutMe/AboutMe';
import Experience from '../components/Experience/Experience';
import Education from '../components/Education/Education';
import Testimonials from '../components/Testimonials/Testimonials';
import Projects from '../components/Projects/Projects';
import ContactMe from '../components/ContactMe/ContactMe';
import Footer from '../components/Footer/Footer';

import classes from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState(prevState => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <div>
                <Toolbar toggle={this.sideDrawerToggleHandler} />
                <TopDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                />
                <main className={classes.Content}>
                <Home />
                <AboutMe />
                <Experience />
                <Education />
                <Testimonials />
                <Projects />
                <ContactMe />
                <Footer />
                </main>
                
            </div>
        )
    }
}

export default Layout;