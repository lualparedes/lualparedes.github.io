import React, { Component } from 'react';
import './App.css';

import Header from './components/header/header.component';
import Menu from './components/menu/menu.component';
import Hero from './components/hero/hero.component';
import Project from './components/project/project.component';
import Nav from './components/nav/nav.component';
import ModalVideo from './components/modal-video/modal-video.component';
import EducationAndExperience from './components/education-and-experience/education-and-experience.component';
import Skills from './components/skills/skills.component';
import Contact from './components/contact/contact.component';
import Cta from './components/cta/cta.component';
import Footer from './components/footer/footer.component';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Menu />
                <Hero />
                <Nav />
                <Project />
                <ModalVideo />
                <EducationAndExperience />
                <Skills />
                <Contact />
                <Cta />
                <Footer />
            </div>
        );
    }
}