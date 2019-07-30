import React, { Component } from 'react';

import Header from './header/header.component';
import Menu from './menu/menu.component';
import Hero from './hero/hero.component';
import Project from './project/project.component';
import Nav from './nav/nav.component';
import ModalVideo from './modal-video/modal-video.component';
import EducationAndExperience from './education-and-experience/education-and-experience.component';
import Skills from './skills/skills.component';
import Contact from './contact/contact.component';
import Cta from './cta/cta.component';
import Footer from './footer/footer.component';

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
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
