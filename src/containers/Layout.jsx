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

import { FaAngleDoubleUp } from "react-icons/fa";

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

    handleClickOfNav = (event) => {
        event.preventDefault();
        const element = document.getElementById(event.target.name);
        let y = element.getBoundingClientRect().top + window.scrollY;
        y = y - 56;
        window.scroll({
            top: y,
            behavior: 'smooth'
        });
    }

    render() {
        return (
            <div>
                <Toolbar toggle={this.sideDrawerToggleHandler} clicked={this.handleClickOfNav} />
                <TopDrawer
                    closed={this.sideDrawerClosedHandler}
                    open={this.state.showSideDrawer}
                    clicked={this.handleClickOfNav} 
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
                    <a href="" name="home" className={classes.Up} onClick={(event) => this.handleClickOfNav(event)}><FaAngleDoubleUp onClick={(event) => {
                        event.target.name = 'home';
                        this.handleClickOfNav(event)
                    }} size="2rem"/></a>
                </main>

            </div>
        )
    }
}

export default Layout;